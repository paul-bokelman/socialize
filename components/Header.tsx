import React from "react";
import { BsGithub } from "react-icons/bs";
import { CgDarkMode } from "react-icons/cg";
import { useStore } from "../hooks";
import { Dropdown } from "./Dropdown";
export const Header = (): JSX.Element => {
  const { toggleTheme } = useStore();
  const svgStyles = {
    div: "p-2 hover:bg-[#57606A15] dark:hover:bg-[#2F363D] rounded-md transition duration-200 cursor-pointer",
    icon: "fill-current text-[#57606A] dark:text-[#8B949E]",
  };

  return (
    <div className="flex flex-row justify-between items-center">
      <div className="flex flex-row items-center">
        <Dropdown>
          <TOC className={svgStyles.icon} />
        </Dropdown>
        <h1 className="ml-2 font-semibold text-md text-[#24292D] dark:text-[#C8D1D9]">
          README.md
        </h1>
      </div>
      <div className="flex flex-row items-center">
        <a href="https://github.com/paul-bokelman/socialize">
          <div className={svgStyles.div}>
            <BsGithub className={svgStyles.icon} />
          </div>
        </a>
        <div className={svgStyles.div} onClick={toggleTheme}>
          <CgDarkMode className={svgStyles.icon} />
        </div>
      </div>
    </div>
  );
};

const TOC = ({ className }: { className: string }) => (
  <svg
    aria-hidden="true"
    height="16"
    viewBox="0 0 16 16"
    version="1.1"
    width="16"
    data-view-component="true"
    className={className}
  >
    <path
      fillRule="evenodd"
      d="M2 4a1 1 0 100-2 1 1 0 000 2zm3.75-1.5a.75.75 0 000 1.5h8.5a.75.75 0 000-1.5h-8.5zm0 5a.75.75 0 000 1.5h8.5a.75.75 0 000-1.5h-8.5zm0 5a.75.75 0 000 1.5h8.5a.75.75 0 000-1.5h-8.5zM3 8a1 1 0 11-2 0 1 1 0 012 0zm-1 6a1 1 0 100-2 1 1 0 000 2z"
    ></path>
  </svg>
);
