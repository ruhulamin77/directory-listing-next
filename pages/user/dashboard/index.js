import React from "react";
import { Layout, ProfileLayout, ProfileHome } from "../../../components";

export default function UserDashboard() {
  return (
    <Layout title="User Profile">
      <ProfileLayout>
        <ProfileHome></ProfileHome>
      </ProfileLayout>
    </Layout>
  );
}
