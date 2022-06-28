import React from 'react';
import { Layout, ProfileLayout, ProfileHome } from '../../../components';
import { withIronSessionSsr } from 'iron-session/next';
var jwt = require('jsonwebtoken');
export default function UserDashboard() {
  // console.log('decode token: ', decode);
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
    // const user = req.session.user;
    const { token } = req.cookies;

    var user = jwt.decode(token);
    if (user.role !== 'user') {
      return {
        redirect: {
          destination: '/user/login',
          permanent: false,
        },
      };
    }
    return {
      props: {
        user,
      },
    };
  },
  {
    cookieName: 'myapp_cookiename',
    password: 'complex_password_at_least_32_characters_long',
    // secure: true should be used in production (HTTPS) but can't be used in development (HTTP)
    cookieOptions: {
      secure: process.env.NODE_ENV === 'production',
    },
  }
);
