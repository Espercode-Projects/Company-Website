import { CgFileDocument } from "react-icons/cg";
import { AiFillPhone } from "react-icons/ai";
import { AiFillCustomerService } from "react-icons/ai";
import React from "react";
import { FaHome } from "react-icons/fa";
import { Link, useLocation, useResolvedPath } from "react-router-dom";

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

function Navbar() {
  const pathname = useLocation();

  return (
    <div className="flex gap-8 items-center">
      {links.map((item, index) => {
        const isActive = item.path === pathname;
  
        return (
          <Link
            to={item.path}
            key={index}
            className={`relative capitalize font-medium transition-colors duration-300
              ${isActive ? "text-accent" : "text-default-color"}
              group
            `}
          >
            <span className="flex items-center gap-3 group-hover:text-accent transition-colors duration-300">
              {item.icon} {item.name}
            </span>
  
            {/* Underline from center */}
            <span
              className={`absolute left-0 -bottom-1 h-[2px] w-full bg-accent transform transition-transform duration-300 ease-in-out origin-center
                ${isActive ? "scale-x-100" : "scale-x-0"} group-hover:scale-x-100
              `}
            ></span>
          </Link>
        );
      })}
    </div>
  );
  
}

export default Navbar;
