import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./navbar.component";

export default function Dashboard() {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
}
