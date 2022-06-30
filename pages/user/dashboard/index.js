import React from "react";
import { Layout, ProfileLayout, ProfileHome } from "../../../components";
import { withIronSessionSsr } from "iron-session/next";
import { verify } from "jsonwebtoken";
import { getSession } from "next-auth/react";
import { useSelector } from "react-redux";

export default function UserDashboard() {
  const { user } = useSelector((state) => state.loadedUser);

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

// export async function getServerSideProps(context) {
//   const session = await getSession({ req: context.req });
//   console.log("session: " + session);
//   // if (!session) {
//   //   return {
//   //     redirect: {
//   //       destination: "/user/login",
//   //       parmanent: false,
//   //     },
//   //   };
//   // }

//   return {
//     props: { session },
//   };
// }
