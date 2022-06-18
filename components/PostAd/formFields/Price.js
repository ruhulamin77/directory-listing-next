import React, { useEffect, useState } from 'react';

const Price = ({ setData }) => {
  const [price, setPrice] = useState();

  useEffect(() => {
    setData('price', price);
  }, [price]);

  return (
    <div className="form-floating mb-3">
      <input
        type="number"
        className={`form-control ${
          price > 0 ? 'is-valid' : !price ? '' : price < 0 && 'is-invalid'
        }`}
        id="price"
        name="price"
        value={price}
        onChange={(e) => setPrice(e.target.value < 0 ? '' : e.target.value)}
        required
        placeholder="Price"
      />
      <label htmlFor="price">
        Price (USD)<span className="text-danger">*</span>
      </label>
    </div>
  );
};

export default Price;
