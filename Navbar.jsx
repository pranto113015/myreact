import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? "text-danger" : "text-dark")}
      >
        Home
      </NavLink>
      |
      <NavLink
        to="/about"
        className={({ isActive }) => (isActive ? "text-danger" : "text-dark")}
      >
        About
      </NavLink>
      |
      <NavLink
        to="resume"
        className={({ isActive }) => (isActive ? "text-danger" : "text-dark")}
      >
        Resume
      </NavLink>
      |
      <NavLink
        to="/service"
        className={({ isActive }) => (isActive ? "text-danger" : "text-dark")}
      >
        Service
      </NavLink>
      |
      <NavLink
        to="/login"
        className={({ isActive }) => (isActive ? "text-danger" : "text-dark")}
      >
        Login
      </NavLink>
      |
      <NavLink
        to="/user/1"
        className={({ isActive }) => (isActive ? "text-danger" : "text-dark")}
      >
        User
      </NavLink>
    </div>
  );
}
