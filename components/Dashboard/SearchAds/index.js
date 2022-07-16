
import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { getAllPosts } from "../../../store/actions/postActions";
import DashboardNav from "../DashboardNav";
import { useDispatch, useSelector } from 'react-redux';
import SingleAd from "../SingleAd";
import AdCard from "../../Ads/AdCard";
import AdLoader from "../../Ads/AdLoader";

// import './SearchAds.css';

const SearchAds = () => {
  const dispatch=useDispatch()
  const {posts,loading}= useSelector(state=>state.posts)

  const [search,setSearch] = useState({})
  
  useEffect(()=>{
    dispatch(getAllPosts({title: search}))
  },[search])

  const handleSearch=(value)=>{
    
    setSearch(value)
    console.log("search: ", {search: search })
    console.log("posts: ", posts)
  }
  return (
    <div>
      <DashboardNav title="Search Ads" />
      <div className="search_ads container">
        {/* <h3 className="text-center text-dark mb-4">Search Ads</h3> */}
        <div className="input-group my-3 search_ads_field">
          <input
            type="text"
            className="form-control"
            placeholder="Search Ads"
            aria-label="Search Ads"
            aria-describedby="button-addon2"
            onChange={(e)=>handleSearch(e.target.value)}
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
      <div className="display_search">
      {loading
              ? [...Array(10)].map((_, i) => <AdLoader key={i} />)
              : posts.map((post, index) => (
                 <div className="m-5">
                   <AdCard post={post} key={post._id} />
                 </div>
                ))}
      </div>
    </div>
  );
};

export default SearchAds;