import React, { useEffect } from "react";
import DashboardNav from "./DashboardNav";

import Sidebar from "./Sidebar/Sidebar";

const DashboardLayout = ({ children }) => {
  useEffect(() => {
    document.title = "Dashboard";
  }, []);

  return (
    <>
      <div style={{ overflow: "hidden" }} className="d-flex ">
        <Sidebar />

        <div
          style={{
            overflowX: "hidden",
            overflowY: "scroll",
            backgroundColor: "#f0f7ff",
          }}
          className="w-100 vh-100"
        >
          {" "}
          {children}
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
