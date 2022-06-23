import React from "react";
import { DashboardLayout, Payment } from "../../../components";

export default function PaymentPage() {
  return (
    <>
      <div>
        <DashboardLayout>
          <Payment />
        </DashboardLayout>
      </div>{" "}
    </>
  );
}
