import React from "react";

const ResultsTable = () => {
  return (
    <div className="flex flex-col h-full bg-primary text-white p-5 m-5 border-gray-200 rounded-md">
      <h1 className="font-bold text-xl underline">Results Table</h1>
      <div className="flex flex-col bg-white text-black h-[300px] mt-4">
        <div class="relative overflow-x-auto overflow-y-auto">
          <table class="w-full text-sm text-left rtl:text-right text-gray-500 ">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 ">
              <tr>
                <th scope="col" class="px-6 py-3">
                  Version
                </th>
                <th scope="col" class="px-6 py-3">
                  Date Published
                </th>
                <th scope="col" class="px-6 py-3">
                  Usage
                </th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white border-b ">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                  1.7.7
                </th>
                <td class="px-6 py-4">17 Oct 2024</td>
                <td class="px-6 py-4">300</td>
              </tr>
              <tr class="bg-white border-b ">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                  1.7.5
                </th>
                <td class="px-6 py-4">14 Sept 2024</td>
                <td class="px-6 py-4">21</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ResultsTable;
