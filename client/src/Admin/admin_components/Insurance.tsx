import React, { useState } from "react";
import InsurancePopUp from "./popups/InsurancePopUp";

const Insurance: React.FC = () => {
  const [showAdd, setShowAdd] = useState(false);

  const handleDisplay = () => {
    setShowAdd(!showAdd);
  };

  return (
    <>
      {showAdd && <InsurancePopUp handleDisplay={handleDisplay} />}
      <div className="flex flex-col text-center w-full">
        <h1 className="uppercase sm:text-3xl text-2xl font-bold title-font text-primary">
          Insurance
        </h1>
      </div>
      <div className="p-4">
        <table className="table-auto w-full border-collapse border border-gray-300 overflow-hidden rounded-lg">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="border px-2 py-1">S.N.</th>
              <th className="border px-2 py-1">Issue</th>
              <th className="border px-2 py-1">Name</th>
              <th className="border px-2 py-1">Destination</th>
              <th className="border px-2 py-1">Certificate</th>
              <th className="border px-2 py-1">Duration</th>
              <th className="border px-2 py-1">Starting</th>
              <th className="border px-2 py-1">Returning</th>
              <th className="border px-2 py-1">Amount</th>
              <th className="border px-2 py-1">Client Payment</th>
              <th className="border px-2 py-1">Remark</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-2 py-1 text-center">1</td>
              <td className="border px-2 py-1">2022/11/23</td>
              <td className="border px-2 py-1">Santosh Ghimire</td>
              <td className="border px-2 py-1">Germany</td>
              <td className="border px-2 py-1">9865254512</td>
              <td className="border px-2 py-1">90 Days</td>
              <td className="border px-2 py-1">2022/11/23</td>
              <td className="border px-2 py-1">2022/11/23</td>
              <td className="border px-2 py-1">2000</td>
              <td className="border px-2 py-1">3000</td>
              <td className="border px-2 py-1">Waiting for the reply</td>
            </tr>
          </tbody>
          <tfoot>
            <tr className="bg-gray-100">
              <td colSpan={8} className="border border-gray-300 px-4 py-2">
                Total
              </td>
              <td colSpan={1} className="border border-gray-300 px-4 py-2">
                500
              </td>
              <td colSpan={2} className="border border-gray-300 px-4 py-2">
                500
              </td>
            </tr>
          </tfoot>
        </table>

        <div className="flex justify-end">
          <button
            onClick={handleDisplay}
            className="text-white rounded-lg hover:bg-opacity-70 bg-black py-1 px-4 font-semibold text-md mt-3 w-fit"
          >
            + Add New
          </button>
        </div>
      </div>
    </>
  );
};

export default Insurance;
