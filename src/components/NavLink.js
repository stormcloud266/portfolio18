import React from "react";
import { Link } from "gatsby";

const NavLink = props => (
  <Link
    {...props}
    getProps={({ isCurrent }) => {
      // the object returned here is passed to the
      // anchor element's props
      return {
        className: isCurrent ? "active-page" : ""
      };
    }}
  />
);
export default NavLink;
