import React from "react";
import { Layout, ProfileLayout, ProfileHome } from "../../../components";
import { withIronSessionSsr } from "iron-session/next";

export default function UserDashboard() {
  return (
    <Layout title="User Profile">
      <ProfileLayout>
        <ProfileHome></ProfileHome>
      </ProfileLayout>
    </Layout>
  );
}

export const getServerSideProps = withIronSessionSsr(
  async function getServerSideProps({ req }) {
    const user = req.session.user;
    console.log("User: " + user);
    // if (user === undefined || user === null) {
    //   return {
    //     redirect: {
    //       destination: "/user/login",
    //       permanent: false,
    //     },
    //     // notFound: true,
    //   };
    // }

    return {
      props: {
        // user: req.session.user,
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
