import React, { useEffect } from 'react';
import { BsChevronDown } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCategories } from '../../../store/actions/categoryActions';

const CategoryAside = ({ setCategory }) => {
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.categories);

  useEffect(() => {
    dispatch(getAllCategories());
  }, []);
  return (
    <ul className="list-unstyled row">
      <li>
        <div className="card border border-danger">
          <div className="form-check p-0 d-flex align-items-center">
            <button
              className="btn text-danger fs-6 d-inline-flex gap-2 align-items-center justify-content-between rounded shadow-none flex-grow-1"
              data-bs-toggle="collapse"
              data-bs-target="#categoryCollapse"
              type="button"
            >
              Category
              <BsChevronDown />
            </button>
          </div>
          <div className="collapse" id="categoryCollapse">
            <div className="fw-normal pb-1 small">
              <button
                className="ps-4 btn list-group-item-action d-inline-flex align-items-center rounded gap-2 shadow-none"
                type="button"
                onClick={() => setCategory('all')}
              >
                All Categories
              </button>
              {categories
                .sort((a, b) =>
                  a.name.toLowerCase().localeCompare(b.name.toLowerCase())
                )
                .map((category, index) => (
                  <button
                    key={index}
                    className="ps-4 btn list-group-item-action d-inline-flex align-items-center rounded gap-2 shadow-none"
                    type="button"
                    onClick={() => setCategory(category.name)}
                  >
                    {category.name}
                  </button>
                ))}
            </div>
          </div>
        </div>
      </li>
    </ul>
  );
};

export default CategoryAside;
