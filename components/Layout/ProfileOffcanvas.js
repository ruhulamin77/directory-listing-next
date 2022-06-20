import React from "react";
import {
  BsBookmarkStar,
  BsBoxArrowRight,
  BsChevronRight,
  BsCoin,
  BsFolder2Open,
  BsPerson,
} from "react-icons/bs";
import { useDispatch } from "react-redux";
import Link from "next/link";
import { toast } from "react-toastify";
import Image from "next/image";
// import { logout } from '../../store/actions/userActions';

const profileLinks = [
  {
    name: "Basic Info",
    link: "/user/dashboard",
    icon: <BsPerson className="me-3 fs-4" />,
  },
  {
    name: "Buy Credits",
    link: "/user/dashboard/buy-credits",
    icon: <BsCoin className="me-3 fs-4" />,
  },

  {
    name: "Manage Ads",
    link: "/user/dashboard/manage-ads",
    icon: <BsFolder2Open className="me-3 fs-4" />,
  },
  {
    name: "Verify Badge",
    link: "/user/dashboard/verify-badge",
    icon: <BsBookmarkStar className="me-3 fs-4" />,
  },
];

const ProfileOffcanvas = () => {
  // const dispatch = useDispatch();
  // const { user } = useSelector((state) => state.auth);
  return (
    <div
      className="offcanvas offcanvas-end"
      tabIndex="-1"
      data-bs-backdrop="true"
      id="account-sidebar"
      aria-labelledby="account-sidebar-label"
      style={{ zIndex: 1051 }}
    >
      <div className="offcanvas-header ">
        {/* <!-- user logged in --> */}
        {/* {user ? ( */}
        <div className="container-fluid d-flex gap-3 align-items-center">
          <Image
            src="https://www.kindpng.com/picc/m/130-1300217_user-icon-member-icon-png-transparent-png.png"
            alt=""
            className="rounded-circle border border-5"
            height="60px"
            width="60px"
          />
          <div>
            <h5>Ruhul Amin</h5>
            {/* <h5>{user.name}</h5> */}
            <Link href="/user/profile">Manage account</Link>
          </div>
        </div>
        {/* ) : ( */}

        {/* )} */}

        <button
          type="button"
          className="btn-close ms-3 me-2 shadow-none"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div>
      <div className="container mb-3 d-grid col-10 flex-fill">
        <Link href="/user/login" type="button">
          <a className="btn btn-outline-danger shadow-none">Log In</a>
        </Link>
      </div>
      <hr className="m-0" />
      <div className="h-100 overflow-auto mt-3">
        <ul className="list-group">
          {profileLinks.map((link) => (
            <li
              key={link.name}
              // className={`list-group-item list-group-item-action border-0 ${
              //   !user ? 'd-none' : ''
              // }`}
              className="list-group-item list-group-item-action border-0"
            >
              <Link href={link.link}>
                <a className="nav-link text-secondary d-flex justify-content-between align-items-center">
                  <span>
                    {link.icon}
                    {link.name}
                  </span>
                  <span>
                    <BsChevronRight />
                  </span>
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      {/* {user && ( */}
      <div
        onClick={() => {
          // dispatch(logout());
          toast("Logout Successfully", { type: "success" });
        }}
        className="list-group-item list-group-item-action border-0"
      >
        <button className="btn btn-outline-danger my-3 py-2 w-100 d-flex justify-content-between align-items-center">
          <span>
            <BsBoxArrowRight className="me-2" />
            Logout
          </span>
          <span>
            <BsChevronRight />
          </span>
        </button>
      </div>
      {/* // )} */}
    </div>
  );
};

export default ProfileOffcanvas;
