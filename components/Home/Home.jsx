import React from "react";
import Footer from "../common/Footer";
import Header from "../common/Header";
import Category from "./category/Category";
import Location from "./Location/Location";
import SearchBanner from "./searchBanner/SearchBanner";

const Home = () => {
  return (
    <div>
      <div className="bg-success">
        <Header></Header>
        <SearchBanner></SearchBanner>
      </div>
      <Location />
      <Category></Category>
      <Footer></Footer>
    </div>
  );
};

export default Home;
