import Head from "next/head";
import React, { useEffect } from "react";

import Sidebar from "./Sidebar/Sidebar";

const DashboardLayout = ({ title = "Dashboard", children }) => {
  useEffect(() => {
    document.title = "Dashboard";
  }, []);

  return (
    <>
      <Head>
        <title>Softfy | {title}</title>
      </Head>
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
