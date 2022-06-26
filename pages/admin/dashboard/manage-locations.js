import React from "react";
import { DashboardLayout, Locations } from "../../../components";

export default function ManageLocationPage() {
  return (
    <>
      <div>
        <DashboardLayout title="Manage Location">
          <Locations />
        </DashboardLayout>
      </div>{" "}
    </>
  );
}
