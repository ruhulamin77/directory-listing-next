import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import {
  createNewSettings,
  getAllSettings,
  updateSetting,
} from '../../../store/actions/settingActions';
import { useDispatch, useSelector } from 'react-redux';

const UpdateLogo = () => {
  const [image, setImage] = useState([]);
  const [formData, setFormData] = useState({
    logo: '',
  });

  const dispatch = useDispatch();
  const { settings } = useSelector((state) => state.settings);

  useEffect(() => {
    dispatch(getAllSettings());
  }, []);

  console.log('formData', formData);
  const { logo } = formData;

  const handleImageChange = (files) => {
    setImage([...files]);
    // console.log(files);
  };

  const updateLogo = (e) => {
    e.preventDefault();
    setFormData({
      ...formData,
      logo: image,
    });

    const data = new FormData();
    data.append('name', formData.name);
    data.append('logo', formData.logo);
    if (formData?.logo?.length > 0) {
      formData?.logo?.forEach((logo) => {
        data.append('logo', logo);
      });
    }
    console.log('data', data);
    if (data) {
      dispatch(createNewSettings(data));
      dispatch(updateSetting(settings._id, data));
    }
  };

  return (
    <div className="text-center update_logo   p-4">
      <h4>Update Logo</h4>

      {/* show images preview */}
      <div className="mt-3 w-100 d-inline-block">
        {image &&
          image.map((image, i) => (
            <div key={i} className="position-relative d-inline-block me-3">
              <Image
                className="rounded-3 single-img shadow"
                src={URL.createObjectURL(image)}
                alt=""
                height="150"
                width="150"
              />
            </div>
          ))}
      </div>
      <div className="input-group mt-4">
        <form encType="multipart/form-data" onSubmit={updateLogo}>
          <input
            onChange={(e) => handleImageChange(e.target.files)}
            className="form-control "
            id="ad-images"
            type="file"
            accept="image/*"
            name="logo"
          />
          <Button
            variant="warning"
            className="btn btn-outline-secondary"
            type="submit"
            id="inputGroupFileAddon04"
          >
            Update
          </Button>
        </form>
      </div>
    </div>
  );
};

export default UpdateLogo;
