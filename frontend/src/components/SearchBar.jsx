import React, { useState } from "react";
import axios from "axios";

const SearchBar = ({ mode, setResults }) => {
  const [packageName, setPackageName] = useState("");
  const [currentVersion, setCurrentVersion] = useState("");

  const handleSearch = async () => {
    if (mode === "npm" && packageName) {
      try {
        const response = await axios.post(`http://localhost:8080/api/v1/npm/getAllVersions`, {
          packageName, // Include packageName in the request body
        });
        setResults({
          ...response.data, // Spread the existing data from API response
          currentVersion, // Add the current version to the results
        });
      } catch (error) {
        console.error("Error fetching npm package versions:", error);
      }
    }
  };

  return (
    <div className="pt-[60px]">
      <div className="flex flex-col h-full bg-primary text-white p-5 m-5 rounded-md">
        <h1 className="font-bold text-xl underline">
          {mode === "npm" ? "NPM Dependencies" : "Maven Dependencies"}
        </h1>

        <div className="flex items-center mt-4">
          <label htmlFor="packageName" className="font-bold w-1/6">
            {mode === "npm" ? "Package Name" : "Artifact ID"}
          </label>
          <input
            type="text"
            id="packageName"
            className="p-2 rounded-md w-5/6 text-black"
            placeholder={mode === "npm" ? "npm package name" : "maven artifact ID"}
            value={packageName}
            onChange={(e) => setPackageName(e.target.value)}
            required
          />
        </div>

        <div className="flex items-center mt-4">
          <label htmlFor="currentVersion" className="font-bold w-1/6">
            Current Version
          </label>
          <input
            type="text"
            id="currentVersion"
            className="p-2 rounded-md w-5/6 text-black"
            placeholder={mode === "npm" ? "npm package version" : "maven version"}
            value={currentVersion}
            onChange={(e) => setCurrentVersion(e.target.value)}
            required
          />
        </div>

        <button
          className="bg-white hover:bg-gray-200 text-primary font-bold py-2 px-4 rounded items-center mt-4"
          onClick={handleSearch}>
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
