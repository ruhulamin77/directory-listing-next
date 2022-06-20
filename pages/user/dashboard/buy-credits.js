import React from "react";
import { BuyCredits, ProfileLayout, Layout } from "../../../components";

export default function BuyCreditPage() {
  return (
    <Layout title="Buy Credit">
      <ProfileLayout>
        {" "}
        <BuyCredits />
      </ProfileLayout>
    </Layout>
  );
}
