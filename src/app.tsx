import { MetaProvider, Title } from "@solidjs/meta";
import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Suspense } from "solid-js";
import "./app.css";
import { clientOnly } from "@solidjs/start";
import { DebugContext } from "./utils";

const ClientComponent = clientOnly(
  () => import("./components/ClientComponent")
);

export default function App() {
  // This is a boolean value that will be used to simulate a hydration error.
  // Set this to false to see the error disappear.
  const perform_hydration_error = true;

  return (
    <>
      <ClientComponent />
      <Router
        root={(props) => (
          <MetaProvider>
            <Title>SolidStart - Basic</Title>
            <a href="/">Index</a>
            <a href="/about">About</a>
            <DebugContext.Provider value={perform_hydration_error}>
              <Suspense>{props.children}</Suspense>
            </DebugContext.Provider>
          </MetaProvider>
        )}
      >
        <FileRoutes />
      </Router>
    </>
  );
}
