import React from "react";
import SinglePostOption from "./SinglePostOption";

const PostOptions = () => {
  return (
    <div className="p-3 m-2 bg-white">
      <div className="text-center">
        <div className="my-2 fw-bold fs-5">Let's post new an ads</div>
        <div>Choose any option below</div>
      </div>
      <div className="d-flex justify-content-around mt-4">
        <SinglePostOption
          title="Sell Something"
          firstOption=" Sell an item, property or service"
          secondOption="  Offer a property for rent"
        />
        <SinglePostOption
          title="Post a job vacancy"
          firstOption=" Post a job in Bangladesh"
          secondOption=" Post a job overseas"
        />
        <SinglePostOption
          title="Look for something"
          firstOption=" Look for property to rent"
          secondOption="  Look for something to buy"
        />
      </div>
      <div
        style={{ fontSize: "14px" }}
        className="my-5 text-secondary text-center"
      >
        Know your posting allowance | See our posting rules
      </div>
    </div>
  );
};

export default PostOptions;
