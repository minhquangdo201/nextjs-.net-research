import { ReactElement, useContext, useState } from "react";
import Link from "next/link";
import "./SideBar.css";
import { createContext } from "vm";

interface SideBarProps {
  children: ReactElement[];
}

export const SideBar = (props: SideBarProps): ReactElement => {
  return (
    <aside className="h-screen">
      <nav className="h-full flex bg-white border-r flex-col">
        <Link href="/">
          <div className="p-4 pb-2 flex justify-center">
            <img
              className="w-20"
              src="https://static-00.iconduck.com/assets.00/tailwind-css-icon-512x307-1v56l8ed.png"
              alt=""
            />
          </div>
        </Link>
        <ul className="flex-1 px-3"> {props.children}</ul>
      </nav>
    </aside>
  );
};

interface SideBarItemProps {
  icon: ReactElement;
  text: string;
  active: boolean;
  onClick: () => void;
}

export const SideBarItem = (props: SideBarItemProps): ReactElement => {
  return (
    <li
      className={`relative flex items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer transition-colors 
        ${
          props.active
            ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800"
            : "hover:bg-indigo-50 text-gray-600"
        }
    `}
      onClick={props.onClick}
    >
      {props.icon}
      <span className="w-36 ml-3">{props.text}</span>
    </li>
  );
};
