import React, { useEffect, useState } from 'react';

const Title = ({ setData }) => {
  const [title, setTitle] = useState('');

  useEffect(() => {
    setData('title', title);
    // eslint-disable-next-line
  }, [title]);

  return (
    <>
      <div className="d-flex justify-content-end ms-auto">
        <span
          className={
            title.length > 0 && title.length <= 50
              ? 'text-success'
              : title === ''
              ? ''
              : 'text-danger'
          }
        >
          {title.length > 0 ? `${title.length}/50` : '0/50'}
        </span>
      </div>
      <div className="form-floating mb-3">
        <input
          type="text"
          className={`form-control ${
            title.length > 0 && title.length <= 50
              ? 'is-valid'
              : title === ''
              ? ''
              : 'is-invalid'
          }`}
          id="title"
          required
          placeholder="Title"
          value={title}
          onInput={(e) => setTitle(e.target.value)}
        />
        <label htmlFor="title">
          Ad Title<span className="text-danger">*</span>
        </label>
      </div>
    </>
  );
};

export default Title;
