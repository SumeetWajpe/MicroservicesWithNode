import React from "react";
import { Outlet } from "react-router-dom";

export default function Dashboard() {
  return (
    <div>
      <h3>Dashboard - Menu Goes here</h3>
      <Outlet />
    </div>
  );
}
