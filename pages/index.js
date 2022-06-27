import React from "react";
import { Category, Layout, Location } from "../components";
import { getAllCategories } from "../store/actions/categoryActions";
import { getLocations } from "../store/actions/locationActions";
import { wrapper } from "../store/store";
// import { loadUser } from "../store/actions/userActions";

const HomePage = () => {
  return (
    <Layout title="Home">
      <Location />
      <Category />
    </Layout>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ req }) => {
      await store.dispatch(getAllCategories());
      await store.dispatch(getLocations());

      // const { token } = req.cookies;
      // console.log(token, "token", req);
      // if (token) {
      // await store.dispatch(loadUser(token));
      // }
    }
);

export default HomePage;
