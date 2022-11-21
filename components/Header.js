import Link from "next/link";
import React from "react";

const HeaderLayout = () => {
  return (
    <header>
      <div className="container">
        <div className="header_main">
          <ul>
            <Link href="#">
              <li>Home</li>
            </Link>
            <Link href="#">
              <li>About</li>
            </Link>
            <Link href="#">
              <li>Blogs</li>
            </Link>
            <Link href="#">
              <li>Contact</li>
            </Link>
          </ul>

          <ul>
            <Link href="/">
              <li>Login</li>
            </Link>
          </ul>
        </div>
      </div>
    </header>
  );
};
export default HeaderLayout;
