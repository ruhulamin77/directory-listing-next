import React from 'react';
import {
  BsBookmarkStar,
  BsBoxArrowRight,
  BsChevronRight,
  BsCoin,
  BsFolder2Open,
  BsPerson,
} from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import Link from 'next/link';
import { toast } from 'react-toastify';
// import { logout } from '../../store/actions/userActions';

const profileLinks = [
  {
    name: 'Basic Info',
    link: '/profile/basic-info',
    icon: <BsPerson className="me-3 fs-4" />,
  },
  {
    name: 'Buy Credits',
    link: '/profile/buy-credits',
    icon: <BsCoin className="me-3 fs-4" />,
  },
  {
    name: 'Verify Badge',
    link: '/profile/verify-badge',
    icon: <BsBookmarkStar className="me-3 fs-4" />,
  },
  {
    name: 'Manage Ads',
    link: '/profile/manage-ads',
    icon: <BsFolder2Open className="me-3 fs-4" />,
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
      <div className="offcanvas-header">
        {/* <!-- user logged in --> */}
        {/* {user ? ( */}
        {/* <div className="container-fluid d-flex gap-3 align-items-center">
          <img
            src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw0QDw4PDw0NDw8QDg0PDw0QDQ8NDg0PFREWFhURFRMYHSggGBolGxUVITEhJSkrLi4uFx8zODMsNygtLisBCgoKBQUFDgUFDisZExkrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIAN8A4gMBIgACEQEDEQH/xAAaAAEAAwEBAQAAAAAAAAAAAAAAAwQFAQIH/8QAMxABAAECAgcFBwQDAAAAAAAAAAECEQMEBSExQVFhcRIygbHBIjNCgpGh0RRSYvFy4fD/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8A+4gAAAAAAAAADlVURrmYiFTEz9EbImr7QC4MurP17opj7vP63E4/aAawyP1mJ+6PpD1GexOU+ANUUcPSEfFTbnE3WsLFpq7sxPmCQAAAAAAAAAAAAAAAAAAABBmcxFEcZ3Q9Y+LFNMzP9sfErmqZmdsg9YuLVVrqnw3PAAAAAAO01TGuJmJ4xLgDRyucv7NW3dO6VxhNPI5jtRae9G/jALYAAAAAAAAAAAAAAABI5VNomeETIMzSGJers7qfNVdqm8zPGbuAAAAAAAAAPeDidmqKuG3pveAG7Euq2RrvRHLUsgAAAAAAAAAAAAAAIM5VbDq6WTq2f93PWPMGUAAAAAAAAAAAC/oye9HSf++i+zdFz7VXSPVpAAAAAAAAAAAAAAAK2f8Adz4eayizNN6Ko5SDGAAAAAAAAAAABd0ZGurpHq0VHRlOqqefovAAAAAAAAAAAAAAAIsxixTTMzF91uKVT0l3I/yjyBmgAAAAAAAAAAA0dHYsTHZta0X63XWXo3v/ACz5w1AAAAAAAAAAAAAAAFXSFN8OeUxK08YtN6ZjjEgxAmJ9AAAAAAAAAAAFzRke1VPKI+/+mkqaOotTf9038Ny2AAAAAAAAAAAAAAAAClmslEzNUTbVMzFr3mzNb0sXGo7NVUcJm3TcDwAAAAAAAAs5XKduO1M2i8xznZvVpbGWw+zRTHLX12gliIjVDoAAAAAAAAAAAAAAAAAKGksHZXv2Tz4L6rpH3fjAMsAAAAAAAE+Twe1VF9ka5a7N0Z3qukebSAAAAAAAAAAAAAAAAAAAVdI9z5oWlPSc+xHX0BmgAAAAAAAuaM71XT1aTL0dPt/LLUAAAAAAAAAAAAAAAAAAAlQ0nV3Y6yu1VREa5iOs2ZWdxIqr1a4iLXBAAAAAAAACfIzbEp53j6tdg01WmJ4TEtvDxKZjVMT97A9gAAAAAAAAAA4Do8V4lMbZiOsoas7hx8V+kSCyKNWkY3Uz46kOJn652RFPPbINKuuIi8zERzmynjZ+Phi/OdihVMzrmbzz1uA9YuJVVN6pmeW6PB4dAAAAAAAAACJtrjV01AC5g5+YtFUX5xtXsPHoq2THTZLFAbwycHOV0/yjmnp0jxp+kgvirTn8Odt46wlox6KtlVM+IJRy7oAAK2YzdNOrbVw/Kji5vEq32jhCCfWQCQAAAAAAAAAAAAAAAAAAAAAHHQEmHj107Kp6bYXMDPxOqrV/KNjPAbt+gw+1PGfqA5+Q/IAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/2Q=="
            alt=""
            className="rounded-circle border border-5"
            height="60px"
            width="60px"
          />
          <div>
            <h5>Ruhul Amin</h5>
            <h5>{user.name}</h5>
            <Link href="/profile">Manage account</Link>
          </div>
        </div> */}
        {/* ) : ( */}
        <div className="d-grid col-10 flex-fill">
          <Link href="/user/login" type="button">
            <a className="btn btn-outline-primary shadow-none">Log In</a>
          </Link>
        </div>
        {/* )} */}

        <button
          type="button"
          className="btn-close ms-3 me-2 shadow-none"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
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
          toast('Logout Successfully', { type: 'success' });
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
