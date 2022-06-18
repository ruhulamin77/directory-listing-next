import React, { useState } from 'react';
import { useEffect } from 'react';
import { BiSortAlt2 } from 'react-icons/bi';

const Sort = ({ handleSort }) => {
  const [sortBy, setSortBy] = useState('newest');
  
  return (
    <div className="form-floating mb-3">
      <select
        className="form-select border border-danger shadow-none"
        style={{ cursor: 'pointer' }}
        id="sortSelect"
        value={sortBy}
        onChange={(e) => {
          setSortBy(e.target.value);
          handleSort(e.target.value);
        }}
      >
        <option value="newest">Date: Newest to Oldest</option>
        <option value="oldest">Date: Oldest to Newest</option>
        <option value="lowest">Price: Low to High</option>
        <option value="highest">Price: High to Low</option>
      </select>
      <label htmlFor="sortSelect" className="text-danger">
        <BiSortAlt2 className="fs-5" />
        <span>Sort by</span>
      </label>
    </div>
  );
};

export default Sort;
