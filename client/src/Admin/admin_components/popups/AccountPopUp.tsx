import React from "react";

interface AccountPopUpProps {
  handleDisplay: () => void;
}

const AccountPopUp: React.FC<AccountPopUpProps> = ({ handleDisplay }) => {
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
            <label htmlFor="counter" className="font-bold text-md">
              Counter:
            </label>
            <select
              name="counter"
              id="counter"
              className="outline-none px-3 py-1 text-sm"
            >
              <option value="Counter 1" className="capitalize">
                Counter 1
              </option>
              <option value="Counter 2" className="capitalize">
                Counter 2
              </option>
            </select>
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
          <div className="flex flex-col">
            <label htmlFor="amountstatus" className="font-bold text-md">
              Amount Status:
            </label>
            <select
              name="amountstatus"
              id="amountstatus"
              className="outline-none px-3 py-1 text-sm"
            >
              <option value="Debit" className="capitalize">
                Debit
              </option>
              <option value="Debit (QR)" className="capitalize">
                Debit (QR)
              </option>
              <option value="Credit" className="capitalize">
                Credit
              </option>
            </select>
          </div>
          <div className="flex flex-col">
            <label htmlFor="paymentmethod" className="font-bold text-md">
              Payment Method:
            </label>
            <select
              name="paymentmethod"
              id="paymentmethod"
              className="outline-none px-3 py-1 text-sm"
            >
              <option value="Cash" className="capitalize">
                Cash
              </option>
              <option value="Bank" className="capitalize">
                Bank
              </option>
              <option value="FonePay" className="capitalize">
                FonePay
              </option>
            </select>
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

export default AccountPopUp;