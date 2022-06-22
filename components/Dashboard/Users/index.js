import React from "react";
import DashboardNav from "../DashboardNav/";
import UsersWallet from "./UsersWallet";

const Users = () => {
  return (
    <div>
      <DashboardNav title="Wallet"></DashboardNav>

      <UsersWallet></UsersWallet>
    </div>
  );
};

export default Users;
