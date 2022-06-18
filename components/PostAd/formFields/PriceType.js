import React, { useState } from 'react';
import { useEffect } from 'react';

const PriceType = ({ setData }) => {
  const [priceType, setPriceType] = useState('');

  const handlePriceTypeChange = (e) => {
    setPriceType(e.target.value);

    if (priceType === e.target.value) {
      setPriceType('');
    }
  };

  useEffect(() => {
    setData('priceType', priceType);
  }, [priceType]);

  return (
    <fieldset className="row mb-5">
      <legend className="col-form-label col-sm-5 col-md-4 pt-0 mb-3">
        Price Type <span className="text-muted">(optional)</span>
      </legend>
      <div className="col-sm-6">
        <div className="form-check form-switch mb-3">
          <input
            className="form-check-input"
            style={{ cursor: 'pointer' }}
            type="checkbox"
            role="switch"
            id="fixedPrice"
            value="fixed"
            onChange={handlePriceTypeChange}
            checked={priceType === 'fixed'}
          />
          <label
            className="form-check-label"
            style={{ cursor: 'pointer' }}
            htmlFor="fixedPrice"
          >
            Fixed
          </label>
        </div>
        <div className="form-check form-switch">
          <input
            className="form-check-input"
            style={{ cursor: 'pointer' }}
            type="checkbox"
            role="switch"
            id="negotiablePrice"
            value="negotiable"
            onChange={handlePriceTypeChange}
            checked={priceType === 'negotiable'}
          />
          <label
            className="form-check-label"
            style={{ cursor: 'pointer' }}
            htmlFor="negotiablePrice"
          >
            Negotiable
          </label>
        </div>
      </div>
    </fieldset>
  );
};

export default PriceType;
