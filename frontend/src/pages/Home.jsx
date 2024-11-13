import React, { useState } from "react";
import Nav from "../components/Nav";
import SearchBar from "../components/SearchBar";
import ResultsTable from "../components/ResultsTable";

const Home = () => {
  // State to hold the current mode, either "npm" or "mvn"
  const [mode, setMode] = useState("npm");

  return (
    <div className="max-w-[1600px] mx-auto">
      {/* Pass setMode to Nav to allow switching */}
      <Nav mode={mode} setMode={setMode} />
      {/* Pass the current mode to SearchBar */}
      <SearchBar mode={mode} />
      <ResultsTable />
    </div>
  );
};

export default Home;
