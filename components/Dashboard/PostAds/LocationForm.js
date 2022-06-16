import React, { useEffect, useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';

const LocationForm = () => {
  const [locationsData, setLocationsData] = useState([]);
  const [locations, setLocations] = useState([
    {
      country: '',
      state: '',
      city: '',
    },
  ]);

  console.log(locations);

  useEffect(() => {
    fetch('/locations.json')
      .then((res) => res.json())
      .then((data) => setLocationsData(data));
  }, []);

  return (
    <div>
      {locations.map((location, index) => (
        <Form.Group key={index} className="mb-2">
          <div className="d-flex justify-content-between align-items-center">
            <Form.Label>
              {index === 0 ? 'Select Location' : `Location ${index + 1}`}
            </Form.Label>
            {index > 0 && (
              <Button
                onClick={() =>
                  setLocations(locations.filter((_, i) => i !== index))
                }
                variant="link"
                className="mr-2 shadow-none text-danger ms-auto inline"
              >
                - Remove
              </Button>
            )}
          </div>
          <Row>
            <Col md="12">
              <Form.Select
                className="mb-3"
                type="text"
                list="countries"
                placeholder="Country"
                value={location.country}
                required
                onChange={(e) => {
                  const newLocations = [...locations];
                  newLocations[index].country = e.target.value;
                  setLocations(newLocations);
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
            <Col md="6">
              <Form.Select
                className="mb-3"
                type="text"
                placeholder="State"
                disabled={location.country === ''}
                value={location.state}
                required
                onChange={(e) => {
                  const newLocations = [...locations];
                  newLocations[index].state = e.target.value;
                  setLocations(newLocations);
                }}
              >
                <option value="">Select state</option>
                {locationsData &&
                  locationsData
                    .filter(({ country }) => country === location.country)[0]
                    ?.states.map((state, index) => (
                      <option key={index} value={state.state}>
                        {state.state}
                      </option>
                    ))}
              </Form.Select>
            </Col>
            <Col md="6">
              <Form.Select
                className="mb-3"
                type="text"
                placeholder="City"
                disabled={location.state === ''}
                value={location.city}
                required
                onChange={(e) => {
                  const newLocations = [...locations];
                  newLocations[index].city = e.target.value;
                  setLocations(newLocations);
                }}
              >
                <option value="">Select city</option>
                {locationsData &&
                  locationsData
                    .filter(({ country }) => country === location.country)[0]
                    ?.states.filter(({ state }) => state === location.state)[0]
                    ?.cities.map((city, index) => (
                      <option key={index} value={city}>
                        {city}
                      </option>
                    ))}
              </Form.Select>
            </Col>
          </Row>
        </Form.Group>
      ))}

      <Button
        onClick={() =>
          setLocations([...locations, { country: '', city: '', state: '' }])
        }
        variant="link"
        className="mr-2 mb-3 ms-auto d-flex"
      >
        + Add More Location
      </Button>
    </div>
  );
};

export default LocationForm;
