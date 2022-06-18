import React from 'react';

const AdDetailsLoader = () => {
  return (
    <section className="my-md-3 bg-light">
      <div
        className="container mx-auto bg-white rounded-3 shadow-sm p-3 overflow-hidden placeholder-glow"
        style={{ maxWidth: '1200px' }}
      >
        <h3 className="placeholder col-3"> </h3>
        <div className="row">
          <div className="col-md-8">
            <div className="placeholder-glow">
              <span
                className="placeholder col-12"
                style={{ height: '280px' }}
              ></span>
            </div>
            <div className="col-md-8 my-3">
              <h5 className="placeholder-glow">
                <span className="placeholder col-6"></span>
              </h5>
              <p className="placeholder-glow">
                <span className="placeholder col-12"></span>
                <span className="placeholder col-8"></span>
                <span className="placeholder col-9"></span>
                <span className="placeholder col-6"></span>
                <span className="placeholder col-8"></span>
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="mb-4">
              <h5 className="card-title placeholder-glow">
                <span className="placeholder col-6"></span>
              </h5>
              <p className="card-text placeholder-glow">
                <span className="placeholder col-7"></span>
                <span className="placeholder col-4"></span>
                <span className="placeholder col-4"></span>
                <span className="placeholder col-6"></span>
                <span className="placeholder col-8"></span>
              </p>
            </div>
            <div className="mb-3">
              <h5 className="card-title placeholder-glow">
                <span className="placeholder col-6"></span>
              </h5>
              <p className="card-text placeholder-glow">
                <span className="placeholder col-7"></span>
                <span className="placeholder col-4"></span>
                <span className="placeholder col-4"></span>
                <span className="placeholder col-6"></span>
                <span className="placeholder col-8"></span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdDetailsLoader;
