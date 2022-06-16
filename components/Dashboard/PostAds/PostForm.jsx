import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Button, Form, Row } from "react-bootstrap";
import AddImages from "./AddImages";
import ContactDetails from "./ContactDetails";
import LocationFormTest2 from "./LocationFormTest2";
import "./PostForm.css";

const PostForm = () => {
  const [condition, setCondition] = useState("");
  const [categories, setCategories] = useState([
    {
      _id: 634163136854,
      categoryName: "Phones",
      subCategories: [
        { Name: "Home Appliances", _id: 64564464556 },
        { Name: "Living Room Furniture", _id: 216344444645313 },
        { Name: "Sim card", _id: 21634644445313 },
        { Name: "Bedroom Furniture", _id: 21634554645313 },
      ],
    },
    {
      _id: 634163135466854,
      categoryName: "Electronics",
      subCategories: [
        { Name: "Mobile Phone", _id: 645645454456 },
        { Name: "Home Appliances", _id: 2165454344645313 },
        { Name: "Bedroom Furniture", _id: 216545346454313 },
      ],
    },
    {
      _id: 6341645663136854,
      categoryName: "Home and Living",
      subCategories: [
        { Name: "Home Appliances", _id: 64564464556 },
        { Name: "Living Room Furniture", _id: 216344444645313 },
        { Name: "Sim card", _id: 21634644445313 },
        { Name: "Bedroom Furniture", _id: 21634554645313 },
      ],
    },
    {
      _id: 63416313681154,
      categoryName: "Property",
      subCategories: [
        { Name: "Mobile Phone", _id: 645645454456 },
        { Name: "Home Appliances", _id: 2165454344645313 },
        { Name: "Bedroom Furniture", _id: 216545346454313 },
      ],
    },
    {
      _id: 63416341114136854,
      categoryName: "Fashion and Beauty",
      subCategories: [
        { Name: "Home Appliances", _id: 645665445456 },
        { Name: "Living Room Furniture", _id: 216344645645313 },
        { Name: "Sim card", _id: 21634645313 },
        { Name: "Bedroom Furniture", _id: 2163354344645313 },
      ],
    },
    {
      _id: 634163136854,
      categoryName: "Phones",
      subCategories: [
        { Name: "Home Appliances", _id: 64564464556 },
        { Name: "Living Room Furniture", _id: 216344444645313 },
        { Name: "Sim card", _id: 21634644445313 },
        { Name: "Bedroom Furniture", _id: 21634554645313 },
      ],
    },
    {
      _id: 634163135466854,
      categoryName: "Electronics",
      subCategories: [
        { Name: "Mobile Phone", _id: 645645454456 },
        { Name: "Home Appliances", _id: 2165454344645313 },
        { Name: "Bedroom Furniture", _id: 216545346454313 },
      ],
    },
    {
      _id: 6341645663136854,
      categoryName: "Home and Living",
      subCategories: [
        { Name: "Home Appliances", _id: 64564464556 },
        { Name: "Living Room Furniture", _id: 216344444645313 },
        { Name: "Sim card", _id: 21634644445313 },
        { Name: "Bedroom Furniture", _id: 21634554645313 },
      ],
    },
    {
      _id: 63416313681154,
      categoryName: "Property",
      subCategories: [
        { Name: "Mobile Phone", _id: 645645454456 },
        { Name: "Home Appliances", _id: 2165454344645313 },
        { Name: "Bedroom Furniture", _id: 216545346454313 },
      ],
    },
    {
      _id: 63416341114136854,
      categoryName: "Fashion and Beauty",
      subCategories: [
        { Name: "Home Appliances", _id: 645665445456 },
        { Name: "Living Room Furniture", _id: 216344645645313 },
        { Name: "Sim card", _id: 21634645313 },
        { Name: "Bedroom Furniture", _id: 2163354344645313 },
      ],
    },
  ]);
  const [categoryText, setCategoryText] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSubCategories, setSelectedSubCategories] = useState([]);
  const [brandText, setBrandText] = useState("");
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [locations, setLocations] = useState([]);
  const [stateText, setStateText] = useState("");
  const [selectedState, setSelectedState] = useState(null);
  const [selectedCities, setSelectedCities] = useState([]);
  const [multiState, setMultiState] = useState([]);
  const [priceType, setPriceType] = useState("");

  // console.log(selectedState?.state);
  useEffect(() => {
    fetch("/locations.json")
      .then((res) => res.json())
      .then((data) => setLocations(data));
  }, []);

  const handleCategoryChange = (value) => {
    setCategoryText(value);

    const selectCategory = categories.find(
      (c) => c.categoryName === value.trim()
    );
    if (selectCategory) {
      setSelectedCategory(selectCategory);
    } else {
      setSelectedCategory(selectCategory);

      setSelectedSubCategories([]);
    }
  };
  const handleBrandChange = (value) => {
    setBrandText(value);
    console.log(value);

    const selectBrand = categories.find((c) => c.categoryName === value.trim());
    if (selectBrand) {
      setSelectedBrand(selectBrand);
    } else {
      setSelectedBrand(selectBrand);
    }
  };

  console.log(multiState);

  const handleStateChange = (value) => {
    setStateText(value);
    const existingMultiState = [...multiState];
    const state = locations.find((c) => c.state === value.trim());
    if (value === state.state) {
      if (!existingMultiState.includes(value)) {
        existingMultiState.push(state.state);
        setMultiState(existingMultiState);
      }
    }
    console.log(value, state);

    const selectState = locations.find((c) => c.state === value.trim());
    if (selectState) {
      setSelectedState(selectState);
    } else {
      setSelectedState(selectState);
      setSelectedCities([]);
    }
  };

  const handleCategoryClear = () => {
    setCategoryText("");
    setSelectedCategory(null);
    setSelectedSubCategories([]);
  };
  const handleBrandClear = () => {
    setBrandText("");
  };

  const handleLocationClear = () => {
    setStateText("");
    setSelectedState(null);
    setSelectedCities([]);
  };

  // const handleSubCategoryChange = (subCategory) => {
  //   console.log(subCategory.target.value);
  //   const newSubCategories = [...selectedSubCategories];
  //   const existSubC = newSubCategories.find(
  //     (subC) => subC.Name === subCategory.Name
  //   );
  //   if (!existSubC) {
  //     newSubCategories.push(subCategory);
  //     setSelectedSubCategories(newSubCategories);
  //   } else {
  //     const filterSubC = newSubCategories.filter(
  //       (subC) => subC.Name !== subCategory.Name
  //     );
  //     setSelectedSubCategories(filterSubC);
  //   }
  // };
  const handleSubCategoryChange = (subCategory) => {
    console.log(subCategory);
    const newSubCategories = [...selectedSubCategories];
    const existSubC = newSubCategories.find((subC) => subC === subCategory);
    if (!existSubC) {
      newSubCategories.push(subCategory);
      setSelectedSubCategories(newSubCategories);
    } else {
      // const filterSubC = newSubCategories.filter(
      //   (subC) => subC !== subCategory
      // );
      setSelectedSubCategories(newSubCategories);
    }
  };
  const handleCityChange = (city) => {
    console.log(city);
    const newCities = [...selectedCities];
    const existCity = newCities.find((c) => c === city);
    if (!existCity) {
      newCities.push(city);
      setSelectedCities(newCities);
    } else {
      setSelectedCities(newCities);
    }
  };

  const handleSubCategoryClose = (categoryName) => {
    const existSubCategories = [...selectedSubCategories];
    const newSubCategories = existSubCategories.filter(
      (c) => c !== categoryName
    );
    setSelectedSubCategories(newSubCategories);
  };

  const handleCityClose = (city) => {
    const existCities = [...selectedCities];
    const newCities = existCities.filter((c) => c !== city);
    setSelectedCities(newCities);
  };

  const handlePriceTypeChange = (e) => {
    setPriceType(e.target.value);
    if (priceType === e.target.value) {
      setPriceType("");
    }
  };
  console.log("out site after function " + priceType);
  const handleConditionChange = (e) => {
    setCondition(e.target.value);

    if (condition === e.target.value) {
      setCondition("");
    }
  };

  return (
    <div className="row container-sm mx-auto">
      <Form className="col-lg-8 mx-auto">
        <Form.Group className="mb-3" controlId="title">
          <Form.Label>Title</Form.Label>
          <Form.Control type="text" placeholder="Title to be short!" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="description">
          <Form.Label htmlFor="description">Descriptions</Form.Label>
          <Form.Control
            id="description"
            as="textarea"
            type="text"
            rows="5"
            placeholder="Share more details to make effective"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="price">
          <Form.Label>Price (BDT)</Form.Label>
          <Form.Control
            id="price"
            type="number"
            placeholder="What would you pay? Give a price!"
            required
          />
        </Form.Group>
        <Form.Group>
          <Row md={2} className="">
            <Form.Check
              onChange={handlePriceTypeChange}
              value="Negotiable"
              checked={priceType === "Negotiable"}
              label="Negotiable"
              id="negotiable"
              name="negotiable"
            />
            <Form.Check
              onChange={handlePriceTypeChange}
              value="Fixed"
              checked={priceType === "Fixed"}
              label="Fixed"
              id="fixed"
              name="fixed"
            />
          </Row>
        </Form.Group>

        <Form.Group className="my-4" controlId="condition">
          <Form.Label>Condition</Form.Label>
          <Row md={2} className="">
            <Form.Check
              onChange={handleConditionChange}
              value="Used"
              checked={condition === "Used"}
              label="Used"
              id="used"
              name="used"
            />
            <Form.Check
              onChange={handleConditionChange}
              value="New"
              checked={condition === "New"}
              label="New"
              id="new"
              name="new"
            />
          </Row>
        </Form.Group>
        {/* select brand */}
        <Form.Group className="mb-3" controlId="brand">
          <Form.Label htmlhtmlFor="brand">Brand</Form.Label>
          <div className="position-relative">
            <input
              value={brandText}
              type="text"
              name="brand"
              className="form-control "
              list="brand"
              placeholder="Select Brand"
              onChange={(e) => handleBrandChange(e.target.value)}
              required
            />
            <FontAwesomeIcon
              onClick={() => handleBrandClear()}
              className={`ms-1 ${
                !brandText && "d-none"
              } select-category-Xmark cursor-pointer`}
              size="lg"
              icon={faXmark}
            />
          </div>

          <datalist id="brand" className="w-100">
            {categories.map((c) => (
              <option value={c.categoryName}></option>
            ))}
          </datalist>
        </Form.Group>
        {/* brand model */}
        <Form.Group className="mb-3" controlId="title">
          <Form.Label>Model</Form.Label>
          <Form.Control type="text" name="model" placeholder="Model" required />
        </Form.Group>

        {/* <Form.Group className="mb-3" controlId="category"> */}
        <Form.Label htmlhtmlFor="category">Select Category</Form.Label>
        <div className="position-relative">
          <input
            value={categoryText}
            type="text"
            name="category"
            className="form-control "
            list="category"
            placeholder="Select Category"
            onChange={(e) => handleCategoryChange(e.target.value)}
          />
          <FontAwesomeIcon
            onClick={() => handleCategoryClear()}
            className={`ms-1 ${
              !categoryText && "d-none"
            } select-category-Xmark cursor-pointer`}
            size="lg"
            icon={faXmark}
          />
        </div>

        <datalist id="category" className="w-100">
          {categories.map((c) => (
            <option value={c.categoryName}></option>
          ))}
        </datalist>

        {/* show sub categories */}
        <Form.Label htmlhtmlFor="sub-category">
          {selectedCategory && (
            <div className="fw-bold my-2">
              Select Sub Category for {selectedCategory?.categoryName}
            </div>
          )}
          <div className="ms-5 mb-3">
            {selectedCategory?.subCategories.map((subCategory) => (
              <Form.Check
                // onChange={() => handleCheckboxChange(subCategory)}
                type="checkbox"
                id={subCategory.Name}
                label={subCategory.Name}
              />
            ))}
          </div>

          {selectedCategory && (
            <div className="ms-5 mb-3">
              <Form.Select
                onChange={(e) => handleSubCategoryChange(e.target.value)}
                name="sub-category"
                id="sub-category"
                form="sub-category"
              >
                <option selected disabled>
                  --Select Sub Category--
                </option>

                {selectedCategory?.subCategories.map((subCategory) => (
                  <option value={subCategory.Name}>{subCategory.Name}</option>
                ))}
              </Form.Select>
            </div>
          )}

          <div>
            {selectedSubCategories.map((slc) => (
              <div className="bg-secondary rounded-pill px-2 py-1 text-white shadow-sm me-2 my-1 d-inline-block">
                {slc}{" "}
                <FontAwesomeIcon
                  onClick={() => handleSubCategoryClose(slc)}
                  className="ms-1 cursor-pointer"
                  size="lg"
                  icon={faXmark}
                />
              </div>
            ))}
          </div>
        </Form.Label>

        {/* select location */}
        {/* <LocationForm /> */}
        {/* <LocationFormTest /> */}
        <LocationFormTest2 />
        {/* <LocationForm2 /> */}

        {/* addImage */}
        <AddImages />
        {/* contact details */}
        <ContactDetails />
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default PostForm;
