"use client";
import { useState } from "react";
import useClipboardCopy from "@/hooks/useClipboardCopy";
/* import Dropdown from "@/components/Dropdown"; */
import { Dropdown } from "flowbite-react";
import data from "./data";
import Image from "next/image";

export default function Home() {
  const [ads, setAds] = useState("");
  const [url, setUrl] = useState("");
  const [output, setOutput] = useState("");
  const [scriptName, setScriptName] = useState("Click to Select");
  const [darkMode, setDarkMode] = useState(false);

  /* const [currentScript, setCurrentScript] = useState("Click to Select"); */

  const handleConvert = async () => {
    const response = await fetch("/api", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ adsSlot: ads, url, scriptName }),
    });
    const data = await response.json();
    setOutput(data);
  };

  const handleOnChange = (value: string) => {
    setScriptName(value);
  };

  const handleReset = () => {
    setAds("");
    setUrl("");
    setOutput("");
    setScriptName("Select to Click");
  };

  const copyToClipboard = useClipboardCopy();

  return (
    <main className={`${darkMode ? "dark" : ""} text-black`}>
      <div className="m-4">
        <div className="grid sm:grid-cols-3 sm:gap-32 gap-4 grid-cols">
          <div className="flex-auto mt-8">
            <Dropdown
              className=""
              label={scriptName}
              defaultValue={scriptName}
              value={scriptName}
            >
              <Dropdown.Item
                value={"POP-UP Ad"}
                onClick={() => handleOnChange("POP-UP Ad")}
              >
                POP-UP Ad
              </Dropdown.Item>
              <Dropdown.Item
                value={"BOTTOM ANCHOR"}
                onClick={() => handleOnChange("BOTTOM ANCHOR")}
              >
                BOTTOM ANCHOR
              </Dropdown.Item>
              <Dropdown.Item
                value={"TOP ANCHOR AD"}
                onClick={() => handleOnChange("TOP ANCHOR AD")}
              >
                TOP ANCHOR AD
              </Dropdown.Item>
              <Dropdown.Item
                value={"INTERSTITIAL Ad"}
                onClick={() => handleOnChange("INTERSTITIAL Ad")}
              >
                INTERSTITIAL Ad
              </Dropdown.Item>
              <Dropdown.Item
                value={"Bottom sticky refresh ad"}
                onClick={() => handleOnChange("Bottom sticky refresh ad")}
              >
                Bottom sticky refresh ad
              </Dropdown.Item>
              <Dropdown.Item
                value={"RESPONSIVE Ad"}
                onClick={() => handleOnChange("RESPONSIVE Ad")}
              >
                RESPONSIVE Ad
              </Dropdown.Item>
              <Dropdown.Item
                value={"300X250 ad"}
                onClick={() => handleOnChange("300X250 ad")}
              >
                300X250 ad
              </Dropdown.Item>
              <Dropdown.Item
                value={"300X600 Side-bar ad"}
                onClick={() => handleOnChange("300X600 Side-bar ad")}
              >
                300X600 Side-bar ad
              </Dropdown.Item>
              <Dropdown.Item
                value={"FLYING CARPET Ad"}
                onClick={() => handleOnChange("FLYING CARPET Ad")}
              >
                FLYING CARPET Ad
              </Dropdown.Item>
              <Dropdown.Item
                value={"LEFT SIDE STICKY Ad"}
                onClick={() => handleOnChange("LEFT SIDE STICKY Ad")}
              >
                LEFT SIDE STICKY Ad
              </Dropdown.Item>
              <Dropdown.Item
                value={"RIGHT SIDE STICKY AD"}
                onClick={() => handleOnChange("RIGHT SIDE STICKY AD")}
              >
                RIGHT SIDE STICKY AD
              </Dropdown.Item>
            </Dropdown>
          </div>

          <div className="flex-auto">
            <label className="block text-base font-semibold leading-7 text-blue-600">
              Enter Ads Slot
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

          <div className="flex-auto">
            <label className="block text-base font-semibold leading-7 text-blue-600">
              Enter Website URL
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
        </div>

        <div className="flex place-content-center mt-10">
          <div className="">
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
          <label className="block text-base font-semibold leading-7 text-blue-600">
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
          <div className="mt-5">
            <textarea
              className="w-full h-72 rounded p-5 text-black"
              value={output}
            />
          </div>
        </div>
      </div>

      <div className="grid grid-rows-1 grid-flow-col">
        <div className="col-start-2">
          <Image src="/image/White.png" width={100} height={100} alt="" />
        </div>
        <div className="col-start-12 mt-8">
          <h1 className="font-bold">Proudely powered by Monetiscope</h1>
        </div>
      </div>
    </main>
  );
}
