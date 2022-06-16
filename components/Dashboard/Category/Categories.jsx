import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faPlus } from "@fortawesome/free-solid-svg-icons";
import { Button, Form, FormControl, InputGroup } from "react-bootstrap";
import DashboardNav from "../DashboardNav/DashboardNav";
import AddCategoriesModal from "./AddCategoriesModal";
import AddSubCategoryModal from "./AddSubCategoryModal";
import EditCategoryModal from "./EditCategoryModal";
import { getAllCategories } from "../../../store/actions/categoryActions";
import { useDispatch, useSelector } from "react-redux";
const Categories = () => {
  const dispatch = useDispatch();
  const { categories: allCategories } = useSelector(
    (state) => state.categories
  );
  useEffect(() => {
    dispatch(getAllCategories());
  }, [dispatch]);

  console.log(allCategories);

  const [category, setCategory] = useState(null);
  const [categoryModalOpen, setCategoryModalOpen] = useState(false);
  const [subCategoriesModal, setSubCategoriesModal] = useState(false);
  const [editCategoryItem, setEditCategoryItem] = useState({});
  const [editCategoryModal, setEditCategoryModal] = useState(false);

  // handle single category item click event
  const handleItemClick = (_id) => {
    const newCategory = allCategories.find((c) => c._id === _id);
    setCategory(newCategory);
  };

  const handleEditCategoryBtn = (category) => {
    setEditCategoryItem(category);
    setEditCategoryModal(true);
  };

  const handleAddCategory = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    setCategoryModalOpen(false);
  };

  return (
    <div>
      {/* <h2>Categories</h2> */}
      <DashboardNav title="Control Categories" />
      <div className="bg-white m-2 rounded-3 p-3 shadow-sm">
        <div className="m-auto w-50">
          <InputGroup className="mb-3">
            <FormControl
              placeholder="Search Categories"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
            <Button variant="outline-primary" id="button-addon2">
              Search
            </Button>
          </InputGroup>
        </div>
        <div className=" d-flex justify-content-between">
          <div className="w-50 pe-4 ">
            <div className="d-flex justify-content-between mb-2 align-items-center">
              <h6>Select categories</h6>
              <div>
                <Button
                  onClick={() => {
                    setCategoryModalOpen(true);
                  }}
                  size="sm"
                >
                  Add New
                  <FontAwesomeIcon
                    className="mb-0 ms-1"
                    size="md"
                    icon={faPlus}
                  />
                </Button>
              </div>
            </div>

            {/* add category Modal */}
            <AddCategoriesModal
              show={categoryModalOpen}
              handleAddCategory={handleAddCategory}
              onHide={() => setCategoryModalOpen(false)}
            />
            {/* Edit Category Modal */}
            <EditCategoryModal
              show={editCategoryModal}
              category={editCategoryItem}
              onHide={() => setEditCategoryModal(false)}
            />

            <ul className="list-group list-group-flush">
              {allCategories.map((c) => (
                <CategoriesListItem
                  key={c._id}
                  activeCategory={category}
                  category={c}
                  handleEditCategoryBtn={handleEditCategoryBtn}
                  handleItemClick={handleItemClick}
                />
              ))}
            </ul>
          </div>

          {/* show sub categories */}

          {category && (
            <div className="w-50">
              <div className="d-flex justify-content-between mb-2 align-items-center">
                <h6>Sub Categories</h6>
                <div>
                  <Button onClick={() => setSubCategoriesModal(true)} size="sm">
                    Add New{" "}
                    <FontAwesomeIcon className="mb-0" size="md" icon={faPlus} />
                  </Button>
                </div>
              </div>
              {/* Modal Of sub Categories */}
              <AddSubCategoryModal
                category={category.categoryName}
                show={subCategoriesModal}
                onHide={() => setSubCategoriesModal(false)}
              />
              <ul className="list-group list-group-flush">
                {category.subCategories.map((c) => (
                  <SubCategoryListItem subCategory={c} />
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Categories;

// fake data

const CategoriesListItem = (props) => {
  const { name, _id } = props.category;
  const { handleItemClick, activeCategory, handleEditCategoryBtn } = props;

  return (
    <li
      onClick={() => handleItemClick(_id)}
      className="list-group-item d-flex align-items-center justify-content-between"
    >
      <div className={`${activeCategory?._id === _id && "text-info"}`}>
        {name}
      </div>
      <div className="d-flex align-items-center">
        <Button
          onClick={() => handleEditCategoryBtn(props.category)}
          variant="warning"
          size="sm"
          className="me-3"
        >
          Edit
        </Button>
        <FontAwesomeIcon className="mb-0" size="md" icon={faArrowRight} />
      </div>
    </li>
  );
};

const SubCategoryListItem = ({ subCategory }) => {
  // const { Name, _id } = subCategory;
  return (
    <li
      // onClick={() => setCategoryId(_id)}
      className="list-group-item d-flex align-items-center justify-content-between"
    >
      {subCategory}
      <div className="d-flex align-items-center">
        <Button variant="warning" size="sm">
          Edit
        </Button>
      </div>
    </li>
  );
};
