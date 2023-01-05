import { Head } from "$fresh/runtime.ts";
import Counter from "../islands/Counter.tsx";
import Movie from "../islands/Movie.tsx";
import Show from "../islands/Show.tsx";

export default function Home() {
  return (
    <>
      <Head>
        <title>Fresh App</title>
      </Head>
      <div>
        <img
          src="/logo.svg"
          width="128"
          height="128"
          alt="the fresh logo: a sliced lemon dripping with juice"
        />
        <button> click</button>
        <img src="" />
        Your browser does not support the video tag.
         
        <p>
          Welcome to `fresh`. Try updating this message in the ./routes/index.tsx
          file, and refresh.
        </p>
        <Counter start={3} />
      </div>

      <div>
      <Show></Show>
      <Movie></Movie>
      </div>
    </>
  );
}
