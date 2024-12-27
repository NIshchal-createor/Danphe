import React, { useState } from "react";
import AppointmentPopUp from "./popups/AppointmentPopUp";

const Appointments: React.FC = () => {
  const [showAdd, setShowAdd] = useState(false);

  const handleDisplay = () => {
    setShowAdd(!showAdd);
  };

  return (
    <>
      {showAdd && <AppointmentPopUp handleDisplay={handleDisplay} />}
      <div className="flex flex-col text-center w-full">
        <h1 className="uppercase sm:text-3xl text-2xl font-bold title-font text-primary">
          Appointments
        </h1>
      </div>
      <div className="p-4">
        <table className="table-auto w-full border-collapse border border-gray-300 overflow-hidden rounded-lg">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="border px-2 py-1">S.N.</th>
              <th className="border px-2 py-1">Name Of Person</th>
              <th className="border px-2 py-1">Contact</th>
              <th className="border px-2 py-1">Country</th>
              <th className="border px-2 py-1">Date</th>
              <th className="border px-2 py-1">Purpose</th>
              <th className="border px-2 py-1">Email Id</th>
              <th className="border px-2 py-1">Remark</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-2 py-1 text-center">1</td>
              <td className="border px-2 py-1">Santosh Ghimire</td>
              <td className="border px-2 py-1">9865254512</td>
              <td className="border px-2 py-1">Germany</td>
              <td className="border px-2 py-1">2022/11/23</td>
              <td className="border px-2 py-1">Family Visit</td>
              <td className="border px-2 py-1">santoshghimire@gmail.com</td>
              <td className="border px-2 py-1">Waiting for the reply</td>
            </tr>
          </tbody>
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

export default Appointments;
