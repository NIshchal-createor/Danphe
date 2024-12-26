import {
  faBezierCurve,
  faShare,
  faStore,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import {
  Appointments,
  Expense,
  Insurance,
  Translation,
  UpwardCurve,
} from "../../components/Assets/images";

const Dashboard = () => {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 mx-auto">
          <div className="flex flex-col text-center w-full my-10">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              Dashboard
            </h1>
          </div>
          <div className="flex flex-wrap -m-4 text-center justify-around">
            <div className="p-4 w-[10rem]">
              <div className="border-2 border-gray-200 px-4 py-6 rounded-lg  flex flex-col items-center justify-center">
                {/* <FontAwesomeIcon icon={faShare} className="" /> */}
                <img
                  src={Expense}
                  alt="Sales Curve Image"
                  className="w-14"
                />
                <h2 className="title-font font-medium text-xl text-gray-900">
                  25000
                </h2>
                <p className="leading-relaxed text-lg">Total Office Expenses</p>
              </div>
            </div>
            <div className="p-4 w-[10rem]">
              <div className="border-2 border-gray-200 px-4 py-6 rounded-lg  flex flex-col items-center justify-center">
                {/* <FontAwesomeIcon icon={faShare} className="" /> */}
                <img
                  src={UpwardCurve}
                  alt="Sales Curve Image"
                  className="w-14"
                />
                <h2 className="title-font font-medium text-xl text-gray-900">
                  25000
                </h2>
                <p className="leading-relaxed text-lg">Total Sales</p>
              </div>
            </div>
            <div className="p-4 w-[10rem]">
              <div className="border-2 border-gray-200 px-4 py-6 rounded-lg  flex flex-col items-center justify-center">
                <img
                  src={Appointments}
                  alt=""
                  className="w-14"
                />
                <h2 className="title-font font-medium text-xl text-gray-900">
                  5
                </h2>
                <p className="leading-relaxed text-lg">Total Appointments</p>
              </div>
            </div>
            <div className="p-4 w-[10rem]">
              <div className="border-2 border-gray-200 px-4 py-6 rounded-lg  flex flex-col items-center justify-center">
                <img
                  src={Translation}
                  alt=""
                  className="w-14"
                />
                <h2 className="title-font font-medium text-xl text-gray-900">
                  74
                </h2>
                <p className="leading-relaxed text-lg">Total Translations</p>
              </div>
            </div>
            <div className="p-4 w-[10rem]">
              <div className="border-2 border-gray-200 px-4 py-6 rounded-lg  flex flex-col items-center justify-center">
                <img src={Insurance} alt="" className="w-14" />
                <h2 className="title-font font-medium text-xl text-gray-900">
                  46
                </h2>
                <p className="leading-relaxed text-lg">Total Insurance</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Dashboard;
