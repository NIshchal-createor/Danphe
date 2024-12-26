import React, { createContext, useContext, useState } from "react";
// import { PeriodContextType } from "../Interface/interface";

const PeriodContext = createContext<any | null>(null);

const PeriodProvider = ({ children }: any) => {
  const options = [
    { period: "Last Day", value: "1" },
    { period: "Last 7 Days", value: "7" },
    { period: "Last Month", value: "30" },
    { period: "Last 6 Months", value: "180" },
    { period: "Last Year", value: "360" },
  ];

  const options_forecast = [
    { period: "Next week", value: "7" },
    { period: "Next month", value: "30" },
    { period: "Next year", value: "365" },
  ];
  const [selectPeriod, setSelectPeriod] = useState("");
  return (
    <PeriodContext.Provider
      value={{ options, options_forecast, selectPeriod, setSelectPeriod }}
    >
      {children}
    </PeriodContext.Provider>
  );
};

export const usePeriodContextConsumer = () => useContext(PeriodContext);

export default PeriodProvider;