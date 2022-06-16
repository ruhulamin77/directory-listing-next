/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const DashboardNav = ({ title }) => {
  return (
    <div
      className="w-100 text-white py-1 px-2 d-flex justify-content-between"
      style={{
        background: '#1d1d1d',
        position: 'sticky',
        top: '0',
        zIndex: '99',
      }}
    >
      <h3>{title}</h3>
      <div className="d-flex ">
        <img
          className="rounded-circle"
          src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          alt="profile image"
          width="40"
          height="40"
        />
        <DropdownButton
          className="ms-3"
          id={'menu'}
          variant={'secondary'}
          title={'Kamal'}
        >
          <Dropdown.Item as={Link} to="/dashboard/home" eventKey="1">
            Dashboard
          </Dropdown.Item>

          <Dropdown.Item as={Link} to="/dashboard/userProfile" eventKey="2">
            Profile
          </Dropdown.Item>
          <Dropdown.Item as={Link} eventKey="3" to="/dashboard/settings" active>
            Setting
          </Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item eventKey="4">Logout</Dropdown.Item>
        </DropdownButton>
      </div>
    </div>
  );
};

export default DashboardNav;
