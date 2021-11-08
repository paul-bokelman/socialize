import React, { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";

export const Dropdown = ({
  children,
}: {
  children: React.ReactChild;
}): JSX.Element => {
  const menu = [
    { text: "Usage", location: "usage" },
    { text: "Adding a New Badge", location: "adding-a-new-badge" },
    { text: "All Current Icons", location: "all-current-icons" },
  ];

  return (
    <Menu as="div" className="relative">
      <Menu.Button className="p-2 hover:bg-[#57606A15] dark:hover:bg-[#2F363D] rounded-lg transition duration-200 cursor-pointer">
        {children}
      </Menu.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute left-0 w-80 origin-top-right border-[1px] dark:border-[#30363A] bg-white dark:bg-[#161B22] rounded-lg shadow-lg">
          <div className="p-2">
            {menu.map((item, index) => (
              <Item key={index} text={item.text} location={item.location} />
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

const Item = ({
  text,
  location,
}: {
  text: string;
  location: string;
}): JSX.Element => (
  <Menu.Item>
    {({ active }) => (
      <a
        href={`#${location}`}
        className={`${
          active ? "bg-[#0A69DA] text-white" : "text-white-900 dark:text-white"
        } group flex rounded-lg items-center w-full px-4 py-2 text-sm font-semibold`}
      >
        {text}
      </a>
    )}
  </Menu.Item>
);
