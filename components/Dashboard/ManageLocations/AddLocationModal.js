import { Modal, Button, FormControl, InputGroup } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

const AddLocationModal = (props) => {
  const [state, setState] = useState('');
  const [city, setCity] = useState('');
  const [allCity, setAllCity] = useState([]);
  const [country, setCountry] = useState('');
  const [allStates, setStates] = useState([]);

  // remove city if multiple states
  useEffect(() => {
    if (allStates.length > 1 && allStates.length === 0) {
      const nope = [];
      setAllCity(nope);
    }
    console.log(allCity);
    console.log(allStates);
  }, [allStates]);
  // handle State
  const handleAddState = () => {
    if (state.trim() !== '') {
      const newState = [...allStates];
      if (newState.indexOf(state.trim()) === -1) {
        newState.push(state.trim());
        setStates(newState);
        setState('');
      }
      if (allStates.length > 1) {
        setAllCity([]);
      } else {
        alert('items already exist');
      }
    }
  };

  // handle Add City
  const handleAddCity = () => {
    if (city.trim() !== '') {
      const newCity = [...allCity];
      if (newCity.indexOf(city.trim()) === -1) {
        newCity.push(city.trim());
        setAllCity(newCity);
        setCity('');
      } else {
        alert('items already exist');
      }
    }
  };

  // handle state Close
  const handleClose = (stateName) => {
    const existStates = [...allStates];
    const newStates = existStates.filter((c) => c !== stateName);
    setStates(newStates);
  };

  // handle city Close
  const handleCityClose = (cityName) => {
    const existCities = [...allCity];
    const newCities = existCities.filter((c) => c !== cityName);
    //   console.log(existCities,newCities);
    setAllCity(newCities);
  };

  return (
    <Modal
      {...props}
      size="md"
      className="shadow-lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Add New Location
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <label htmlhtmlFor="locationName" className="mb-2">
          Country
        </label>
        <FormControl
          id="locationName"
          placeholder="Enter New Country Name"
          aria-label="locationName"
          aria-describedby="basic-addon2"
          className="mb-3"
          value={country}
          onChange={(e) => setCountry(e.target.value.trim())}
        />
        {/* add state name */}
        <label htmlhtmlFor="" className="mb-2">
          State
        </label>
        <InputGroup className="mb-3">
          <FormControl
            value={state}
            placeholder="Enter New State Name"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
            onChange={(e) => setState(e.target.value)}
          />
          <Button onClick={handleAddState} variant="primary">
            Add
          </Button>
        </InputGroup>

        {/* show sub all states */}
        <div className="">
          {allStates &&
            allStates.map((c) => (
              <div className="bg-secondary rounded-pill px-2 py-1 text-white shadow-sm me-2 my-1 d-inline-block">
                {c}{' '}
                <FontAwesomeIcon
                  onClick={() => handleClose(c)}
                  className="ms-1 cursor-pointer"
                  size="lg"
                  icon={faXmark}
                />
              </div>
            ))}
        </div>
        {/* cities of single state */}

        <div>
          {allStates && allStates.length === 1 && (
            <div>
              <label htmlhtmlFor="" className="mb-2">
                Cities of {allStates.map((i) => i)}
              </label>
              <InputGroup className="mb-3">
                <FormControl
                  value={city}
                  placeholder="Enter New City Name"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                  onChange={(e) => setCity(e.target.value)}
                />
                <Button onClick={handleAddCity} variant="primary">
                  Add
                </Button>
              </InputGroup>
              {/* show cities */}
              <div className="">
                {allCity &&
                  allCity.map((c) => (
                    <div className="bg-secondary rounded-pill px-2 py-1 text-white shadow-sm me-2 my-1 d-inline-block">
                      {c}{' '}
                      <FontAwesomeIcon
                        onClick={() => handleCityClose(c)}
                        className="ms-1 cursor-pointer"
                        size="lg"
                        icon={faXmark}
                      />
                    </div>
                  ))}
              </div>
            </div>
          )}
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button
          onClick={() => {
            props.onHide();
            setStates([]);
            setState('');
            setCountry('');
            setAllCity([]);
            setCity('');
          }}
          className="btn-danger"
        >
          Cancel
        </Button>
        <Button>Save</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddLocationModal;
