import React from "react";

const ProfileSetting = () => {
  return (
    <div className="card my-4 container">
      <h5 className="card-header">Profile Details</h5>
      <div className="card-body">
        <div className="d-flex align-items-start align-items-sm-center gap-4">
          <img
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
            alt="user-avatar"
            className="d-block rounded"
            height="100"
            width="100"
            id="uploadedAvatar"
          />
          <div className="button-wrapper">
            <label
              htmlFor="upload"
              className="btn btn-primary me-2 mb-4"
              tabIndex="0"
            >
              <span className="d-none d-sm-block">Upload new photo</span>
              <i className="bx bx-upload d-block d-sm-none"></i>
              <input
                type="file"
                id="upload"
                className="account-file-input"
                hidden
                accept="image/png, image/jpeg"
              />
            </label>
            <button
              type="button"
              className="btn btn-outline-secondary account-image-reset mb-4"
            >
              <i className="bx bx-reset d-block d-sm-none"></i>
              <span className="d-none d-sm-block">Logout</span>
            </button>

            <p className="text-muted mb-0">
              Allowed JPG, GIF or PNG. Max size of 800K
            </p>
          </div>
        </div>
      </div>
      <hr className="my-0" />
      <div className="card-body">
        <form id="formAccountSettings" method="POST" onSubmit="return false">
          <div className="row">
            <div className="mb-3 col-md-6">
              <label htmlFor="firstName" className="form-label">
                First Name
              </label>
              <input
                className="form-control"
                type="text"
                id="firstName"
                name="firstName"
                value="Mostofa"
                autoFocus
              />
            </div>
            <div className="mb-3 col-md-6">
              <label htmlFor="lastName" className="form-label">
                Last Name
              </label>
              <input
                className="form-control"
                type="text"
                name="lastName"
                id="lastName"
                value="Nobi Tanveer"
              />
            </div>
            <div className="mb-3 col-md-6">
              <label htmlFor="email" className="form-label">
                E-mail
              </label>
              <input
                className="form-control"
                type="text"
                id="email"
                name="email"
                value="m.mostofanobi@gmail.com"
                placeholder="john.doe@example.com"
              />
            </div>
            <div className="mb-3 col-md-6">
              <label className="form-label" htmlFor="phoneNumber">
                Phone Number
              </label>
              <div className="input-group input-group-merge">
                <span className="input-group-text">BD (+880)</span>
                <input
                  type="text"
                  id="phoneNumber"
                  name="phoneNumber"
                  className="form-control"
                  placeholder="1XXXXXXXXX"
                />
              </div>
            </div>
            <div className="mb-3 col-md-6">
              <label htmlFor="address" className="form-label">
                Address
              </label>
              <input
                type="text"
                className="form-control"
                id="address"
                name="address"
                placeholder="Address"
              />
            </div>
            <div className="mb-3 col-md-6">
              <label htmlFor="state" className="form-label">
                State
              </label>
              <input
                className="form-control"
                type="text"
                id="state"
                name="state"
                placeholder="Dhaka"
              />
            </div>
            <div className="mb-3 col-md-6">
              <label htmlFor="zipCode" className="form-label">
                Zip Code
              </label>
              <input
                type="text"
                className="form-control"
                id="zipCode"
                name="zipCode"
                placeholder="1720"
                maxLength="6"
              />
            </div>
            <div className="mb-3 col-md-6">
              <label className="form-label" htmlFor="country">
                Country
              </label>
              <select id="country" className="select2 form-select">
                <option value="">Select</option>
                <option value="Australia">Australia</option>
                <option value="Bangladesh">Bangladesh</option>
                <option value="Belarus">Belarus</option>
                <option value="Brazil">Brazil</option>
                <option value="Canada">Canada</option>
                <option value="China">China</option>
                <option value="France">France</option>
                <option value="Germany">Germany</option>
                <option value="India">India</option>
                <option value="Indonesia">Indonesia</option>
                <option value="Israel">Israel</option>
                <option value="Italy">Italy</option>
                <option value="Japan">Japan</option>
                <option value="Korea">Korea, Republic of</option>
                <option value="Mexico">Mexico</option>
                <option value="Philippines">Philippines</option>
                <option value="Russia">Russian Federation</option>
                <option value="South Africa">South Africa</option>
                <option value="Thailand">Thailand</option>
                <option value="Turkey">Turkey</option>
                <option value="Ukraine">Ukraine</option>
                <option value="United Arab Emirates">
                  United Arab Emirates
                </option>
                <option value="United Kingdom">United Kingdom</option>
                <option value="United States">United States</option>
              </select>
            </div>
            <div className="mb-3 col-md-6">
              <label htmlFor="language" className="form-label">
                Language
              </label>
              <select id="language" className="select2 form-select">
                <option value="">Select Language</option>
                <option value="en">English</option>
                <option value="fr">French</option>
                <option value="de">German</option>
                <option value="pt">Portuguese</option>
              </select>
            </div>
            <div className="mb-3 col-md-6">
              <label htmlFor="currency" className="form-label">
                Currency
              </label>
              <select id="currency" className="select2 form-select">
                <option value="">Select Currency</option>
                <option value="usd">USD</option>
                <option value="euro">Euro</option>
                <option value="pound">Pound</option>
                <option value="bitcoin">Bitcoin</option>
              </select>
            </div>
          </div>
          <div className="mt-2">
            <button type="submit" className="btn btn-primary me-2">
              Save changes
            </button>
            <button type="reset" className="btn btn-outline-secondary">
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProfileSetting;
