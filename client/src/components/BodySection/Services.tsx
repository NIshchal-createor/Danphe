import React from "react";

const Services = () => {
  return (
    <>
      <div className="relative h-full overflow-hidden">
        <div className="absolute w-full h-full bg-[whitesmoke]"></div>
        {/* <img
          className="absolute w-full h-full object-cover"
          src="/images/worlddark.jpg"
          alt="world map"
        /> */}
        <div className="relative overflow-hidden bg-transparent w-full my-14 max-w-[1366px] mx-auto">
          <h1 className="text-3xl text-primary text-center w-full my-5 font-bold z-10 ">
            Our Services
          </h1>
          <div className="flex w-full md:w-[90%] lg:w-[80%] lg:pl-3 justify-between mx-auto flex-wrap gap-6 z-10">
            <div className="flex flex-col text-black gap-6">
              <div className="flex gap-2 text-2xl items-end">
                <span className="text-primary text-3xl">&#9650;</span>{" "}
                Translation
              </div>
              <div className="flex gap-2 text-2xl items-end">
                <span className="text-primary text-3xl">&#9650;</span> Notary
              </div>
              <div className="flex gap-2 text-2xl items-end">
                <span className="text-primary text-3xl">&#9650;</span> Property
                Valuation
              </div>
              <div className="flex gap-2 text-2xl items-end">
                <span className="text-primary text-3xl">&#9650;</span> Travel
                and Health Insurance
              </div>
            </div>
            <div className="flex flex-col text-black gap-6">
              <div className="flex gap-2 text-2xl items-end">
                <span className="text-primary text-3xl">&#9650;</span> All
                Document Services
              </div>
              <div className="flex gap-2 text-2xl items-end">
                <span className="text-primary text-3xl">&#9650;</span> All
                Countries Applicaiton Services
              </div>
              <div className="flex gap-2 text-2xl items-end">
                <span className="text-primary text-3xl">&#9650;</span> Online
                form Fill Up for Passport
              </div>
              <div className="flex gap-2 text-2xl items-end">
                <span className="text-primary text-3xl">&#9650;</span> And Many
                More ...
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
