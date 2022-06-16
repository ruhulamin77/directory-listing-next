import React, { useState } from 'react';
import { BsXCircleFill } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import { createNewCategory } from '../../../store/actions/categoryActions';

const CategoryModal = ({ updateList }) => {
  const dispatch = useDispatch();
  const [subCategoryName, setSubCategoryName] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    subCategories: [],
  });
  const { name, subCategories } = formData;

  const handleAddCategory = (e) => {
    e.preventDefault();
    setFormData({
      ...formData,
      subCategories: [...subCategories, subCategoryName],
    });
    setSubCategoryName('');

    if (name) {
      dispatch(createNewCategory(formData));
      setFormData({
        name: '',
        subCategories: [],
      });
    }
    updateList();
  };

  return (
    <div
      className="modal fade"
      id="categoryModal"
      tabIndex="-1"
      aria-labelledby="categoryModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="categoryModalLabel">
              Add Category
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <form onSubmit={handleAddCategory}>
              <div className="mb-3">
                <label htmlFor="name" className="col-form-label">
                  Category
                </label>
                <input
                  type="text"
                  placeholder="Category name"
                  value={name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="form-control"
                  required
                  id="name"
                />
              </div>
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Sub categories"
                  value={subCategoryName}
                  onChange={(e) => setSubCategoryName(e.target.value)}
                />
                <button
                  className="btn btn-primary shadow-none px-4"
                  type="button"
                  onClick={() => {
                    setFormData({
                      ...formData,
                      subCategories: [
                        ...formData.subCategories,
                        subCategoryName,
                      ],
                    });
                    setSubCategoryName('');
                  }}
                  disabled={!subCategoryName.trim()}
                >
                  Add
                </button>
              </div>
              <div className="mb-3">
                {subCategories.map((subCategory, index) => (
                  <span
                    key={index}
                    className="btn btn-sm rounded-pill btn-primary position-relative bg-primary me-3 fw-normal"
                  >
                    {subCategory}
                    {/*  */}
                    <span
                      onClick={() =>
                        setFormData({
                          ...formData,
                          subCategories: formData.subCategories.filter(
                            (subCat) => subCat !== subCategory
                          ),
                        })
                      }
                      type="button"
                      className="position-absolute text-white top-0 start-100 translate-middle"
                    >
                      <BsXCircleFill className="text-danger fs-5" />
                    </span>
                  </span>
                ))}
              </div>
              <div className="mb-3">
                <button
                  disabled={!name.trim()}
                  type="submit"
                  data-bs-dismiss="modal"
                  className="btn btn-primary"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
          {/* <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button type="submit" className="btn btn-primary">
              Send message
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default CategoryModal;
