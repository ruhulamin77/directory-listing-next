import { Button } from "react-bootstrap";
import React, { useState } from "react";
import DeleteLogo from "./DeleteLogo";
import UpdateLogo from "./UpdateLogo";
import "./Headers.css";

const Headers = () => {
  return (
    <div className="">
      <h3 className="text-white bg-dark p-3">Delete or Update logo</h3>
      <DeleteLogo />
      <UpdateLogo />
    </div>
  );
};

export default Headers;
