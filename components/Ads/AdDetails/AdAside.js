import React from 'react';
import {
  BsEnvelope,
  BsMap,
  BsPerson,
  BsPersonBoundingBox,
  BsPhone,
} from 'react-icons/bs';

const AdAside = ({ post }) => {
  return (
    <>
      {/* seller */}
      <h6 className="fs-5 text-capitalize d-flex align-items-center gap-2">
        <BsPersonBoundingBox className="text-danger" /> Seller
      </h6>
      <ul className="list-group">
        <li className="list-group-item">
          <span className="d-inline-flex gap-1 align-items-center">
            <BsPerson />
            Name,
          </span>
          <br />
          <span
            className={`fs-6 fst-italic block ${
              post.contactDetails?.user.name ? 'text-muted' : 'text-danger'
            }`}
          >
            {post.contactDetails?.user.name}
          </span>
        </li>
        <li className="list-group-item">
          <span className="d-inline-flex gap-1 align-items-center">
            <BsEnvelope />
            Email,
          </span>
          <br />
          <span
            className={`fs-6 fst-italic block ${
              post.contactDetails?.user.email ? 'text-muted' : 'text-danger'
            }`}
          >
            {post.contactDetails?.user.email}
          </span>
        </li>
        <li className="list-group-item">
          <span className="d-inline-flex gap-1 align-items-center">
            <BsPhone />
            Phone,
          </span>
          <br />
          <span
            className={`fs-6 fst-italic block ${
              post.contactDetails?.phone ? 'text-muted' : 'text-danger'
            }`}
          >
            {post.contactDetails?.phone ? post.contactDetails.phone : 'N/A'}
          </span>
        </li>
      </ul>
      {/* seller */}
      {/* selling locations */}
      {post.locations.length > 0 && (
        <div className="my-4">
          <h6 className="fs-5 text-capitalize d-flex align-items-center gap-2">
            <BsMap className="text-danger" /> Selling Locations
          </h6>
          {post.locations.map((location, index) => (
            <div key={index} className="mb-3">
              <ul className="list-group mb-3">
                <li className="list-group-item bg-light">
                  <span className="fs-6 text-uppercase">
                    {location.country}
                  </span>
                </li>
                {location.states
                  .filter((st) => st.state)
                  .map((st, index) => (
                    <li
                      key={index}
                      className="list-group-item fs-6 d-flex align-items-center gap-2 flex-wrap"
                    >
                      {st.state} -{' '}
                      {st.cities.filter(Boolean).map((ct, index) => (
                        <div
                          key={index}
                          className="badge rounded-pill border py-1 px-2.5 fw-normal bg-light text-dark d-flex gap-2 align-items-center"
                        >
                          {ct}
                        </div>
                      ))}
                    </li>
                  ))}
              </ul>
            </div>
          ))}
        </div>
      )}
      {/* selling locations */}
    </>
  );
};

export default AdAside;
