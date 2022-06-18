import React, { useState, useEffect } from 'react';

const Description = ({ setData }) => {
  const [description, setDescription] = useState('');

  useEffect(() => {
    setData('description', description);
    // eslint-disable-next-line
  }, [description]);

  return (
    <>
      <div className="d-flex justify-content-end ms-auto">
        <span
          className={
            description.length > 0 && description.length <= 5000
              ? 'text-success'
              : description === ''
              ? ''
              : 'text-danger'
          }
        >
          {description.length > 0 ? `${description.length}/5000` : '0/5000'}
        </span>
      </div>
      <div className="form-floating mb-3">
        <textarea
          className={`form-control ${
            description.length > 0 && description.length <= 5000
              ? 'is-valid'
              : description === ''
              ? ''
              : 'is-invalid'
          }`}
          placeholder="Description"
          id="description"
          required
          style={{ height: '150px' }}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <label htmlFor="description">
          Description<span className="text-danger">*</span>
        </label>
      </div>
    </>
  );
};

export default Description;
