import React, { useState } from "react";
import Nav from "../components/Nav";
import SearchBar from "../components/SearchBar";
import ResultsTable from "../components/ResultsTable";

const Home = () => {
  const [mode, setMode] = useState("npm");
  const [results, setResults] = useState([]); // State to hold the API response data

  return (
    <div className="max-w-[1600px] mx-auto">
      <Nav mode={mode} setMode={setMode} />
      <SearchBar mode={mode} setResults={setResults} />
      <ResultsTable results={results} />
    </div>
  );
};

export default Home;
