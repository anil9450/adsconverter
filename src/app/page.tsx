"use client";
import { useState } from "react";
import useClipboardCopy from "@/hooks/useClipboardCopy";
/* import Dropdown from "@/components/Dropdown"; */
import { Dropdown } from "flowbite-react";
import data from "./data";

export default function Home() {
  const [ads, setAds] = useState("");
  const [url, setUrl] = useState("");
  const [output, setOutput] = useState("");
  const [currentScript, setCurrentScript] = useState("script1");

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

  const handleOnChange = (value: string) => {
    setCurrentScript(value);
    if (value === "script1") {
      setOutput(data.table1);
    }
    if (value === "script2") {
      setOutput(data.table2[0]);
    }
    if (value === "script3") {
      setOutput(data.table3[0]);
    }
    if (value === "script4") {
      setOutput(data.table4[0]);
    }
    if (value === "script5") {
      setOutput(data.table5[0]);
    }
    if (value === "script6") {
      setOutput(data.table6[0]);
    }
    if (value === "script7") {
      setOutput(data.table7[0]);
    }
    if (value === "script8") {
      setOutput(data.table8[0]);
    }
    if (value === "script9") {
      setOutput(data.table9[0]);
    }
    if (value === "script10") {
      setOutput(data.table10[0]);
    }
    if (value === "script11") {
      setOutput(data.table11[0]);
    }
  };

  const handleReset = () => {
    setAds("");
    setUrl("");
    setOutput("");
  };

  const copyToClipboard = useClipboardCopy();

  return (
    <main className="">
      <div className="m-4">
        <Dropdown
          label={"Click to Select"}
          defaultValue={currentScript}
          value={currentScript}
        >
          <Dropdown.Item
            value={"script1"}
            onClick={() => handleOnChange("script1")}
          >
            ***POP-UP Ad***
          </Dropdown.Item>
          <Dropdown.Item
            value={"script2"}
            onClick={() => handleOnChange("script2")}
          >
            ****BOTTOM ANCHOR****
          </Dropdown.Item>
          <Dropdown.Item
            value={"script3"}
            onClick={() => handleOnChange("script3")}
          >
            ****TOP ANCHOR AD****
          </Dropdown.Item>
          <Dropdown.Item
            value={"script4"}
            onClick={() => handleOnChange("script4")}
          >
            ****INTERSTITIAL Ad****
          </Dropdown.Item>
          <Dropdown.Item
            value={"script5"}
            onClick={() => handleOnChange("script5")}
          >
            ****Bottom sticky refresh ad****
          </Dropdown.Item>
          <Dropdown.Item
            value={"script6"}
            onClick={() => handleOnChange("script6")}
          >
            ******RESPONSIVE Ad******
          </Dropdown.Item>
          <Dropdown.Item
            value={"script7"}
            onClick={() => handleOnChange("script7")}
          >
            ***300X250 ad***
          </Dropdown.Item>
          <Dropdown.Item
            value={"script8"}
            onClick={() => handleOnChange("script8")}
          >
            ***300X600 Side-bar ad***
          </Dropdown.Item>
          <Dropdown.Item
            value={"script9"}
            onClick={() => handleOnChange("script9")}
          >
            *****FLYING CARPET Ad****
          </Dropdown.Item>
          <Dropdown.Item
            value={"script10"}
            onClick={() => handleOnChange("script10")}
          >
            ***LEFT SIDE STICKY Ad***
          </Dropdown.Item>
          <Dropdown.Item
            value={"script11"}
            onClick={() => handleOnChange("script11")}
          >
            ****RIGHT SIDE STICKY AD****
          </Dropdown.Item>
        </Dropdown>

        <div>
          {/* <div className="grid sm:gap-96 grid-cols-1 gap-10 sm:grid-cols-3">
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
        </div> */}
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
          <div className="mt-5">
            <textarea className="w-full h-72 rounded p-5" value={output} />
          </div>
        </div>
      </div>
    </main>
  );
}
