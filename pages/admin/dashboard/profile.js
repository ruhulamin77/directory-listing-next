import React from "react";
import { DashboardLayout, Profile } from "../../../components";

export default function AdminDashboardPage() {
  return (
    <>
      <div>
        <DashboardLayout>
          <Profile />
        </DashboardLayout>
      </div>{" "}
    </>
  );
}
