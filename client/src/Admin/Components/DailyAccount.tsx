import React, { useState } from "react";

interface Row {
  id: number;
  particular: string;
  counter: string;
  amount: number | string;
  status: string;
  payment: string;
}

interface Balances {
  counter1: number;
  counter2: number;
  total: number;
}

const DailyAccount: React.FC = () => {
  return (
    <div className="p-4">
      <table className="table-auto w-full border-collapse border border-gray-300 overflow-hidden rounded-lg">
        <thead>
          <tr className="bg-gray-100 text-left">
            <th className="border px-4 py-2">S.N.</th>
            <th className="border px-4 py-2">Particular</th>
            <th className="border px-4 py-2">Counter</th>
            <th className="border px-4 py-2">Amount (Rs.)</th>
            <th className="border px-4 py-2">Amount Status</th>
            <th className="border px-4 py-2">Payment Method</th>
          </tr>
        </thead>
        <tbody>
          <tr className="">
            <td className="border px-4 py-2 text-center">1</td>
            <td className="border px-4 py-2">Opening Balance</td>
            <td className="border px-4 py-2">Counter 1</td>
            <td className="border px-4 py-2">2000</td>
            <td className="border px-4 py-2">Debit (QR)</td>
            <td className="border px-4 py-2">Bank</td>
          </tr>
          <tr className="">
            <td className="border px-4 py-2 text-center">2</td>
            <td className="border px-4 py-2">
              <input
                type="text"
                name=""
                id=""
                className="outline-none border-none"
              />
            </td>
            <td className="border px-4 py-2">
              <select name="counter" id="counter" className="outline-none">
                <option value="Counter 1" className="capitalize">Counter 1</option>
                <option value="Counter 2" className="capitalize">Counter 2</option>
              </select>
            </td>
            <td className="border px-4 py-2">
              <input
                type="number"
                name=""
                id=""
                className="outline-none border-none"
              />
            </td>
            <td className="border px-4 py-2">
            <select name="amountstatus" id="amountstatus" className="outline-none">
                <option value="Debit" className="capitalize">Debit</option>
                <option value="Debit (QR)" className="capitalize">Debit (QR)</option>
                <option value="Credit" className="capitalize">Credit</option>
              </select>
            </td>
            <td className="border px-4 py-2">
            <select name="amountstatus" id="amountstatus" className="outline-none">
                <option value="Cash" className="capitalize">Cash</option>
                <option value="Bank" className="capitalize">Bank</option>
                <option value="FonePay" className="capitalize">FonePay</option>
              </select>
            </td>
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

      <div className="flex my-14 gap-5 flex-wrap justify-around">
        <div className="flex flex-col">
          <h1 className="font-bold text-xl text-primary uppercase">
            Counter 1
          </h1>
          <div className="flex flex-col">
            <h1 className="font-bold">Total Counter Balance</h1>
            <p className="text-sm">50000</p>
          </div>
          <div className="flex flex-col">
            <h1 className="font-bold">Total Bank Balance</h1>
            <p className="text-sm">50000</p>
          </div>
          <div className="flex flex-col">
            <h1 className="font-bold">Total Sales</h1>
            <p className="text-sm">50000</p>
          </div>
          <div className="flex flex-col">
            <h1 className="font-bold">Total Expenses</h1>
            <p className="text-sm">50000</p>
          </div>
        </div>
        <div className="flex flex-col">
          <h1 className="font-bold text-xl text-primary uppercase">
            Counter 2
          </h1>
          <div className="flex flex-col">
            <h1 className="font-bold">Total Counter Balance</h1>
            <p className="text-sm">50000</p>
          </div>
          <div className="flex flex-col">
            <h1 className="font-bold">Total Bank Balance</h1>
            <p className="text-sm">50000</p>
          </div>
          <div className="flex flex-col">
            <h1 className="font-bold">Total Sales</h1>
            <p className="text-sm">50000</p>
          </div>
          <div className="flex flex-col">
            <h1 className="font-bold">Total Expenses</h1>
            <p className="text-sm">50000</p>
          </div>
        </div>
        <div className="flex flex-col">
          <h1 className="font-bold text-xl text-primary uppercase">In Total</h1>
          <div className="flex flex-col">
            <h1 className="font-bold">Total Counter Balance</h1>
            <p className="text-sm">50000</p>
          </div>
          <div className="flex flex-col">
            <h1 className="font-bold">Total Bank Balance</h1>
            <p className="text-sm">50000</p>
          </div>
          <div className="flex flex-col">
            <h1 className="font-bold">Total Sales</h1>
            <p className="text-sm">50000</p>
          </div>
          <div className="flex flex-col">
            <h1 className="font-bold">Total Expenses</h1>
            <p className="text-sm">50000</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DailyAccount;
