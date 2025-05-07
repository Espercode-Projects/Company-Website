import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Header from "../components/Header";

function DefaultLayout() {
  return (
    <div className=" relative outfit min-h-screen w-screen px-5 xl:px-10">
      <Header />
      <Outlet />
    </div>
  );
}

export default DefaultLayout;
