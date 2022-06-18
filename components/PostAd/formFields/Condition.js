import React, { useState } from 'react';
import { useEffect } from 'react';

const Condition = ({ setData }) => {
  const [condition, setCondition] = useState('');

  const handleConditionChange = (e) => {
    setCondition(e.target.value);

    if (condition === e.target.value) {
      setCondition('');
    }
  };

  useEffect(() => {
    setData('condition', condition);
  }, [condition]);

  return (
    <fieldset className="row pb-5">
      <legend className="col-form-label col-sm-5 col-md-4 pt-0 mb-3">
        Condition <span className="text-muted">(optional)</span>
      </legend>
      <div className="col-sm-6">
        <div className="form-check form-switch mb-3">
          <input
            className="form-check-input"
            style={{ cursor: 'pointer' }}
            type="checkbox"
            role="switch"
            id="newCondition"
            value="new"
            onChange={handleConditionChange}
            checked={condition === 'new'}
          />
          <label
            className="form-check-label"
            style={{ cursor: 'pointer' }}
            htmlFor="newCondition"
          >
            New
          </label>
        </div>
        <div className="form-check form-switch">
          <input
            className="form-check-input"
            style={{ cursor: 'pointer' }}
            type="checkbox"
            role="switch"
            id="usedCondition"
            value="used"
            onChange={handleConditionChange}
            checked={condition === 'used'}
          />
          <label
            className="form-check-label"
            style={{ cursor: 'pointer' }}
            htmlFor="usedCondition"
          >
            Used
          </label>
        </div>
      </div>
    </fieldset>
  );
};

export default Condition;
