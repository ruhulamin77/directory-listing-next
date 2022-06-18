import React, { useState } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

const PriceRange = ({ handlePrice }) => {
  const [price, setPrice] = useState([1, 100000]);

  return (
    <div className="border border-danger rounded-3 p-2 px-3 mb-3">
      <p className="mb-3 text-danger">Price range</p>
      <Slider
        range
        min={1}
        max={1000}
        defaultValue={[1, 100000]}
        step={1}
        value={price}
        onChange={(price) => {
          setPrice(price);
          handlePrice(price);
        }}
      />
      <div className="mt-2 d-flex align-items-center justify-content-between">
        <span>min: ${price[0]}</span>
        <span>max: ${price[1]}</span>
      </div>
    </div>
  );
};

export default PriceRange;
