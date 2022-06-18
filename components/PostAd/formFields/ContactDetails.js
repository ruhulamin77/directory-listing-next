import React, { useState } from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

const ContactDetails = ({ setData }) => {
  const { user } = useSelector((state) => state.auth);
  const [contactDetails, setContactDetails] = useState({
    name: '',
    email: '',
    phone: '',
  });

  useEffect(() => {
    setData('contactDetails', contactDetails);
  }, [contactDetails]);

  useEffect(() => {
    if (user) {
      setContactDetails({
        name: user.name,
        email: user.email,
        phone: user.phone || '',
      });
    }
  }, [user]);

  return (
    <div className="mt-3">
      <h5>Contact Details</h5>
      <div className="form-floating mb-3">
        <input
          type="text"
          className="form-control is-valid"
          id="name"
          name="name"
          defaultValue={contactDetails.name}
          readOnly
          required
          placeholder="Name"
        />
        <label htmlFor="name">
          Full Name<span className="text-danger">*</span>
        </label>
      </div>
      <div className="form-floating mb-3">
        <input
          type="email"
          className="form-control is-valid"
          id="email"
          name="email"
          required
          readOnly
          defaultValue={contactDetails.email}
          placeholder="Email"
        />
        <label htmlFor="email">
          Email address<span className="text-danger">*</span>
        </label>
      </div>
      <div className="form-floating mb-3">
        <input
          type="text"
          className={`form-control ${
            contactDetails.phone.length > 0
              ? 'is-valid'
              : contactDetails.phone === ''
              ? ''
              : 'is-invalid'
          }`}
          id="phone"
          name="phone"
          value={contactDetails.phone}
          onChange={(e) =>
            setContactDetails({ ...contactDetails, phone: e.target.value })
          }
          placeholder="Phone"
        />
        <label htmlFor="phone">
          Phone Number <span className="text-muted">(optional)</span>
        </label>
      </div>
    </div>
  );
};

export default ContactDetails;
