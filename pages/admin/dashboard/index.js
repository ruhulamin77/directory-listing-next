import React from "react";
import { withIronSessionSsr } from "iron-session/next";
import { verify } from "jsonwebtoken";
import { DashboardHome, DashboardLayout } from "../../../components";

export default function AdminDashboardPage() {
  return (
    <>
      <div>
        <DashboardLayout>
          <DashboardHome />
        </DashboardLayout>
      </div>{" "}
    </>
  );
}

export const getServerSideProps = withIronSessionSsr(
  async function getServerSideProps({ req }) {
    const { token } = req.cookies;
    let user;
    // const user = req.session.user;
    if (token) {
      user = verify(token, process.env.JWT_SECRET);

      if (user?.role !== "admin") {
        return {
          redirect: {
            destination: "/user/login",
            permanent: false,
          },
        };
      }
    } else {
      return {
        redirect: {
          destination: "/user/login",
          permanent: false,
        },
      };
    }

    console.log("User: " + token, user);

    return {
      props: {
        // user: req.session.user,
        user,
      },
    };
  },
  {
    cookieName: "myapp_cookiename",
    password: "complex_password_at_least_32_characters_long",
    // secure: true should be used in production (HTTPS) but can't be used in development (HTTP)
    cookieOptions: {
      secure: process.env.NODE_ENV === "production",
    },
  }
);
