import React from "react";
import { Button } from "react-bootstrap";
import logo from "../../../images/about-us.svg";

const DeleteLogo = () => {
  const deleteLogo = () => {};
  return (
    <div className="text-center delete_logo bg-dark text-white py-4">
      <img className="w-25" src={logo} alt="" />
      <h4 className="py-3">Delete Logo</h4>
      <Button variant="danger" onClick={deleteLogo}>
        Delete
      </Button>
    </div>
  );
};

export default DeleteLogo;
