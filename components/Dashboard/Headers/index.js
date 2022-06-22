import { Button } from "react-bootstrap";
import React, { useState } from "react";
import DeleteLogo from "./DeleteLogo";
import UpdateLogo from "./UpdateLogo";
import DashboardNav from "../DashboardNav";
// import "./Headers.css";

const Headers = () => {
  return (
    <div className="">
      <DashboardNav title={"Delete or Update logo"} />

      <DeleteLogo />
      <UpdateLogo />
    </div>
  );
};

export default Headers;
