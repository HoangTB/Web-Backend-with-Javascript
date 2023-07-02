import React from "react";
import "./header.css";
import { Link, useLocation } from "react-router-dom";
const Header = () => {
  const location = useLocation();
  return (
    <div className="header">
      <ul>
        <li>
          <Link
            to="/user"
            className={location.pathname === "/user" ? "active-link" : ""}
          >
            Users Panel
          </Link>
        </li>
        <li>
          <Link
            to="/blog"
            className={location.pathname === "/blog" ? "active-link" : ""}
          >
            Blogs Panel
          </Link>
        </li>
        <li>Log Out</li>
      </ul>
    </div>
  );
};

export default Header;
