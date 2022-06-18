import React from 'react'

const AdLoader = () => {
  return (
    <div className="card mb-3">
      <div className="row g-0">
        <div className="col-md-4 placeholder-glow">
          <span className="placeholder col-12 h-100"></span>
        </div>
        <div className="col-md-8">
          <div className="card-body">
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
  );
}

export default AdLoader