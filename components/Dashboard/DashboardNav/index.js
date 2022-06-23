/* eslint-disable jsx-a11y/img-redundant-alt */
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Anchor, Dropdown } from "react-bootstrap";

const DashboardNav = ({ title }) => {
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
      <div className="d-flex ">
        <Image
          className="rounded-circle"
          src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          alt="profile image"
          width="40"
          height="40"
        />
        <Dropdown>
          <Dropdown.Toggle variant="secondary">Kamal</Dropdown.Toggle>

          <Dropdown.Menu variant="dark">
            <Dropdown.Item>
              <Link href="/admin/dashboard/">
                <a className="d-block text-light">Dashboard</a>
              </Link>{" "}
            </Dropdown.Item>

            <Dropdown.Item>
              <Link href="/admin/dashboard/profile">Profile</Link>
            </Dropdown.Item>
            <Link href="/admin/dashboard/settings">
              <a> Setting </a>
            </Link>
            <Dropdown.Divider />
            <Dropdown.Item active>Logout</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </div>
  );
};

export default DashboardNav;
