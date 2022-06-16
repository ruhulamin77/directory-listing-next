import React from "react";
import DashboardNav from "../DashboardNav/DashboardNav";
import PostForm from "./PostForm";
import PostOptions from "./PostOptions";

const PostAds = () => {
  return (
    <div>
      <DashboardNav title="Create New Post" />
      <div className="m-2 p-3 bg-white rounded-3 ">
        <div className="w-75 mx-auto mb-3 border-bottom d-flex justify-content-between align-items-center">
          <h5 className="py-2">Fill in the details for new ads</h5>
          <div className="text-muted">See our posting rules</div>
        </div>

        <PostForm />
      </div>
    </div>
  );
};

export default PostAds;
