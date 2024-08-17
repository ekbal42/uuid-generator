import "./App.css";
import { v4 as uuidv4 } from "uuid";

function App() {
  const uuid = uuidv4();

  const copyUUID = () => {
    navigator.clipboard.writeText(uuid);
    alert("UUID copied to clipboard");
  };
  return (
    <>
      <div className="bg-zinc-500 py-4">
        <div className="max-w-6xl mx-auto flex gap-2 px-6 md:px-0">
          <p className="text-white font-semibold text-lg">UUID Generator</p>
        </div>
      </div>
      <div className="bg-zinc-900">
        <div className="max-w-6xl mx-auto">
          <div className="">
            <div className="py-12 h-full">
              <h1 className="text-5xl font-bold text-center text-white">
                Online UUID Generator
              </h1>
              <div className="py-3">
                <p className="text-center mb-2 text-zinc-500">
                  Your Version 4 UUID:
                </p>
                <div className="flex flex-col md:flex-row gap-3 justify-center items-center ">
                  <p className="font-semibold text-white text-3xl text-center md:text-start">
                    {uuid || "Loading..."}
                  </p>
                  <button
                    className="bg-zinc-500 px-4 py-1 rounded text-white uppercase"
                    onClick={copyUUID}
                  >
                    Copy
                  </button>
                </div>
                <p className="text-center mt-6 text-zinc-500 text-2xl">
                  Refresh page to generate another.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
