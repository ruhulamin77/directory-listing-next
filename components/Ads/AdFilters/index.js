import React, { useState } from 'react';
import { useEffect } from 'react';
import { BsFillTagsFill, BsSearch } from 'react-icons/bs';
import { FaMapMarkerAlt } from 'react-icons/fa';
import CategoryAside from './CategoryAside';
import LocationAside from './LocationAside';
import PriceRange from './PriceRange';
import Sort from './Sort';

const AdFilters = ({ children, handleSearch, handleSort, handlePrice }) => {
  const [searchedQuery, setSearchedQuery] = useState('');

  const [category, setCategory] = useState('all');
  const [location, setLocation] = useState({
    country: 'all',
    state: 'all',
  });

  return (
    <>
      <div className="border p-2 my-0 rounded-3 mb-3 overflow-auto hide-scrollbar">
        <div className="gap-2 d-flex flex-column flex-md-row align-items-center justify-content-between w-100">
          <div className="d-flex gap-2 order-md-1 order-2 w-100">
            <button className="w-50 shadow-none btn btn-outline-danger rounded-3 d-flex gap-1 align-items-center">
              <BsFillTagsFill />
              <span className="d-inline-block text-truncate">Category</span>
            </button>
            <button className="w-50 shadow-none btn btn-outline-danger rounded-3 d-flex gap-1 align-items-center">
              <FaMapMarkerAlt />
              <span className="d-inline-block text-truncate">Location</span>
            </button>
          </div>
          <div className="flex-grow-1 w-md-50 w-100 order-md-2 order-1">
            <form className="d-flex input-group flex-grow-1">
              <input
                className="form-control border border-danger shadow-none"
                type="search"
                value={searchedQuery}
                onChange={(e) => {
                  setSearchedQuery(e.target.value);
                  handleSearch(e.target.value);
                }}
                placeholder="What are you looking for?"
                aria-label="Search"
              />
              <button
                className="btn btn-danger border border-danger px-4"
                type="submit"
                onClick={(e) => {
                  e.preventDefault();
                  handleSearch(searchedQuery);
                }}
              >
                <BsSearch />
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4 col-xl-3 d-none d-md-block">
          <div className="border rounded-3 p-2">
            <div className="px-0">
              {/* sort */}
              <Sort handleSort={handleSort} />
              {/* end of sort */}
              {/* price range */}
              <PriceRange handlePrice={handlePrice} />
              {/* price range */}
              {/* category */}
              <CategoryAside setCategory={setCategory} />
              {/* end of category */}
              {/* location */}
              <LocationAside location={location} setLocation={setLocation} />
              {/* end of location */}
            </div>
          </div>
        </div>
        <div className="col-md-8 col-xl-9">{children}</div>
      </div>
    </>
  );
};

export default AdFilters;
