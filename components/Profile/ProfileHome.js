import Link from "next/link";
import React from "react";
import {
  BsCreditCard,
  BsThreeDotsVertical,
  BsFolder2Open,
} from "react-icons/bs";

const ProfileHome = () => {
  return (
    <div className="container flex-grow-1 container-p-y">
      <div className="row my-4">
        <div className="col-lg-6 mb-4 order-0">
          <div className="card">
            <div className="d-flex align-items-center row">
              <div className="col-sm-7">
                <div className="card-body">
                  <h5 className="card-title text-primary">
                    Welcome Tanveer! 🎉
                  </h5>
                  <p className="mb-4">
                    You have credits of <span className="fw-bold">$20</span>.
                    Please get the verified badge and get started.
                  </p>

                  <Link href={"/user/dashboard/verify-badge"}>
                    <a className="btn btn-sm btn-outline-primary">
                      {" "}
                      Get Verified Badge
                    </a>
                  </Link>
                </div>
              </div>
              <div className="col-sm-5 text-center text-sm-left">
                <div className="card-body pb-0 px-0 px-md-4">
                  <img
                    src="https://cdn.pixabay.com/photo/2017/05/09/13/33/laptop-2298286__480.png"
                    className="img-fluid"
                    alt="View Badge User"
                    data-app-dark-img="illustrations/man-with-laptop-dark.png"
                    data-app-light-img="illustrations/man-with-laptop-light.png"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 order-1">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-6 mb-4">
              <div className="card">
                <div className="card-body">
                  <div className="card-title d-flex align-items-start justify-content-between">
                    <div className="avatar flex-shrink-0">
                      <BsFolder2Open className="fs-3" />
                    </div>
                    <div className="dropdown">
                      <button
                        className="btn p-0"
                        type="button"
                        id="cardOpt3"
                        data-bs-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <BsThreeDotsVertical />
                      </button>
                      <div
                        className="dropdown-menu dropdown-menu-end"
                        aria-labelledby="cardOpt3"
                      >
                        <Link href={"/post-ad"} className="dropdown-item">
                          Post Ad
                        </Link>
                        <Link
                          href={"/profile/manage-ads"}
                          className="dropdown-item"
                        >
                          Manage Ad
                        </Link>
                      </div>
                    </div>
                  </div>
                  <span className="fw-semibold d-block mb-1">Ads</span>
                  <h3 className="card-title mb-2">00</h3>
                  {/* <small className="text-success fw-semibold">
                    Ads that you have posted
                  </small> */}
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-6 mb-4">
              <div className="card">
                <div className="card-body">
                  <div className="card-title d-flex align-items-start justify-content-between">
                    <div className="flex-shrink-0">
                      <BsCreditCard className="fs-3" />
                    </div>
                    <div className="dropdown">
                      <button
                        className="btn p-0"
                        type="button"
                        id="cardOpt6"
                        data-bs-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <BsThreeDotsVertical />
                      </button>
                      <div
                        className="dropdown-menu dropdown-menu-end"
                        aria-labelledby="cardOpt6"
                      >
                        <Link href={"/profile/buy-credits"}>
                          <a className="dropdown-item">Buy credits</a>
                        </Link>
                        <Link href={"/post-ad"}>
                          <a className="dropdown-item">Post Ad</a>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <span>Credits</span>
                  <h3 className="card-title text-nowrap mb-2">$4,679</h3>
                  {/* <small className="text-success fw-semibold">
                    <i className="bx bx-up-arrow-alt"></i> +28.42%
                  </small> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileHome;
