import React from "react";
import { Layout, ProfileLayout, VerifyBadge } from "../../../components";

export default function GetVerifiedBadgePage() {
  return (
    <Layout title="Get Verified">
      <ProfileLayout>
        <VerifyBadge />
      </ProfileLayout>
    </Layout>
  );
}
