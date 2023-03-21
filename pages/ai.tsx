import React, { useState } from "react";

const AI = () => {
    const [aiFeedback, setAiFeedback] = useState("");
    const [aiName, setAiName] = useState("");
    const [industry, setIndustry] = useState("");
    const [keyWords, setKeyWords] = useState("");
    const [variant, setVariant] = useState("");
    const [numWords, setNumWords] = useState("");
  
    const [isRunning, setIsRunning] = useState(false);
    const [isCopied, setIsCopied] = useState(false);
  
    const handleCopy = () => {
      navigator.clipboard.writeText(aiFeedback);
      setIsCopied(true);
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      setIsRunning(true);
      const res = await fetch("/api/ai", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          aiName,
          industry,
          keyWords,
          variant,
          numWords,
        }),
      });
      setIsRunning(false);
      var data = await res.json()
      data = {"aiOutput": "Testin underway for API and stuff that will work"}
      setAiFeedback(data.aiOutput.trim());
    };
  
    return (
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-y-12 md:grid-cols-2 md:gap-x-12 ">
          <div className="">
            <form onSubmit={(e) => handleSubmit(e)}>
              <div className="flex flex-col">
                <label className="sr-only" htmlFor="aiName">
                  AI Name
                </label>
                <input
                  type="text"
                  className="block w-full rounded-md bg-white border border-gray-400 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm px-4 py-2 placeholder-gray-500 my-2 text-gray-900"
                  name="aiName"
                  placeholder="AI Name (ex. Vhud)"
                  id="aiName"
                  value={aiName}
                  onChange={(e) => setAiName(e.target.value)}
                  required
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="industry" className="sr-only">
                  Industry
                </label>
                <input
                  value={industry}
                  onChange={(e) => setIndustry(e.target.value)}
                  className="block w-full rounded-md bg-white border border-gray-400 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm px-4 py-2 placeholder-gray-500 my-2 text-gray-900"
                  placeholder="Industry (Optional)"
                  type="text"
                  name="industry"
                  id="industry"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="keywords" className="sr-only">
                  Keywords for AI (Optional)
                </label>
                <textarea
                  rows={7}
                  value={keyWords}
                  onChange={(e) => setKeyWords(e.target.value)}
                  name="keyWords"
                  id="keyWords"
                  placeholder="Keywords for AI (Optional)"
                  className="block w-full rounded-md bg-white border border-gray-400 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm px-4 py-2 placeholder-gray-500 my-2 text-gray-900"
                />
              </div>
              <div className="flex flex-col">
                <label className="sr-only" htmlFor="variant">
                  Variant
                </label>
  
                <select
                  value={variant}
                  onChange={(e) => setVariant(e.target.value)}
                  className="block w-full rounded-md bg-white border border-gray-400 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm px-4 py-2 placeholder-gray-500 my-2 text-gray-900"
                  name="variant"
                  id="variant"
                >
                  <option value="default">Select Variant (Optional)</option>
                  <option value="casual">Casual</option>
                  <option value="friendly">Friendly</option>
                  <option value="professional">Professional</option>
                  <option value="formal">Formal</option>
                </select>
              </div>
              <div className="flex flex-col">
                <label htmlFor="words" className="sr-only">
                  Words (Optional)
                </label>
                <input
                  value={numWords}
                  onChange={(e) => setNumWords(e.target.value)}
                  type="number"
                  className="block w-full rounded-md bg-white border border-gray-400 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm px-4 py-2 placeholder-gray-500 my-2 text-gray-900"
                  placeholder="Number Of Words - Default 200 (Optional)"
                  name="words"
                  id="words"
                />
              </div>
  
              <button
                className={`bg-blue-600 w-full hover:bg-blue-700 text-white font-bold mt-6 py-2 px-4 rounded
                  ${
                    isRunning || aiName === ""
                      ? "cursor-not-allowed opacity-50"
                      : ""
                  }`}
                type="submit"
                disabled={isRunning || aiName === ""}
              >
                {isRunning ? "Running..." : "Running AI Job!"}
              </button>
            </form>
          </div>
          <div className="">
            <div className="flex flex-col">
              <label htmlFor="output" className="sr-only">
                AI Output
              </label>
              <textarea
                rows={
                  aiFeedback === ""
                    ? 7
                    : aiFeedback.split("\n").length + 12
                }
                name="output"
                value={aiFeedback}
                onChange={(e) => setAiFeedback(e.target.value)}
                disabled={aiFeedback === ""}
                id="output"
                placeholder="AI Generated Feedback"
                className="block w-full rounded-md bg-white border border-gray-400 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm px-4 py-2 placeholder-gray-500 my-2 text-gray-900"
              />
              <button
                onClick={handleCopy}
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                type="submit"
                disabled={aiFeedback === ""}
              >
                {isCopied ? "Copied" : "Copy to Clipboard"}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
export default AI;