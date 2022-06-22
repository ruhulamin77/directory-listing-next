import React from "react";
import { DashboardHome, DashboardLayout, SearchAds } from "../../../components";

export default function SearchAdsPage() {
  return (
    <>
      <div>
        <DashboardLayout>
          <SearchAds />
        </DashboardLayout>
      </div>{" "}
    </>
  );
}
