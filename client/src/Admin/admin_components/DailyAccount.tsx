import React, { useState } from "react";
import AccountPopUp from "./popups/AccountPopUp";

const DailyAccount: React.FC = () => {
  const [showAdd, setShowAdd] = useState(false);

  const handleDisplay = () => {
    setShowAdd(!showAdd);
  };

  return (
    <>
      {showAdd && <AccountPopUp handleDisplay={handleDisplay} />}
      <div className="flex flex-col text-center w-full">
        <h1 className="uppercase sm:text-3xl text-2xl font-bold title-font text-primary">
          Daily Account
        </h1>
      </div>
      <div className="p-4">
        <table className="table-auto w-full border-collapse border border-gray-300 overflow-hidden rounded-lg">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="border px-2 py-1">S.N.</th>
              <th className="border px-2 py-1">Particular</th>
              <th className="border px-2 py-1">Counter</th>
              <th className="border px-2 py-1">Amount (Rs.)</th>
              <th className="border px-2 py-1">Amount Status</th>
              <th className="border px-2 py-1">Payment Method</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-2 py-1 text-center">1</td>
              <td className="border px-2 py-1">Opening Balance</td>
              <td className="border px-2 py-1">Counter 1</td>
              <td className="border px-2 py-1">2000</td>
              <td className="border px-2 py-1">Debit (QR)</td>
              <td className="border px-2 py-1">Bank</td>
            </tr>
          </tbody>
          <tfoot>
            <tr className="bg-gray-100">
              <td colSpan={3} className="border border-gray-300 px-4 py-2">
                Total
              </td>
              <td colSpan={3} className="border border-gray-300 px-4 py-2">
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

export default DailyAccount;