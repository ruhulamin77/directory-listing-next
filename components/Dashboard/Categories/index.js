import React, { useEffect, useState } from 'react';
import { FaChevronDown, FaTrashAlt } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import {
  deleteCategory,
  getAllCategories,
} from '../../../store/actions/categoryActions';
import DashboardNav from '../DashboardNav/DashboardNav';
import CategoryModal from './CategoryModal';
import UpdateCategoryModal from './UpdateCategoryModal';

const Categories = () => {
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.categories);
  const [handler, setHandler] = useState(false);
  const updateList = () => setHandler(!handler);

  useEffect(() => {
    dispatch(getAllCategories());
  }, [dispatch, handler]);

  // Delete category
  const handleCategoryDelete = (id) => {
    const confirm = window.confirm(
      'Are you sure you want to delete this category?'
    );

    if (confirm) {
      dispatch(deleteCategory(id));
      updateList();
    } else {
      return;
    }
  };

  return (
    <>
      <DashboardNav title="" />
      <section className="container">
        <CategoryModal updateList={updateList} />
        <div className="my-3 ps-2 d-flex flex-wrap gap-3 align-items-center">
          <span className="fs-3 fw-normal">Categories</span>
          <button
            type="button"
            className="btn btn-sm btn-outline-primary"
            data-bs-toggle="modal"
            data-bs-target="#categoryModal"
          >
            + Add new
          </button>
        </div>
        <div className="accordion accordion-flush" id="categoryAccordion">
          {categories
            .map((category, index) => (
              <div key={index} className="accordion-item">
                <div className="accordion-header" id={`heading${index}`}>
                  <div className="py-3 px-2 ps-4 bg-white text-">
                    <div className="flex-grow-1 d-flex align-items-center justify-content-between">
                      <span className="fs-5">
                        {category.name}
                        <span className="badge bg-primary rounded-pill ms-1">
                          {category.subCategories.length}
                        </span>
                      </span>
                      <div
                        className="btn-group me-2"
                        role="group"
                        aria-label="First group"
                      >
                        <UpdateCategoryModal
                          updateList={updateList}
                          category={category}
                          index={index}
                        />
                        <button
                          onClick={() => handleCategoryDelete(category._id)}
                          type="button"
                          className="btn btn-outline-danger"
                        >
                          <FaTrashAlt className="fs-5" />
                        </button>
                        <button
                          type="button"
                          data-bs-toggle="collapse"
                          className="btn btn-outline-primary"
                          data-bs-target={`#collapse${index}`}
                          aria-expanded="false"
                          aria-controls={`collapse${index}`}
                          disabled={!category.subCategories.length}
                        >
                          <FaChevronDown className="fs-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  id={`collapse${index}`}
                  className="accordion-collapse collapse"
                  aria-labelledby={`heading${index}`}
                  data-bs-parent="#categoryAccordion"
                >
                  <div className="accordion-body">
                    <div className="my-2 ps-2 d-flex flex-wrap gap-3 align-items-center">
                      <h5>Sub Categories</h5>
                    </div>
                    <ul className="list-group">
                      {category.subCategories.map((subCategory, index) => (
                        <li
                          key={index}
                          className="list-group-item d-flex flex-wrap gap-2 align-items-center justify-content-between"
                        >
                          <span>
                            {index + 1}. {subCategory}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))
            .reverse()}
        </div>
      </section>
    </>
  );
};

export default Categories;
