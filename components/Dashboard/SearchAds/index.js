import React from "react";
import { Button } from "react-bootstrap";
import DashboardNav from "../DashboardNav";
import SingleAd from "../SingleAd";

// import './SearchAds.css';

const SearchAds = () => {
  return (
    <div>
      <DashboardNav title="Search Ads" />
      <div className="search_ads container">
        <h3 className="text-center text-white mb-4">Search Ads</h3>
        <div className="input-group mb-3 search_ads_field">
          <input
            type="text"
            className="form-control"
            placeholder="Search Ads"
            aria-label="Search Ads"
            aria-describedby="button-addon2"
          />
          <Button
            variant="warning"
            className="btn btn-outline-secondary"
            type="button"
            id="button-addon2"
          >
            Search
          </Button>
        </div>
      </div>
      <div className="display_search">{/* <SingleAd /> */}</div>
    </div>
  );
};

export default SearchAds;
