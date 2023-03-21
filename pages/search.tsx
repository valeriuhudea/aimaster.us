import React, { useState } from "react";

const SearchPage = () => {
  // 👇track form state
  const [query, setQuery] = useState("");
  const [resCount, setResCount] = useState("");
  // 👇state to show result after submitting
  const [result, setResult] = useState<any>();
  const [airesult, setAIResult] = useState<any>();
  const [scrapresult, setScrapResult] = useState<any>();

  
  // 👇 submit handler
  const handleQuerySubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    // 👇 encode the data to application/x-www-form-urlencoded type
    const formData = new URLSearchParams();
    formData.append("query", query);
    formData.append("resCount", resCount);

    // 👇 call backend endpoint using fetch api
    fetch("/api/search", {
      body: formData.toString(),
      method: "post",
      headers: {
        "content-type": "application/x-www-form-urlencoded",
      },
    }).then(async (result) => {
      // 👇 modify the state to show the result
      setResult(await result.json());
    });
  };

  const handleAISubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    // 👇 encode the data to application/x-www-form-urlencoded type
    // const formData = new URLSearchParams();
    // formData.append("data", result)
    // 👇 call backend endpoint using fetch api
    fetch("/api/ai", {
      body: JSON.stringify(result) ,
      method: "post",
      headers: {
        "content-type": "application/json",
      },
    }).then(async (newresult) => {
      // 👇 modify the state to show the result
      setAIResult(await newresult.json());
    });
  };

  const handleScrapSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    // 👇 encode the data to application/x-www-form-urlencoded type
    // const formData = new URLSearchParams();
    // formData.append("data", result)
    // 👇 call backend endpoint using fetch api
    fetch("/api/scrap", {
      body: JSON.stringify(airesult) ,
      method: "post",
      headers: {
        "content-type": "application/json",
      },
    }).then(async (scrapresult) => {
      // 👇 modify the state to show the result
      setScrapResult(await scrapresult.json());
    });
  };

  return (
    <div className="container mx-auto max-w-sm">
      <h1 className="text-3xl my-4">Vhud AI!</h1>
      <div className="flex flex-col gap-1 items-stretch">
      {/* 👇 wire-up the handleSubmit handler */}
      <form
        onSubmit={handleQuerySubmit}
        className="flex flex-col gap-4 items-stretch"
      >
        <input
          placeholder="Ask"
          type="text"
          name="query"
          // 👇 wire-up the controlled state
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="input input-"
        />
        <input
          placeholder="Nr. of results"
          type="number"
          name="resCount"
          // 👇 wire-up the controlled state
          value={resCount}
          onChange={(e) => setResCount(e.target.value)}
          className="input input-"
        />
        <button type="submit" className="btn btn-accent">
          Go
        </button>
        <div className="card shadow-xl bg-base-100">
          <div className="card-body">
            <p className="card-title">Result</p>
            <pre>{JSON.stringify(result, null, 4)}</pre>
          </div>
        </div>
      </form>
      </div >
      <div className="flex flex-col gap-1 items-stretch">
      <form onSubmit={handleAISubmit} className="flex flex-col gap-4 items-stretch">
        <button type="submit" className="btn btn-accent">
          AI Run
        </button>
        <div className="card shadow-xl bg-base-100">
          <div className="card-body">
            <p className="card-title">AI Says</p>
            <p>{JSON.stringify(airesult, null, 4)}</p>
          </div>
        </div>
      </form>
      </div>
      <div className="flex flex-col gap-1 items-stretch">
      <form onSubmit={handleScrapSubmit} className="flex flex-col gap-4 items-stretch">
        <button type="submit" className="btn btn-accent">
          Scrapper
        </button>
        <div className="card shadow-xl bg-base-100">
          <div className="card-body">
            <p className="card-title">Scrapper Results</p>
            <p>{JSON.stringify(scrapresult, null, 4)}</p>
          </div>
        </div>
      </form>
      </div>
      {/* show the data returned by the api */}
    </div>
  );
};
export default SearchPage;