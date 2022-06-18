import React, { useEffect, useState } from 'react';
import { BsChevronDown } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { getLocations } from '../../../store/actions/locationActions';

const LocationAside = ({ setLocation, location }) => {
  const dispatch = useDispatch();
  const { locations } = useSelector((state) => state.locations);

  useEffect(() => {
    dispatch(getLocations());
  }, []);

  return (
    <>
      <CountryAside
        locations={locations}
        location={location}
        setLocation={setLocation}
      />
      <StateAside
        locations={locations}
        location={location}
        setLocation={setLocation}
      />
    </>
  );
};

const CountryAside = ({ locations, setLocation }) => {
  return (
    <ul className="list-unstyled row">
      <li>
        <div className="card border border-danger">
          <div className="form-check p-0 d-flex align-items-center">
            <button
              className="btn text-danger fs-6 d-inline-flex gap-2 align-items-center justify-content-between rounded shadow-none flex-grow-1"
              data-bs-toggle="collapse"
              data-bs-target="#countryCollapse"
              type="button"
            >
              Country
              <BsChevronDown />
            </button>
          </div>
          <div className="collapse" id="countryCollapse">
            <div className="fw-normal pb-1 small">
              <button
                className="ps-4 btn list-group-item-action d-inline-flex align-items-center rounded gap-2 shadow-none"
                type="button"
                onClick={() => setLocation({ country: 'all' })}
              >
                All Countries
              </button>
              {locations
                .sort((a, b) =>
                  a.name.toLowerCase().localeCompare(b.name.toLowerCase())
                )
                .map((country, index) => (
                  <button
                    key={index}
                    className="ps-4 btn list-group-item-action d-inline-flex align-items-center rounded gap-2 shadow-none"
                    type="button"
                    onClick={() => setLocation({ country: country.name })}
                  >
                    {country.name}
                  </button>
                ))}
            </div>
          </div>
        </div>
      </li>
    </ul>
  );
};

const StateAside = ({ locations, setLocation }) => {
  const [states, setStates] = useState([]);
  const [searchedStates, setSearchedStates] = useState([]);

  useEffect(() => {
    const newStates = [];

    locations.forEach((location) => {
      location.state.forEach((state) => {
        newStates.push({
          name: state.name,
          country: location.name,
        });
      });
    });

    setStates(newStates);
    setSearchedStates(newStates);
  }, [locations]);

  return (
    <ul className="list-unstyled row mb-0">
      <li>
        <div className="card border border-danger">
          <div className="form-check p-0 d-flex align-items-center">
            <button
              className="btn text-danger fs-6 d-inline-flex gap-2 align-items-center justify-content-between rounded shadow-none flex-grow-1"
              data-bs-toggle="collapse"
              data-bs-target="#stateCollapse"
              type="button"
            >
              State
              <BsChevronDown />
            </button>
          </div>
          <div className="collapse" id="stateCollapse">
            <div className="fw-normal pb-1 small">
              <div className="px-2">
                <input
                  type="text"
                  className="form-control shadow-none"
                  placeholder="Search"
                  onChange={(e) =>
                    setSearchedStates(
                      states.filter((state) =>
                        state.name
                          .toLowerCase()
                          .includes(e.target.value.toLowerCase())
                      )
                    )
                  }
                />
              </div>
              <button
                className="ps-4 btn list-group-item-action d-inline-flex align-items-center rounded gap-2 shadow-none"
                type="button"
                onClick={() => setLocation({ state: 'all' })}
              >
                All States
              </button>
              {searchedStates.map((state, index) => (
                <button
                  key={index}
                  className="ps-4 btn list-group-item-action d-inline-flex align-items-center rounded gap-1 shadow-none"
                  type="button"
                  onClick={() => setLocation({ state: state.name })}
                >
                  {state.name}
                  <span className="text-muted" style={{ fontSize: '10px' }}>
                    ({state.country})
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </li>
    </ul>
  );
};

export default LocationAside;
