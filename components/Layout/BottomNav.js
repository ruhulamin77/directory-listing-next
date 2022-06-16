import Link from 'next/link';
import React from 'react';
import {
  BsBell,
  BsChatLeft,
  BsFolder2Open,
  BsHouse,
  BsPerson,
} from 'react-icons/bs';

const BottomNav = () => {
  return (
    <nav className="navbar navbar-light bg-light fixed-bottom border-top d-md-none">
      <div className="navbar-nav d-flex flex-row justify-content-around container-fluid">
        <Link
          className="nav-link d-flex flex-column align-items-center"
          href="/"
        >
         <a> <BsHouse className="fs-3" />
          <span className="d-none d-sm-block">Home</span></a>
        </Link>
        <Link
          href="/ads"
          className="nav-link d-flex flex-column align-items-center"
        >
          <a><BsFolder2Open className="fs-3" />
          <span className="d-none d-sm-block">Ads</span></a>
        </Link>
        <Link
          href="/"
          className="nav-link d-flex flex-column align-items-center"
        >
          <a>
            <BsBell className="fs-3" />
            <span className="d-none d-sm-block">Notification</span>
          </a>
        </Link>
        <a
          className="nav-link d-flex flex-column align-items-center"
          href="#account-sidebar"
          data-bs-toggle="offcanvas"
          role="button"
          aria-controls="account-sidebar"
        >
          <BsPerson className="fs-3" />
          <span className="d-none d-sm-block">Account</span>
        </a>
      </div>
    </nav>
  );
};

export default BottomNav;
