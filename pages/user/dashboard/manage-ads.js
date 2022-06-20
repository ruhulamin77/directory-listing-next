import React from "react";
import { Layout, ProfileLayout, ManageAds } from "../../../components";

export default function ManageAdsPage() {
  return (
    <Layout title="Manage Ads">
      <ProfileLayout>
        <ManageAds />
      </ProfileLayout>
    </Layout>
  );
}
