import Link from "next/link";
import React from "react";

import { FaHome } from "react-icons/fa";
import { useRouter } from "next/router";

export default function ProfileHeader() {
  const router = useRouter();

  const userNavs = [
    {
      name: "Home",
      link: "/user/dashboard",
      icon: <FaHome className="fs-4" />,
    },
    {
      name: "Buy Credits",
      link: "/user/dashboard/buy-credits",
    },
    {
      name: "Manage Ads",
      link: "/user/dashboard/manage-ads",
    },
    {
      name: "Get Verified Badge",
      link: "/user/dashboard/verify-badge",
    },
  ];

  return (
    <div className="container my-3">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded-3 border-bottom border-danger">
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <button className="btn btn-danger d-lg-none">Buy Credits</button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav mt-3 mt-lg-0">
              {userNavs.map((nav, index) => (
                <Link key={index} href={nav.link}>
                  <a
                    className={
                      router.pathname == nav.link
                        ? "nav-link active ms-3"
                        : "nav-link ms-3"
                    }
                  >
                    {nav.icon || nav.name}
                  </a>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
