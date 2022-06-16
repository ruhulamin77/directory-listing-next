import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faPlus } from "@fortawesome/free-solid-svg-icons";
import { Button, Form, FormControl, InputGroup } from "react-bootstrap";
import DashboardNav from "../DashboardNav/DashboardNav";



import AddLocationModal from "./AddLocationModal";
import EditLocation from "./EditLocation";
const ManageLocations = () => {
  const [locations, setLocations] = useState([
    {
      _id: 634163136854,
      countryName: "Bangladesh",
      states: [
        { Name: "Dhaka", _id: 64564464556 },
        { Name: "Ctg", _id: 216344444645313 },
        { Name: "Rangpur", _id: 21634644445313 },
        { Name: "Mymensing", _id: 21634554645313 },
      ],
    },
    {
      _id: 634163135466854,
      countryName: "India",
      states: [
        { Name: "Delhi", _id: 645645454456 },
        { Name: "Kalkata", _id: 2165454344645313 },
        { Name: "Asham", _id: 216545346454313 },
      ],
    },
    {
      _id: 6341645663136854,
      countryName: "USA",
      states: [
        { Name: "New York", _id: 64564464556 },
        { Name: "Wasington DC", _id: 216344444645313 },
       
      ],
    },
    {
      _id: 63416313681154,
      countryName: "Uk",
      states: [
        { Name: "London", _id: 645645454456 },
        { Name: "Cambridge", _id: 2165454344645313 },
        { Name: "Liverpool", _id: 216545346454313 },
      ],
    }

  ]);

  const [country, setCountry] = useState(null);
  const [countryModalOpen, setCountryModalOpen] = useState(false);
  const [statesModal, setStatesModal] = useState(false);
  const [editCountryItem, setEditCountryItem] = useState({});
  const [editCountryModal, setEditCountryModal] = useState(false);

  // handle single country item click event
  const handleItemClick = (_id) => {
    const newCountry = locations.find((c) => c._id === _id);
    setCountry(newCountry);
  };

  const handleEditCountryBtn = (country) => {
    setEditCountryItem(country);
    setEditCountryModal(true);
  };

  return (
    <div>
      <DashboardNav title="Control Locations" />
      <div className="bg-white m-2 rounded-3 p-3 shadow-sm">
        <div className="m-auto w-50">
          <InputGroup className="mb-3">
            <FormControl
              placeholder="Search Locations"
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
              <h6>Select Locations</h6>
              <div>
                <Button onClick={() => setCountryModalOpen(true)} size="sm">
                  Add New
                  <FontAwesomeIcon
                    className="mb-0 ms-1"
                    size="md"
                    icon={faPlus}
                  />
                </Button>
              </div>
            </div>

            {/* add location Modal */}
            <AddLocationModal
              show={countryModalOpen}
              onHide={() => setCountryModalOpen(false)}
            />
            {/* Edit location Modal */}
            <EditLocation
              show={editCountryModal}
              country={editCountryItem}
              onHide={() => setEditCountryModal(false)}
            />

            <ul className="list-group list-group-flush">
              {locations.map((c) => (
                <CountriesListItem
                  key={c._id}
                  activeCategory={country}
                  category={c}
                  handleEditCountryBtn={handleEditCountryBtn}
                  handleItemClick={handleItemClick}
                />
              ))}
            </ul>
          </div>

          {/* show States */}

          {country && (
            <div className="w-50">
              <div className="d-flex justify-content-between mb-2 align-items-center">
                <h6>States</h6>
                <div>
                  <Button onClick={() => setStatesModal(true)} size="sm">
                    Add New{" "}
                    <FontAwesomeIcon className="mb-0" size="md" icon={faPlus} />
                  </Button>
                </div>
              </div>
              {/* Modal Of sub Categories */}
              {/* <AddSubCategoryModal
                category={category.countryName}
                show={statesModal}
                onHide={() => setstatesModal(false)}
              /> */}
              <ul className="list-group list-group-flush">
                {country.states.map((c) => (
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

export default ManageLocations;

// fake data

const CountriesListItem = (props) => {
  const { countryName, _id } = props.category;
  const { handleItemClick, activeCategory,  handleEditCountryBtn } = props;

  return (
    <li
      onClick={() => handleItemClick(_id)}
      className="list-group-item d-flex align-items-center justify-content-between"
    >
      <div className={`${activeCategory?._id === _id && "text-info"}`}>
        {countryName}
      </div>
      <div className="d-flex align-items-center">
        <Button
          onClick={() => handleEditCountryBtn(props.category)}
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
  const { Name, _id } = subCategory;
  return (
    <li
      // onClick={() => setCategoryId(_id)}
      className="list-group-item d-flex align-items-center justify-content-between"
    >
      {Name}
      <div className="d-flex align-items-center">
        <Button variant="warning" size="sm">
          Edit
        </Button>
      </div>
    </li>
  );
};
