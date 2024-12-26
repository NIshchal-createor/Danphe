import React, { createContext, useContext, useState } from "react";
// import { SearchContextType } from "../Interface/interface";

const SearchContext = createContext<any | null>(null);

const SearchProvider = ({ children }: any) => {
  const [search, setSearch] = useState({ searchQuery: "", btn: false });
  return (
    <SearchContext.Provider value={{ search, setSearch }}>
      {children}
    </SearchContext.Provider>
  );
};

export const useSearchContextConsumer = () => useContext(SearchContext);

export default SearchProvider;