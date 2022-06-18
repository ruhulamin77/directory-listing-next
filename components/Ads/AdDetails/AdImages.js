import React from 'react';

const AdImages = ({ post }) => {
  return (
    <>
      {post.images.length === 1 ? (
        post.images.map((item, index) => (
          <div key={index} className="border rounded-3">
            <img
              src={`http://localhost:5000/${item}`}
              className="img-fluid rounded-start"
              style={{
                height: '400px',
                width: '100%',
                objectFit: 'contain',
              }}
              alt={post.title}
            />
          </div>
        ))
      ) : (
        <div
          id="carouselExampleIndicators"
          className="carousel carousel-dark slide"
          data-bs-ride="true"
        >
          <div className="carousel-indicators">
            {post.images.map((image, index) => (
              <button
                key={index}
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to={index}
                className={index === 0 ? 'active' : ''}
                aria-current="true"
                aria-label={`Slide ${index}`}
              ></button>
            ))}
          </div>
          <div className="carousel-inner">
            {post.images.map((item, index) => (
              <div
                key={index}
                className={`carousel-item border rounded-3 ${
                  index === 0 ? 'active' : ''
                }`}
              >
                <img
                  src={`http://localhost:5000/${item}`}
                  className="img-fluid rounded-start"
                  style={{
                    height: '400px',
                    width: '100%',
                    objectFit: 'contain',
                  }}
                  alt={post.title}
                />
              </div>
            ))}
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      )}
    </>
  );
};

export default AdImages;
