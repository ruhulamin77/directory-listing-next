import React from "react";
import { DashboardHome, DashboardLayout } from "../../../components";

export default function AdminDashboardPage() {
  return (
    <>
      <div>
        <DashboardLayout>
          <DashboardHome />
        </DashboardLayout>
      </div>{" "}
    </>
  );
}
