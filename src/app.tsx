import { MetaProvider, Title } from "@solidjs/meta";
import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Suspense } from "solid-js";
import "./app.css";
import { clientOnly } from "@solidjs/start";

const ClientComponent = clientOnly(
  () => import("./components/ClientComponent")
);

export default function App() {
  return (
    <>
      <ClientComponent />
      <Router
        root={(props) => (
          <MetaProvider>
            <Title>SolidStart - Basic</Title>
            <a href="/">Index</a>
            <a href="/about">About</a>
            <Suspense>{props.children}</Suspense>
          </MetaProvider>
        )}
      >
        <FileRoutes />
      </Router>
    </>
  );
}