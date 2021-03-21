import React from "react";
import s from "./Header.module.scss";
import { Link } from "react-router-dom";

interface Props {}

export const Header = (props: Props) => {
  return (
    <div className={s.header}>
      <div className={s.logo}>🤑</div>
      <nav className={s.nav}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
