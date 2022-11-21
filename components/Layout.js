import React, { Fragment } from "react";
import FooterLayout from "./Footer";
import HeaderLayout from "./Header";

const Layout = ({ children }) => {
  return (
    <Fragment>
      <HeaderLayout />
      <div>{children}</div>
      <FooterLayout />
    </Fragment>
  );
};
export default Layout;
