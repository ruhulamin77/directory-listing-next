import Link from "next/link";
import React from "react";
import {
  BsBookmarkStar,
  BsBoxArrowRight,
  BsChevronRight,
  BsCoin,
  BsFolder2Open,
  BsPerson,
} from "react-icons/bs";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import { logout } from "../../store/actions/userActions";

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
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const router = useRouter();

  return (
    <div
      className="offcanvas offcanvas-end"
      tabIndex="-1"
      data-bs-backdrop="true"
      id="account-sidebar"
      aria-labelledby="account-sidebar-label"
      style={{ zIndex: 1051 }}
    >
      <div className=" d-flex justify-content-end">
        <button
          type="button"
          className="btn-close  me-3 shadow-none "
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div>
      <div className=" d-flex justify-content-between flex-column h-100">
        {/* <!-- user logged in --> */}
        {user?.email ? (
          <div>
            <div className="container-fluid  d-flex gap-3 align-items-center">
              <img
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
                alt=""
                className="rounded-circle border border-5"
                height="60px"
                width="60px"
              />
              <div>
                <h5>{user?.name}</h5>
                <Link href="/user/profile">Manage account</Link>
              </div>
            </div>
            <hr className="my-3" />
            <div className="h-100 overflow-auto mt-3">
              <ul className="list-group">
                {profileLinks.map((link) => (
                  <li
                    key={link.name}
                    className={`list-group-item list-group-item-action border-0 `}
                  >
                    <Link href={link.link}>
                      <a className="nav-link text-secondary d-flex justify-content-between align-items-center">
                        {" "}
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
          </div>
        ) : (
          <div className="d-flex h-100 justify-content-center align-content-center">
            {" "}
            <div className=" mx-3  flex-fill">
              <Link href="/user/login" type="button">
                <a className="btn w-100 btn-outline-primary btn-shadow-none">
                  Log In
                </a>
              </Link>
              <hr className="my-3" />
            </div>
          </div>
        )}

        {user?.email && (
          <div
            onClick={() => {
              dispatch(logout());
              toast("Logout Successfully", { type: "success" });
              router.push("/");
            }}
            className="d-flex align-items-end  list-group-item list-group-item-action border-0 my-3"
          >
            <button className="btn btn-outline-danger  py-2 w-100 d-flex justify-content-between align-items-center">
              <span>
                <BsBoxArrowRight className="me-2" />
                Logout
              </span>
              <span>
                <BsChevronRight />
              </span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfileOffcanvas;
