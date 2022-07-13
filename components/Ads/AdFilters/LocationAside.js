import React, { useEffect, useState } from 'react';
import { BsChevronDown } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { getLocations } from '../../../store/actions/locationActions';

const LocationAside = ({ setLocation, location, setData }) => {
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
        setData={setData}
      />
      <StateAside
        locations={locations}
        location={location}
        setLocation={setLocation}
        setData={setData}
      />
    </>
  );
};

const CountryAside = ({ locations, setLocation, setData }) => {
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
                name="country"
                // onClick={() => setLocation({ country: 'all' })}
                onClick={(e) => setData(e.target.name, 'all')}
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
                    name="country"
                    className="ps-4 btn list-group-item-action d-inline-flex align-items-center rounded gap-2 shadow-none"
                    type="button"
                    // onClick={() => setLocation({ country: country.name })}
                    onClick={(e) => setData(e.target.name, country.name)}
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

const StateAside = ({ locations, setLocation, setData }) => {
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
                name="state"
                // onClick={() => setLocation({ state: 'all' })}
                onClick={(e) => setData("state", 'all')}
              >
                All States
              </button>
              {searchedStates.map((state, index) => (
                <button
                  key={index}
                  className="ps-4 btn list-group-item-action d-inline-flex align-items-center rounded gap-1 shadow-none"
                  type="button"
                  name="state"
                  // onClick={() => setLocation({ state: state.name })}
                  onClick={(e) => setData("state", state.name)}
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
