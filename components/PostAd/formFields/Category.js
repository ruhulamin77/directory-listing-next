import React, { useState } from 'react';
import { useEffect } from 'react';
import { BsXCircle } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCategories } from '../../../store/actions/categoryActions';

const Category = ({ setData }) => {
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.categories);

  const [selectedCategories, setSelectedCategories] = useState({
    category: '',
    subCategories: [],
  });

  useEffect(() => {
    setData('category', selectedCategories);
    // eslint-disable-next-line
  }, [selectedCategories]);

  useEffect(() => {
    dispatch(getAllCategories());
  }, [dispatch]);

  return (
    <>
      {/* category */}
      <div className="form-floating mb-3">
        <select
          className={`form-select ${
            selectedCategories.category ? 'is-valid' : ''
          }`}
          id="categorySelect"
          required
          onInput={(e) => {
            if (e.target.value === '') {
              setSelectedCategories({
                category: '',
                subCategories: [],
              });
              return;
            }
            setSelectedCategories({
              ...selectedCategories,
              category: e.target.value,
              subCategories: [],
            });
          }}
        >
          <option value="">Select Category</option>
          {categories.map((category) => (
            <option key={category._id} value={category.name}>
              {category.name}
            </option>
          ))}
        </select>
        <label htmlFor="categorySelect">
          Category<span className="text-danger">*</span>
        </label>
      </div>
      {/* end of category */}

      {/* sub categories */}
      <div className="form-floating mb-3">
        <select
          className={`form-select ${
            selectedCategories.subCategories.length > 0 ? 'is-valid' : ''
          }`}
          id="subCategorySelect"
          disabled={selectedCategories.category === ''}
          onInput={(e) => {
            if (e.target.value === '') {
              return;
            }
            setSelectedCategories({
              ...selectedCategories,
              subCategories: [
                ...selectedCategories.subCategories,
                e.target.value.trim(),
              ],
            });
          }}
        >
          <option value="">Select Sub-categories</option>
          {categories
            .filter((category) => category.name === selectedCategories.category)
            .map((category) =>
              category.subCategories.map((subCategory) => (
                <option
                  key={subCategory._id}
                  value={subCategory}
                  className={
                    selectedCategories.subCategories.includes(subCategory)
                      ? 'bg-success text-white'
                      : ''
                  }
                  disabled={selectedCategories.subCategories.includes(
                    subCategory
                  )}
                >
                  {subCategory}
                </option>
              ))
            )}
        </select>
        <label htmlFor="subCategorySelect">Subcategories</label>
      </div>
      {/* end of sub categories */}

      {/* Sub categories tags */}
      {selectedCategories.subCategories.length > 0 && (
        <div className="fs-6 d-flex rounded-3 align-items-center gap-2 flex-wrap mb-3">
          {selectedCategories.subCategories.map((subCategory, index) => (
            <div
              key={index}
              className="badge rounded-pill border px-3 fw-normal bg-light text-dark d-flex gap-2 align-items-center"
            >
              {subCategory}
              <button
                type="button"
                className="btn p-0 shadow-none"
                onClick={() => {
                  setSelectedCategories({
                    ...selectedCategories,
                    subCategories: selectedCategories.subCategories.filter(
                      (sub) => sub !== subCategory
                    ),
                  });
                }}
              >
                <BsXCircle className="text-danger mb-1" />
              </button>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Category;
