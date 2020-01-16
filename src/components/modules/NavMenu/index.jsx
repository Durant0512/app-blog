import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./styles.module.scss";

const NavMenu = () => {
  const { root, active } = styles;

  return (
    <ul className={root}>
      <li>
        <NavLink activeClassName={active} exact to="/">
          Posts
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName={active} exact to="/post">
          Post
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName={active} exact to="/contacts">
          Contacts
        </NavLink>
      </li>
    </ul>
  );
};

export default NavMenu;
