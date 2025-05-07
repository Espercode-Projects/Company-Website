import React from "react";
import { AiFillCustomerService, AiFillPhone } from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";
import { FaHome } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { Link, useLocation } from "react-router-dom";

const links = [
  {
    name: "beranda",
    path: "/",
    icon: <FaHome />,
  },
  {
    name: "layanan",
    path: "#services",
    icon: <AiFillCustomerService />,
  },
  {
    name: "portofolio",
    path: "#portfolio",
    icon: <CgFileDocument />,
  },
  {
    name: "Tentang Kami",
    path: "#about",
    icon: <AiFillPhone />,
  },
];

function SideNavbar({ isOpen, toggle }) {
  const pathname = useLocation();

  return (
    <>
      {/* Overlay blur */}
      <div
        className={`fixed inset-0 bg-black/30 backdrop-blur-sm transition-opacity duration-300 z-40 ${
          isOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible pointer-events-none"
        }`}
        onClick={toggle}
      ></div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 w-[80vw] h-screen bg-accent px-5 py-10 z-50 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end">
          <IoClose
            className="text-white font-extrabold w-[2.5rem] h-[2.5rem] cursor-pointer"
            onClick={toggle}
          />
        </div>

        <div className="flex flex-col justify-center items-center mt-5 ">
          <img
            src="/public/img/logo-remove.png"
            alt=""
            className=" xl:w-[8rem] xl:h-[8rem]  w-[8rem] h-[8rem] invert "
          />

          <div className="flex flex-col justify-center items-center mt-5 gap-8">
            {links.map((item, index) => {
              const isActive = item.path === pathname;

              return (
                <Link
                  to={item.path}
                  key={index}
                  className={`relative capitalize font-medium transition-colors duration-300
        ${isActive ? "text-white" : "text-white/70"}
        group
      `}
                >
                  <span className="flex items-center gap-3 group-hover:text-white transition-colors duration-300">
                    {item.icon} {item.name}
                  </span>

                  {/* Underline from center */}
                  <span
                    className={`absolute left-0 -bottom-1 h-[2px] w-full bg-white transform transition-transform duration-300 ease-in-out origin-center
          ${isActive ? "scale-x-100" : "scale-x-0"} group-hover:scale-x-100
        `}
                  ></span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default SideNavbar;
