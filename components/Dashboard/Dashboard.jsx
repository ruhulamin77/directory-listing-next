import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar/Sidebar';

const Dashboard = () => {
  useEffect(() => {
    document.title = 'Dashboard';
  }, []);
  return (
    <>
      <div style={{ overflow: 'hidden' }} className="d-flex ">
        <Sidebar />
        <div
          style={{
            overflowX: 'hidden',
            overflowY: 'scroll',
            backgroundColor: '#f0f7ff',
          }}
          className="w-100 vh-100"
        >
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
