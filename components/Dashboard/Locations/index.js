import React, { useEffect, useState } from 'react';
import { FaTrashAlt, FaChevronDown } from 'react-icons/fa';
import { FiEdit } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import {
  deleteLocation,
  getLocations,
} from '../../../store/actions/locationActions';
import ManageLocationForm from './ManageLocationForm';

const Locations = () => {
  const dispatch = useDispatch();
  const { locations } = useSelector((state) => state.locations);

  const [updateLocation, setUpdateLocation] = useState({
    isUpdating: false,
    location: {},
  });

  const [handler, setHandler] = useState(false);
  const updateData = () => setHandler(!handler);

  useEffect(() => {
    dispatch(getLocations());
  }, [dispatch, handler]);

  const handleDelete = (id) => {
    const confirm = window.confirm(
      'Are you sure you want to delete this location?'
    );

    if (confirm) {
      dispatch(deleteLocation(id));
      updateData();
    } else {
      return;
    }
  };

  return (
    <section className="container">
      {/* Location Form */}
      <div className="mt-3 ps-2 d-flex flex-wrap gap-3 align-items-center">
        <span className="fs-3 fw-normal">Manage Locations</span>
      </div>
      {/* Location Form */}
      <div>
        <div className="accordion-item">
          <div className="accordion-body">
            <ManageLocationForm
              updateLocation={updateLocation}
              updateData={updateData}
            />
          </div>
        </div>
      </div>
      {/* Location List */}
      <div className="accordion accordion-flush my-3" id="locationAccordion">
        <span className="fs-3 fw-normal pt-3">Locations</span>
        {locations &&
          locations
            .map((location, index) => (
              <div key={index} className="accordion-item">
                <div className="accordion-header" id={`heading${index}`}>
                  <div className="py-2 px-2 ps-4 bg-white">
                    <div className="flex-grow-1 d-flex gap-2 flex-wrap align-items-center justify-content-between">
                      <span className="fs-5">
                        {location.name}
                        <span className="badge px-2 py-1 fw-normal bg-danger rounded-pill ms-1">
                          {location.state.length}
                        </span>
                      </span>
                      <div
                        className="btn-group me-2"
                        role="group"
                        aria-label="First group"
                      >
                        <button
                          type="button"
                          className="btn btn-outline-success"
                          onClick={() => {
                            setUpdateLocation({ isUpdating: true, location });
                          }}
                        >
                          <FiEdit className="fs-5" />
                        </button>
                        <button
                          onClick={() => handleDelete(location._id)}
                          type="button"
                          className="btn btn-outline-danger"
                        >
                          <FaTrashAlt className="fs-5" />
                        </button>
                        <button
                          data-bs-toggle="collapse"
                          data-bs-target={`#collapse${index}`}
                          type="button"
                          className="btn btn-outline-primary"
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
                  data-bs-parent="#locationAccordion"
                >
                  <div className="accordion-body">
                    {location.state.map((st, index) => (
                      <ul key={index} className="list-group mb-3">
                        <li className="list-group-item position-relative fs-5">
                          {st.name}
                          <h6 className="badge px-2 py-1 fw-normal bg-primary rounded-pill ms-1">
                            {st.city.length}
                          </h6>
                          <div className="mt-3 d-flex fs-6 gap-2 flex-wrap">
                            {st.city.map((ct, index) => (
                              <span
                                key={index}
                                className="badge rounded-pill border p-2 px-3 fw-bold bg-light text-dark"
                              >
                                {ct}
                              </span>
                            ))}
                          </div>
                        </li>
                      </ul>
                    ))}
                  </div>
                </div>
              </div>
            ))
            .reverse()}
      </div>
    </section>
  );
};

export default Locations;
