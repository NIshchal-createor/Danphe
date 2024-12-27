import React from "react";

interface TranslationPopUpProps {
  handleDisplay: () => void;
}

const TranslationPopUp: React.FC<TranslationPopUpProps> = ({
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
          className="flex flex-col bg-white p-5 gap-2 w-full h-full"
        >
          <h1 className="text-center text-xl font-bold uppercase underline underline-offset-4 mb-5">
            Adding New Translation
          </h1>

          <div className="flex flex-col">
            <label htmlFor="translation_document" className="font-bold text-md">
              Translation Documents
            </label>
            <textarea
              name="translation_document"
              id="translation_document"
              className="outline-none px-3 py-1 text-sm border border-black rounded-lg h-fit w-full"
              placeholder="Citizenship Certificate, Marriage Certificate, etc..."
            ></textarea>
          </div>

          <div className="flex gap-2 items-end">
            <div className="flex flex-col">
              <label htmlFor="qty" className="font-bold text-md">
                Total Translations:
              </label>
              <input
                type="number"
                className="outline-none px-3 py-1 text-sm border border-black rounded-lg h-fit w-full"
                id="qty"
                placeholder="(1-...)"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="format_qty" className="font-bold text-md">
                Format Translation Qty:
              </label>
              <input
                type="number"
                id="format_qty"
                className="outline-none px-3 py-1 text-sm border border-black rounded-lg h-fit w-full"
                placeholder="(1-...)"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="non_format_qty" className="font-bold text-md">
                Non Format Translation Qty:
              </label>
              <input
                type="number"
                id="non_format_qty"
                className="outline-none px-3 py-1 text-sm border border-black rounded-lg h-fit w-full"
                placeholder="(1-...)"
              />
            </div>
          </div>

          <div className="flex flex-col">
            <label htmlFor="amount" className="font-bold text-md">
              Amount:
            </label>
            <input
              type="number"
              id="amount"
              className="outline-none px-3 py-1 text-sm border border-black rounded-lg h-fit w-full"
              placeholder="Total Amount..."
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="person" className="font-bold text-md">
              Remark:
            </label>
            <textarea
              name="remark"
              id="remark"
              className="outline-none px-3 py-1 text-sm border border-black rounded-lg h-fit w-full"
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

export default TranslationPopUp;
