import { useState } from "react";
import Button from "../UI/Button/Button";
import { BsSun, BsArrowLeftShort } from "react-icons/bs";
import { FaClipboardList } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { CgProfile } from "react-icons/cg";
import {
  MdDarkMode,
  MdShoppingCart,
  MdSettings,
  MdLogin,
} from "react-icons/md";
import { Link } from "react-router-dom";
const Sidebar: React.FC<{ darkmode: boolean; changeTheme: any }> = (props) => {
  const [openSideBar, setOpenSideBar] = useState(false);
  const Menus = [
    { title: "Orders", link: "/orders", icon: <FaClipboardList /> },
    {
      title: "Products",
      link: "/products",
      icon: <MdShoppingCart />,
    },
    {
      title: "My Profile",
      icon: <CgProfile />,
      link: "/profile",
      spacing: true,
    },
    { title: "Settings", icon: <MdSettings />, link: "/settings" },
    { title: "Logout", icon: <MdLogin />, link: "/logout" },
  ];
  return (
    <>
      <div
        className={`bg-gray-300 dark:bg-zinc-700 h-screen p-5 pt-8 ${
          openSideBar ? "w-72" : "w-20"
        } duration-300 relative`}
      >
        <BsArrowLeftShort
          onClick={() => {
            setOpenSideBar(!openSideBar);
          }}
          className={`bg-white text-dark-purple text-3xl rounded-full absolute  -right-3 top-9 border border-dark-purple cursor-pointer ${
            !openSideBar ? "rotate-180" : null
          }`}
        />
        <div className="inline-flex">
          <SiTypescript
            className={`bg-amber-300 text-4xl rounded cursor-pointer block float-left mr-2 duration-500 ${
              openSideBar && "rotate-[360deg]"
            }`}
          />
          <h1
            className={`text-zinc-800 dark:text-gray-300 origin-left font-medium text-2xl duration-300 ${
              !openSideBar && "scale-0"
            } `}
          >
            TypeScriptAPP
          </h1>
        </div>
        <div className="flex items-center rounded-md mt-6 py-2">
          <div
            className="text-amber-300 bg-black text-2xl p-1 rounded cursor-pointer block float-left mr-2 duration-500"
            onClick={() => props.changeTheme()}
          >
            {props.darkmode ? (
              <BsSun className="hover:rotate-[360deg] duration-300" />
            ) : (
              <MdDarkMode className="hover:rotate-[360deg] duration-300" />
            )}
          </div>{" "}
        </div>
        <ul className="pt-2">
          {Menus.map((menu, index) => (
            <div key={index}>
              <Link to={menu.link}>
                <li
                  className={`text-zinc-800 dark:text-gray-300 text-md flex items-center cursor-pointer gap-x-4 hover:text-amber-300 dark:hover:text-amber-300 ${
                    menu.spacing ? "mt-9" : "mt-4"
                  }`}
                >
                  <span className="text-3xl block float-left">{menu.icon}</span>
                  <span
                    className={`text-2xl font-semibold flex-1 duration-200 ${
                      !openSideBar && "hidden"
                    }`}
                  >
                    {menu.title}
                  </span>
                </li>
              </Link>
            </div>
          ))}
        </ul>
      </div>
    </>
  );
};
export default Sidebar;
