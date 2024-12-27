import React from "react";

interface OfficeExpensePopUpProps {
  handleDisplay: () => void;
}

const OfficeExpensePopUp: React.FC<OfficeExpensePopUpProps> = ({
  handleDisplay,
}) => {
  return (
    <div className="z-50 w-screen h-screen bg-opacity-30 grid place-items-center fixed top-0 left-0 bg-black">
      <div className="flex gap-5 bg-primary w-full max-w-[25rem] min-w-[15rem] relative rounded-xl overflow-hidden">
        <span
          onClick={handleDisplay}
          className="absolute top-2 right-4 text-xl font-bold text-[#537D8D] cursor-pointer"
        >
          &times;
        </span>
        <form
          action=""
          className="flex flex-col bg-white p-5 gap-5 w-full h-full"
        >
          <h1 className="text-center text-xl font-bold uppercase underline underline-offset-4">
            Add New
          </h1>

          <div className="flex flex-col">
            <label htmlFor="particular" className="font-bold text-md">
              Particular:
            </label>
            <input
              type="text"
              id="particular"
              className="outline-none px-3 py-1 text-sm border border-black rounded-lg"
              placeholder="Amount Description..."
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="amount" className="font-bold text-md">
              Amount:
            </label>
            <input
              type="number"
              className="outline-none px-3 py-1 text-sm border border-black rounded-lg"
              placeholder="Amount in (Rs.)..."
            />
          </div>

          <div className="flex justify-center">
            <button className="text-white rounded-lg hover:bg-opacity-70 bg-black py-1 px-4 font-semibold text-md mt-3 w-fit">
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default OfficeExpensePopUp;
