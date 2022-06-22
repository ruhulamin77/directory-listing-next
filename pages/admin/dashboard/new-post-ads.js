import React from "react";
import { DashboardLayout, DashboardNav, PostAd } from "../../../components";

export default function AdminDashboardPage() {
  return (
    <>
      <div>
        <DashboardLayout>
          <DashboardNav title={"Post Ad"} />
          <PostAd />
        </DashboardLayout>
      </div>{" "}
    </>
  );
}
