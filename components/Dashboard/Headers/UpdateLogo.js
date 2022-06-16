import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

const UpdateLogo = () => {
  const [images, setImages] = useState([]);

  const handleImageChange = (files) => {
    setImages([...files]);
    // console.log(files);
  };

  const updateLogo = () => {};
  return (
    <div className="text-center update_logo bg-dark text-white p-4">
      <h4 className="pb-3">Update Logo</h4>

      <div className="input-group">
        <input
          onChange={(e) => handleImageChange(e.target.files)}
          className="form-control"
          id="ad-images"
          type="file"
          accept="image/*"
          multiple="false"
          max={5}
        />
        <Button
          onClick={updateLogo}
          variant="warning"
          className="btn btn-outline-secondary"
          type="submit"
          id="inputGroupFileAddon04"
        >
          Update
        </Button>
      </div>

      {/* show images preview */}
      <div className="mt-4 w-100 d-inline-block">
        {images &&
          images.map((image) => (
            <div className="position-relative d-inline-block me-3">
              <img
                className="rounded-3 single-img  mb-2 shadow"
                style={{ width: '100px', height: '80px', objectFit: 'cover' }}
                src={URL.createObjectURL(image)}
                alt=""
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default UpdateLogo;
