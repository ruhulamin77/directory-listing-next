import React from 'react';
import { DashboardHome, DashboardLayout } from '../../../components';
import { withIronSessionSsr } from 'iron-session/next';
var jwt = require('jsonwebtoken');

export default function AdminDashboardPage() {
  return (
    <>
      <div>
        <DashboardLayout>
          <DashboardHome />
        </DashboardLayout>
      </div>{' '}
    </>
  );
}

export const getServerSideProps = withIronSessionSsr(
  async function getServerSideProps({ req }) {
    // const user = req.session.user;
    const { token } = req.cookies;

    var user = jwt.decode(token);
    if (user.role !== 'admin') {
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
