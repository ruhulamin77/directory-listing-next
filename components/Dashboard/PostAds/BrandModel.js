import React from "react";
import { Button } from "react-bootstrap";

const BrandModel = () => {
  const field = [];
  const addLocation = () => {
    const brand = document.getElementById("brand-field");
    const brandField = document.createElement("input");
    const div = document.createElement("div");
    brandField.type = "text";
    brand.appendChild(brandField);
  };
  return (
    <div>
      <Button onClick={addLocation} variant="warning">
        Add Location
      </Button>
      <div id="brand-field"></div>
    </div>
  );
};

export default BrandModel;
