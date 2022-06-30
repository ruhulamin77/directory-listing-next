import React from "react";
import { Layout, PostAd } from "../components";
import { withIronSessionSsr } from "iron-session/next";
import { verify } from "jsonwebtoken";

export default function postAd() {
  return (
    <Layout title="Post Ad">
      <PostAd />
    </Layout>
  );
}

export const getServerSideProps = withIronSessionSsr(
  async function getServerSideProps({ req }) {
    const { token } = req.cookies;
    let user;
    // const user = req.session.user;
    if (token) {
      user = verify(token, process.env.JWT_SECRET);

      if (user?.role !== "user") {
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
