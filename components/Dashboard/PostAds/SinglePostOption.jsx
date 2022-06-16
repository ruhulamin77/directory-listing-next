import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const SinglePostOption = ({ title, firstOption, secondOption }) => {
  return (
    <div className="border " style={{ width: "30%" }}>
      <div className="fs-5 p-2 fw-bold border-bottom">{title}</div>
      <div className="p-2 d-flex align-items-center justify-content-between border-bottom text-info cursor-pointer">
        {firstOption}{" "}
        <FontAwesomeIcon
          className="mb-0 text-secondary "
          size="md"
          icon={faChevronRight}
        />
      </div>
      <div className="p-2 d-flex align-items-center justify-content-between text-info cursor-pointer">
        {secondOption}{" "}
        <FontAwesomeIcon
          className="mb-0 text-secondary "
          size="md"
          icon={faChevronRight}
        />
      </div>
    </div>
  );
};

export default SinglePostOption;
