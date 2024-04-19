import { Title } from "@solidjs/meta";
import { Show, createResource } from "solid-js";
import Counter from "~/components/Counter";
import { useDebugContext } from "~/utils";

export default function Home() {
  const [data] = createResource(async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    return res.json();
  });

  const shouldError = useDebugContext();

  return (
    <main>
      <Title>Hello World</Title>
      <h1>Hello world!</h1>
      <Show when={!shouldError}>
        <div>{JSON.stringify(data())}</div>
      </Show>
      <Counter />
      <p>
        Visit{" "}
        <a href="https://start.solidjs.com" target="_blank">
          start.solidjs.com
        </a>{" "}
        to learn how to build SolidStart apps.
      </p>
    </main>
  );
}
