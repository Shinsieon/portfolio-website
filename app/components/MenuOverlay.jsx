import React from "react";
import NavLink from "./NavLink";
import ThemeButton from "./ThemeButton";

const MenuOverlay = ({ links }) => {
  return (
    <ul className="flex flex-col py-4 items-center">
      {links.map((link, index) => (
        <li key={index}>
          <NavLink href={link.path} title={link.title} />
          <ThemeButton></ThemeButton>
        </li>
      ))}
    </ul>
  );
};

export default MenuOverlay;
