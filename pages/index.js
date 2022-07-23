import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);

  const decrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  const increment = () => {
    setCount(count + 1);
  };
  return (
    <main className="text-center py-4">
      {/* Title */}
      <div className="pb-10">
        <h1 className="pb-4 text-4xl text-blue-600 font-bold">Epik Counter App</h1>
        <p>By: Ayush Kumar</p>
        <p>Created: 21 July, 2022</p>
        <a href="https://github.com/kumarhimself/epik-counter-app">View Source Code</a>
      </div>

      {/* Counter */}
      <div className="pb-10">
        <h1 className="pb-4 text-4xl text-blue-600 font-semibold">{count}</h1>
        <p className="mx-10 pb-3">Click on one of these buttons to modify the number above!</p>
        <div className="flex flex-col justify-center sm:flex-row">
          <button
            onClick={decrement}
            className="mx-4 my-2 sm:my-0 p-2 rounded-sm bg-blue-600 text-white hover:bg-blue-900 transition-all"
          >
            Decrement
          </button>
          <button
            onClick={reset}
            className="mx-4 my-2 sm:my-0 p-2 rounded-sm bg-blue-600 text-white hover:bg-blue-900 transition-all"
          >
            Reset
          </button>
          <button
            onClick={increment}
            className="mx-4 my-2 sm:my-0 p-2 rounded-sm bg-blue-600 text-white hover:bg-blue-900 transition-all"
          >
            Increment
          </button>
        </div>
      </div>

      {/* Details about application */}
      <p className="mx-10">
        This counter app was made with Next.js and Tailwind CSS. Next.js is a React framework that provides
        out-of-the-box features such as dynamic page and API routing, image optimization, bundling, code splitting, and
        pre-rendering (static generation and server-side rendering). Tailwind CSS is a utility-first framework that
        allows the user to focus on how items on the website should look rather than the functionality of styling.
      </p>
    </main>
  );
}
