import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import Sidebar from "../Header/Sidebar";
import Header from "../Header/Header";
import { useAppSelector } from "../../Hooks/useRedux";
const Admin = () => {
  const { token } = useAppSelector((state) => state.admin);
  return (
    <>
      {token ? (
        <div className="flex w-full gap-5 px-5 py-2">
          <Sidebar />
          <div className="flex w-full flex-col gap-5">
            <Header />
            <Outlet />
          </div>
        </div>
      ) : (
        <Navigate to={"/login"} />
      )}
    </>
  );
};

export default Admin;
