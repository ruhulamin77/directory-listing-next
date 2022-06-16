import React, { useEffect, useState } from "react";
import { BsXCircle } from "react-icons/bs";
import {
  Form,
  Button,
  Row,
  Col,
  Spinner,
  FormControl,
  InputGroup,
  FloatingLabel,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  createNewLocation,
  updateLocationData,
} from "../../../store/actions/locationActions";

const ManageLocationForm = ({ updateData, updateLocation }) => {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.locations);

  const { isUpdating, location } = updateLocation;

  const [states, setStates] = useState([
    {
      name: "",
      city: [],
    },
  ]);
  const [formData, setFormData] = useState({
    name: location.name || "",
    state: states,
  });

  useEffect(() => {
    if (isUpdating) {
      setFormData({
        name: location.name,
        state: location.state,
      });

      setStates(location.state);
    }
  }, [isUpdating, location]);

  const reset = (confirmation) => {
    if (confirmation) {
      const confirm = window.confirm(
        "Are you sure? All the selections will be lost."
      );

      if (confirm) {
        setStates([
          {
            name: "",
            city: [],
          },
        ]);
        setFormData({
          name: "",
          state: states,
        });
      } else {
        return;
      }
    } else {
      setStates([
        {
          name: "",
          city: [],
        },
      ]);
      setFormData({
        name: "",
        state: states,
      });
    }
    updateLocation.isUpdating = false;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    formData.state = states;

    if (isUpdating) {
      dispatch(updateLocationData(location._id, formData));
      updateData();
    } else {
      dispatch(createNewLocation(formData));
      updateData();
    }
    reset();
  };

  return (
    <Form onSubmit={handleSubmit}>
      {formData.name && (
        <div className="mb-3">
          <div className="ps-2 d-flex flex-wrap gap-3 align-items-center">
            <h6 className="fs-5 text-uppercase">#{formData.name}</h6>
          </div>
          <ul className="list-group mb-3">
            {states
              .filter((st) => st.name)
              .map((st, index) => (
                <li
                  key={index}
                  className="list-group-item fs-5 d-flex align-items-center gap-2 flex-wrap"
                >
                  {st.name} -{" "}
                  {st.city.filter(Boolean).map((ct, index) => (
                    <div
                      key={index}
                      className="badge rounded-pill border py-1 px-2.5 fw-normal bg-light text-dark d-flex gap-2 align-items-center"
                    >
                      {ct}
                      <button
                        type="button"
                        className="btn p-0 shadow-none"
                        onClick={() => {
                          const newState = states.map((state) => {
                            if (state.name === st.name) {
                              return {
                                ...state,
                                city: state.city.filter((city) => city !== ct),
                              };
                            } else {
                              return state;
                            }
                          });
                          setStates(newState);
                        }}
                      >
                        <BsXCircle className="text-danger mb-1" />
                      </button>
                    </div>
                  ))}
                </li>
              ))}
          </ul>
          <hr />
        </div>
      )}

      <Form.Group className="mb-2">
        <div className="d-flex justify-content-between align-items-end">
          <h6>
            {isUpdating ? "Update Location" : "Add Location"}{" "}
            <span className="text-danger">*</span>
          </h6>
          <Button
            onClick={() => reset()}
            type="button"
            variant="link"
            disabled={!formData.name}
            className="mr-2 shadow-none text-danger ms-auto inline"
          >
            -Reset
          </Button>
        </div>
        <Row>
          <Col md="12">
            <FloatingLabel label="Country" className="mb-3">
              <FormControl
                className="mb-3"
                type="text"
                placeholder="Country"
                required
                value={formData.name}
                onChange={(e) => {
                  // if (formData.name !== '') {
                  //   reset();
                  // }
                  setFormData({ ...formData, name: e.target.value });
                }}
              />
            </FloatingLabel>
          </Col>
          {states.map((_, index) => (
            <StateCityGroup
              key={index}
              index={index}
              states={states}
              setStates={setStates}
              formData={formData}
            />
          ))}
        </Row>
      </Form.Group>

      {states[0].name && (
        <button
          type="button"
          onClick={() => {
            setStates([...states, { name: "", city: [] }]);
          }}
          style={{
            border: "2px solid #a7a7a7",
            borderStyle: "dashed",
          }}
          className="mr-2 mb-3 d-flex align-items-center justify-content-center w-100 btn"
        >
          + Add More States
        </button>
      )}
      {/* Submit button */}
      <Button
        type="submit"
        variant="primary"
        className="shadow-none w-100"
        disabled={!formData.name}
      >
        {loading ? (
          <Spinner animation="border" size="sm" />
        ) : isUpdating ? (
          "Update Location"
        ) : (
          "Add New Location"
        )}
      </Button>
    </Form>
  );
};

const StateCityGroup = ({ index, states, setStates, formData }) => {
  const [cityName, setCityName] = useState("");
  return (
    <React.Fragment>
      <div className="d-flex align-items-end">
        <h6>{index > 0 && `${index + 1} - State & City`}</h6>
        {index > 0 && (
          <Button
            type="button"
            onClick={() => {
              setStates(states.filter((st, i) => i !== index));
            }}
            variant="link"
            className="d-inline-block shadow-none text-danger ms-auto inline"
          >
            -Remove
          </Button>
        )}
      </div>

      <Col md="6">
        <FloatingLabel
          label={formData.name ? `State of ${formData.name}` : `State`}
          className="mb-3"
        >
          <FormControl
            className="mb-3"
            type="text"
            placeholder="State"
            disabled={formData.name === ""}
            value={states[index].name}
            required
            onChange={(e) => {
              // if (states[index].name === '') {
              //   setStates((states[index].city = []));
              // }
              setStates(
                states.map((state, i) =>
                  i === index ? { ...state, name: e.target.value } : state
                )
              );
            }}
          />
        </FloatingLabel>
      </Col>
      <Col md="6">
        <InputGroup className="mb-3 w-100">
          <FloatingLabel
            label={
              states[index].name ? `Cities of ${states[index].name}` : `Cities`
            }
            className="flex-grow-1"
          >
            <FormControl
              placeholder="Cities"
              value={cityName}
              disabled={states[index].name === ""}
              onChange={(e) => {
                setCityName(e.target.value);
              }}
            />
          </FloatingLabel>
          <Button
            disabled={states[index].name === ""}
            onClick={() => {
              setStates(
                states.map((state, i) =>
                  i === index
                    ? {
                        ...state,
                        city: [
                          ...state.city,
                          state.city.includes(cityName)
                            ? alert("City already added")
                            : cityName.trim(),
                        ],
                      }
                    : state
                )
              );
              setCityName("");
            }}
            variant="primary"
            id="button-addon2"
          >
            + Add
          </Button>
        </InputGroup>
      </Col>
    </React.Fragment>
  );
};

export default ManageLocationForm;
