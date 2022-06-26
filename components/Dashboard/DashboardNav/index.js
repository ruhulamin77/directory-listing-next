/* eslint-disable jsx-a11y/img-redundant-alt */
import Cookies from "js-cookie";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useEffect } from "react";
import { Dropdown } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import { loadUser } from "../../../store/actions/userActions";

const DashboardNav = ({ title }) => {
  const dispatch = useDispatch();
  const token = Cookies.get("token");
  useEffect(() => {
    dispatch(loadUser(token));
  }, [token]);

  const { user } = useSelector((state) => state.auth);
  // console.log("dashboard loaded", user);

  return (
    <div
      className="bg-dark w-100 text-white py-1 px-2 d-flex  justify-content-between"
      style={{
        // background: "#1d1d1d",
        position: "sticky",
        top: "0",
        zIndex: "99",
      }}
    >
      <h3>{title}</h3>
      <div className="d-flex gap-3">
        <Image
          className="rounded-circle"
          src={"/user.jpg"}
          alt="profile image"
          width="40"
          height="40"
        />
        <Dropdown>
          <Dropdown.Toggle variant="secondary">{user?.name}</Dropdown.Toggle>

          <Dropdown.Menu variant="dark">
            <Dropdown.Item>
              <Link href="/admin/dashboard/">
                <div className="d-block text-light">Dashboard</div>
              </Link>{" "}
            </Dropdown.Item>
            <Dropdown.Item>
              <Link href="/admin/dashboard/profile">
                <div className="d-block text-light">Profile</div>
              </Link>{" "}
            </Dropdown.Item>
            <Dropdown.Item>
              <Link href="/admin/dashboard/settings">
                <div className="d-block text-light">Setting</div>
              </Link>{" "}
            </Dropdown.Item>

            <Dropdown.Divider />
            <Dropdown.Item active>Logout</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </div>
  );
};

export default DashboardNav;
