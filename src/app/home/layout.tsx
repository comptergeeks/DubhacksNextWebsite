import React from "react";
import { Navbar } from "../components/Navbar";

// add a layout piece with the footer as well, can export assets from the figma
const Layout = ({ children }: any) => {
  return <main>{children}</main>;
};

export default Layout;
