import React from 'react';
import { Category, Layout, Location } from '../components';
import { getAllCategories } from '../store/actions/categoryActions';
import { wrapper } from '../store/store';
import { loadUser } from '../store/actions/userActions';
import { useSelector } from 'react-redux';
import nookies from 'nookies';

const HomePage = () => {
  const { user } = useSelector((state) => state.auth);
  console.log('user', user);
  return (
    <Layout title="Home">
      <Location />
      <Category />
    </Layout>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (req) => {
    await store.dispatch(getAllCategories());

    // await store.dispatch(loadUser());
  }
);

export default HomePage;
