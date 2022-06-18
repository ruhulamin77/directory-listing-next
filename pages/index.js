import React from 'react';
import { Category, Layout, Location } from '../components';
import { getAllCategories } from '../store/actions/categoryActions';
import { wrapper } from '../store/store';
import { useSelector } from 'react-redux';

const HomePage = () => {
  const { categories } = useSelector((state) => state.categories);
  return (
    <Layout title="Home">
      <Location />
      <Category />
    </Layout>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async () => {
    await store.dispatch(getAllCategories());
  }
);

export default HomePage;
