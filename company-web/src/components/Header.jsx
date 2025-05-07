import { FiArrowUpRight } from "react-icons/fi";
import { CiMenuFries } from "react-icons/ci";
import React, { useState } from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import SideNavbar from "./SideNavbar";

function Header() {
  const [isSideOpen, setIsSideOpen] = useState(false);

  const toggleSidebar = () => setIsSideOpen(!isSideOpen);

  return (
    <header className="py-8 xl:py-0  text-default-color  ">
      <div className="container mx-auto flex justify-between items-center ">
        <Link to={"/"} className="p-0">
          {/* <h1 className="text-4xl font-semibold">
            Espercode <span className="text-accent ">.</span>
          </h1> */}

          <img
            src="/public/img/logo-remove.png"
            alt=""
            className=" xl:w-[8rem] xl:h-[8rem]  w-[5rem] h-[5rem] "
          />
        </Link>

        <div className=" hidden xl:flex items-center ">
          <Navbar />
        </div>

        <div className="hidden xl:flex items-center">
          <button className="bg-accent rounded-full px-5 py-3 text-white font-bold hover:bg-accent-hover flex items-center  group transition-all duration-500">
            <span className="transition-all duration-500">Hubungi Kami</span>

            {/* Animated Arrow */}
            <span className="inline-block overflow-hidden transition-all duration-500 max-w-0 group-hover:max-w-[40px]">
              <FiArrowUpRight className="ml-2 inline-block opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transform transition-all duration-300 text-xl" />
            </span>
          </button>
        </div>

        <div className="xl:hidden flex">
          <CiMenuFries
            className="w-[1.5rem] h-[1.5rem] cursor-pointer"
            onClick={toggleSidebar}
          />
        </div>
      </div>

      <SideNavbar isOpen={isSideOpen} toggle={toggleSidebar} />
    </header>
  );
}

export default Header;
