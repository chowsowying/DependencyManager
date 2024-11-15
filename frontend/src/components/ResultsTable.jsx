import React, { useState, useEffect } from "react";

const ResultsTable = ({ results }) => {
  const { latest, versions = [], currentVersion } = results || {};
  const [filteredVersions, setFilteredVersions] = useState([]);
  const [isFiltered, setIsFiltered] = useState(false); // Track if filter is applied
  const [showFilterButton, setShowFilterButton] = useState(true); // Track visibility of "Filter Same Major" button

  // Handle filtering the versions by major version
  const handleFilterSameMajor = () => {
    if (!currentVersion) return; // If no current version, do nothing

    const majorVersion = getMajorVersion(currentVersion);
    const filtered = versions.filter((version) => getMajorVersion(version) === majorVersion);
    setFilteredVersions(filtered);
    setIsFiltered(true); // Set filter flag
    setShowFilterButton(false); // Hide filter button
  };

  // Reset to display all versions
  const handleShowAllVersions = () => {
    setFilteredVersions(versions);
    setIsFiltered(false); // Reset filter flag
    setShowFilterButton(true); // Show filter button again
  };

  // Function to extract the major version
  const getMajorVersion = (version) => {
    const versionParts = version.split(".");
    return versionParts[0]; // Return the major version (first part)
  };

  // Effect to update filteredVersions when versions are available
  useEffect(() => {
    // If no filter is applied, show all versions
    if (!isFiltered) {
      setFilteredVersions(versions);
    }
  }, [versions, isFiltered]); // Run whenever versions change

  if (!versions.length) {
    return (
      <div className="flex flex-col h-full bg-primary text-white p-5 m-5 border-gray-200 rounded-md">
        <h1 className="font-bold text-xl underline">Results Table</h1>
        <h2 className="font-bold text-lg mt-2">No versions available</h2>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full bg-primary text-white p-5 m-5 border-gray-200 rounded-md">
      <div className="flex items-center ">
        <h1 className="font-bold text-xl underline mr-4">Results Table</h1>
        {showFilterButton && (
          <button
            className="text-sm font-bold py-2 px-4 rounded bg-[#a8323e] text-white mr-2"
            onClick={handleFilterSameMajor}>
            Filter Same Major
          </button>
        )}
        {!showFilterButton && (
          <button
            className="text-sm font-bold py-2 px-4 rounded bg-[#4c9d6e] text-white"
            onClick={handleShowAllVersions}>
            Show All Versions
          </button>
        )}
      </div>

      {/* Display the latest version */}
      <h2 className="font-bold text-lg mt-2">Latest Version: {latest}</h2>

      {/* Display the current version */}
      <h3 className="font-bold text-lg mt-2">Current Version: {currentVersion}</h3>

      <div className="flex flex-col bg-white text-black h-[300px] mt-4">
        <div className="relative overflow-x-auto overflow-y-auto">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Version
                </th>
                <th scope="col" className="px-6 py-3">
                  Date Published
                </th>
                <th scope="col" className="px-6 py-3">
                  Usage
                </th>
              </tr>
            </thead>
            <tbody>
              {/* Map through the filtered versions if available */}
              {filteredVersions.map((version, index) => (
                <tr key={index} className="bg-white border-b">
                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                    {version}
                  </th>
                  <td className="px-6 py-4">N/A</td> {/* Add actual data if available */}
                  <td className="px-6 py-4">N/A</td> {/* Add actual data if available */}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ResultsTable;
