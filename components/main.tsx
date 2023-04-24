import Card from "./card";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Main = () => {
  const [wordInput, setWordInput] = useState("");
  const [result, setResult] = useState(
    "I'm no fortune teller, but I can predict one thing - I'm about to surprise you with something special.    "
  );

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ word: wordInput }),
      });

      const data = await response.json();
      if (response.status !== 200) {
        throw (
          data.error ||
          new Error(`Request failed with status ${response.status}`)
        );
      }

      setResult(data.result);
      setWordInput("");
      console.log(result);
    } catch (error) {
      // Consider implementing your own error handling logic here
      console.error(error);
    }
  }

  async function onSurpriseMe() {
    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ word: "surprise" }),
      });

      const data = await response.json();
      if (response.status !== 200) {
        throw (
          data.error ||
          new Error(`Request failed with status ${response.status}`)
        );
      }

      setResult(data.result);
      setWordInput("");
      console.log(result);
    } catch (error) {
      // Consider implementing your own error handling logic here
      console.error(error);
    }
  }

  return (
    <>
      <div className="mt-8 lg:mt-16 lg:mb-16 px-4 lg:px-32 wrapper grid h-full lg:w-full flex-1 gap-16 lg:py-4 lg:grid-cols-2">
        <Card text={result} />
        <section className="flex flex-col justify-center gap-4">
          <form className="space-y-2" onSubmit={onSubmit}>
            <div>
              <label htmlFor="keyword" className="sr-only">
                Keyword
              </label>
              <input
                type="text"
                name="keyword"
                id="keyword"
                className="block w-full rounded-2xl border-2 border-black/5 bg-black/5 p-4 focus:border-brand focus:ring-brand"
                placeholder="Enter a keyword (e.g. heart, hair, eyes, etc.)"
                required
                value={wordInput}
                onChange={(e) => setWordInput(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="btn text-white py-4 rounded-[20px] hover:bg-primaryDarker bg-primary w-full"
            >
              Generate
            </button>
          </form>
          <fieldset className="border-t border-black">
            <legend className="mx-auto px-4 py-4 text-2xl">OR</legend>
            <button
              className="btn text-white py-4 rounded-[20px] hover:bg-primaryDarker bg-primary w-full"
              onClick={onSurpriseMe}
            >
              Surprise me!
            </button>
          </fieldset>
          <ToastContainer />
        </section>
      </div>
    </>
  );
};

export default Main;
