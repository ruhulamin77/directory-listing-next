import React from "react";

import ProfileHeader from "./ProfileHeader";

const ProfileLayout = ({ children }) => {
  return (
    <>
      {/* profile Header */}
      <ProfileHeader />
      {/* profile Header */}

      {/* profile children */}
      {children}
      {/* profile children */}
    </>
  );
};

export default ProfileLayout;
