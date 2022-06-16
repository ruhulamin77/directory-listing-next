import React, { useEffect, useState } from 'react';
import { BsXCircle } from 'react-icons/bs';
import { Form, Button, Row, Col, Spinner } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { createNewLocation } from '../../../store/actions/locationActions';

const ManageLocationForm = ({ updateData }) => {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.locations);
  const [locationsData, setLocationsData] = useState([]);
  const [states, setStates] = useState([
    {
      name: '',
      city: [],
    },
  ]);
  const [formData, setFormData] = useState({
    name: '',
    state: states,
  });

  useEffect(() => {
    fetch('/locations.json')
      .then((res) => res.json())
      .then((data) => setLocationsData(data));

    if (error) {
      alert(error);
    }
  }, [error]);

  const reset = (confirmation) => {
    if (confirmation) {
      const confirm = window.confirm(
        'Are you sure? All the selections will be lost.'
      );

      if (confirm) {
        setStates([
          {
            name: '',
            city: [],
          },
        ]);
        setFormData({
          name: '',
          state: states,
        });
      } else {
        return;
      }
    } else {
      setStates([
        {
          name: '',
          city: [],
        },
      ]);
      setFormData({
        name: '',
        state: states,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    formData.state = states;
    console.log(formData);
    dispatch(createNewLocation(formData));
    reset(false);
    updateData();
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
                  {st.name} -{' '}
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
        <div className="d-flex justify-content-between align-items-center">
          <Form.Label>Select Location</Form.Label>
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
            <Form.Select
              className="mb-3"
              type="text"
              placeholder="Country"
              required
              value={formData.name}
              onChange={(e) => {
                if (formData.name !== '') {
                  reset();
                }
                setFormData({ ...formData, name: e.target.value });
              }}
            >
              <option value="">Select country</option>
              {locationsData.map(({ country }) => (
                <option key={country} value={country}>
                  {country}
                </option>
              ))}
            </Form.Select>
          </Col>
          {states.map((state, index) => (
            <Row key={index}>
              {index > 0 && (
                <div className="d-flex align-items-end">
                  <h6>{index + 1} - State & City</h6>
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
                </div>
              )}

              <Col md="6">
                <Form.Select
                  className="mb-3"
                  type="text"
                  placeholder="State"
                  disabled={formData.name === ''}
                  value={states[index].name}
                  required
                  onChange={(e) => {
                    if (states[index].name !== '') {
                      setStates((states[index].city = []));
                    }
                    setStates(
                      states.map((state, i) =>
                        i === index ? { ...state, name: e.target.value } : state
                      )
                    );
                  }}
                >
                  <option value="">Select state</option>
                  {locationsData &&
                    locationsData
                      .filter(({ country }) => country === formData.name)[0]
                      ?.states.map((st, index) => (
                        <option
                          disabled={
                            states.filter((state) => state.name === st.state)
                              .length > 0
                          }
                          className={
                            states.filter((state) => state.name === st.state)
                              .length > 0
                              ? 'text-white bg-secondary'
                              : ''
                          }
                          key={index}
                          value={st.state}
                        >
                          {st.state}
                        </option>
                      ))}
                </Form.Select>
              </Col>
              <Col md="6">
                <Form.Select
                  className="mb-3"
                  type="text"
                  placeholder="City"
                  disabled={states[index].name === ''}
                  value={states[index].city[-1]}
                  onChange={(e) =>
                    setStates(
                      states.map((state, i) =>
                        i === index
                          ? {
                              ...state,
                              city: [
                                ...state.city,
                                state.city.includes(e.target.value)
                                  ? alert('City already added')
                                  : e.target.value,
                              ],
                            }
                          : state
                      )
                    )
                  }
                >
                  <option value="">Select city</option>
                  {locationsData &&
                    locationsData
                      .filter(({ country }) => country === formData.name)[0]
                      ?.states.filter(
                        ({ state }) => state === states[index].name
                      )[0]
                      ?.cities.map((c, index) => (
                        <option
                          disabled={state.city.includes(c)}
                          className={
                            state.city.includes(c)
                              ? 'bg-secondary text-white'
                              : ''
                          }
                          key={index}
                          value={c}
                        >
                          {c}
                        </option>
                      ))}
                </Form.Select>
              </Col>
            </Row>
          ))}
        </Row>
      </Form.Group>

      {states[0].name && (
        <Button
          type="button"
          onClick={() => {
            setStates([...states, { name: '', city: [] }]);
          }}
          variant="link"
          className="mr-2 mb-3 ms-auto d-flex"
        >
          + Add More States
        </Button>
      )}
      {/* Submit button */}
      <Button
        type="submit"
        variant="primary"
        className="shadow-none w-100"
        disabled={!formData.name}
      >
        {loading ? <Spinner animation="border" size="sm" /> : 'Submit'}
      </Button>
    </Form>
  );
};

export default ManageLocationForm;
