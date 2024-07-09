"use client";
import { useState } from "react";
import useClipboardCopy from "@/hooks/useClipboardCopy";

export default function Home() {
  const [ads, setAds] = useState("");
  const [url, setUrl] = useState("");
  const [output, setOutput] = useState("");

  const handleConvert = async () => {
    const response = await fetch("/api", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ adsSlot: ads, url }),
    });
    const data = await response.json();
    setOutput(data);
  };

  const handleReset = () => {
    setAds("");
    setUrl("");
    setOutput("");
  };

  const copyToClipboard = useClipboardCopy();

  return (
    <main className="">
      <div className="m-4 sm:m-36">
        <div className="grid sm:gap-96 grid-cols-1 gap-10 sm:grid-cols-3">
          <div className="">
            <label className="block text-base font-semibold leading-7 text-gray-900">
              Ads Slot
            </label>
            <p>
              <input
                type="text"
                className="rounded"
                value={ads}
                onChange={(e) => setAds(e.target.value)}
              />
            </p>
          </div>

          <div className="">
            <label className="block text-base font-semibold leading-7 text-gray-900">
              Website URL
            </label>
            <p>
              <input
                type="text"
                className="rounded"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
              />
            </p>
          </div>

          <div className="mt-6">
            <button
              type="button"
              className="rounded-md bg-indigo-600 px-2 py-2 text-sm font-semibold
                      text-white shadow-sm hover:bg-indigo-500"
              onClick={handleConvert}
            >
              Convert
            </button>
            <button
              type="button"
              className="rounded-md bg-indigo-600 px-2 py-2 text-sm font-semibold
                      text-white shadow-sm hover:bg-indigo-500 mx-2"
              onClick={handleReset}
            >
              Reset
            </button>
          </div>
        </div>

        <div className="col-span-full mt-14">
          <label className="block text-base font-semibold leading-7 text-gray-900">
            Output in the form of Popup & Single Line Script
            <span className="p-5">
              <button
                className="p-1 bg-slate-900 rounded text-white"
                onClick={() => copyToClipboard(`${output}`)}
              >
                Copy
              </button>
            </span>
          </label>
          <div className="">
            <textarea className="w-full h-72 rounded p-5" value={output} />
          </div>
        </div>
      </div>
    </main>
  );
}
