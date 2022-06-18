import React from 'react';

const AdInfos = ({ post }) => {
  return (
    <>
      <div className="mt-3 mb-4">
        <h2>
          <span className="text-success">Price: ${post.price}</span>
          <span className="text-muted fs-6 ms-3 fst-italic">
            {post.priceType.toUpperCase()}
          </span>
        </h2>
        <p className="text-muted pt-2">{post.description}</p>
      </div>
      <div className="mb-4">
        <ul className="list-group text-capitalize">
          <li className="list-group-item d-flex justify-content-between align-items-center">
            Price Type
            <span
              className={`fs-6 fst-italic ${
                post.priceType ? 'text-muted' : 'text-danger'
              }`}
            >
              {post.priceType || 'N/A'}
            </span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center">
            Condition
            <span
              className={`fs-6 fst-italic ${
                post.condition ? 'text-muted' : 'text-danger'
              }`}
            >
              {post.condition || 'N/A'}
            </span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center">
            Brand
            <span
              className={`fs-6 fst-italic ${
                post.brand ? 'text-muted' : 'text-danger'
              }`}
            >
              {post.brand || 'N/A'}
            </span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center">
            Model
            <span
              className={`fs-6 fst-italic ${
                post.model ? 'text-muted' : 'text-danger'
              }`}
            >
              {post.model || 'N/A'}
            </span>
          </li>
        </ul>
      </div>
    </>
  );
};

export default AdInfos;
