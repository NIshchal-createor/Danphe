import React from "react";

interface InsurancePopUpProps {
  handleDisplay: () => void;
}

const InsurancePopUp: React.FC<InsurancePopUpProps> = ({ handleDisplay }) => {
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
          className="flex flex-col bg-white p-5 gap-2 w-full h-full"
        >
          <h1 className="text-center text-xl font-bold uppercase underline underline-offset-4 mb-5">
            Adding New Insurance
          </h1>
          <div className="flex justify-between">
            <label htmlFor="person" className="font-bold text-md">
              Issue Date:
            </label>
            <input
              type="datetime-local"
              className="outline-none px-3 py-1 text-sm border border-black rounded-lg h-fit w-full min-w-[8rem] max-w-[12rem]"
              id="person"
              placeholder="Name of Person..."
            />
          </div>
          <div className="flex justify-between">
            <label htmlFor="person" className="font-bold text-md">
              Name of Person:
            </label>
            <input
              type="text"
              className="outline-none px-3 py-1 text-sm border border-black rounded-lg h-fit w-full min-w-[8rem] max-w-[12rem]"
              id="person"
              placeholder="Name of Person..."
            />
          </div>

          <div className="flex justify-between">
            <label htmlFor="person" className="font-bold text-md">
              Destination Country:
            </label>
            <input
              type="tel"
              className="outline-none px-3 py-1 text-sm border border-black rounded-lg h-fit w-full min-w-[8rem] max-w-[12rem]"
              placeholder="Destination..."
            />
          </div>

          <div className="flex justify-between">
            <label htmlFor="person" className="font-bold text-md">
              Certificate No.:
            </label>
            <input
              type="text"
              className="outline-none px-3 py-1 text-sm border border-black rounded-lg h-fit w-full min-w-[8rem] max-w-[12rem]"
              placeholder="Certificate No..."
            />
          </div>

          <div className="flex justify-between">
            <label htmlFor="person" className="font-bold text-md">
              Duration:
            </label>
            <input
              type="text"
              className="outline-none px-3 py-1 text-sm border border-black rounded-lg h-fit w-full min-w-[8rem] max-w-[12rem]"
            />
          </div>

          <div className="flex justify-between">
            <label htmlFor="person" className="font-bold text-md">
              Start Date:
            </label>
            <input
              type="datetime-local"
              className="outline-none px-3 py-1 text-sm border border-black rounded-lg h-fit w-full min-w-[8rem] max-w-[12rem]"
              placeholder="Start Date..."
            />
          </div>

          <div className="flex justify-between">
            <label htmlFor="person" className="font-bold text-md">
              Return Date:
            </label>
            <input
              type="datetime-local"
              className="outline-none px-3 py-1 text-sm border border-black rounded-lg h-fit w-full min-w-[8rem] max-w-[12rem]"
              placeholder="Return Date..."
            />
          </div>

          <div className="flex justify-between">
            <label htmlFor="person" className="font-bold text-md">
              Amount:
            </label>
            <input
              type="text"
              className="outline-none px-3 py-1 text-sm border border-black rounded-lg h-fit w-full min-w-[8rem] max-w-[12rem]"
              placeholder="Amount in (Rs.)..."
            />
          </div>

          <div className="flex justify-between">
            <label htmlFor="person" className="font-bold text-md">
              Client Payment:
            </label>
            <input
              type="text"
              className="outline-none px-3 py-1 text-sm border border-black rounded-lg h-fit w-full min-w-[8rem] max-w-[12rem]"
              placeholder="Payment in (Rs.)..."
            />
          </div>

          <div className="flex justify-between">
            <label htmlFor="person" className="font-bold text-md">
              Remark:
            </label>
            <textarea
              name="remark"
              id="remark"
              className="outline-none px-3 py-1 text-sm border border-black rounded-lg h-fit w-full min-w-[10rem] max-w-[12rem]"
              placeholder="Description of the remark..."
            ></textarea>
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

export default InsurancePopUp;
