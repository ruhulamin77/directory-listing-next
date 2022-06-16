import React, { useState } from "react";
import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import { CgProfile } from "react-icons/cg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faChartLine,
  faAd,
  faSearch,
  faDollar,
  faHeader,
  faPager,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { GoLocation } from "react-icons/go";
import { MdSettings } from "react-icons/md";
import { Link } from "react-router-dom";
import { GrPlan } from "react-icons/gr";
// const element = <FontAwesomeIcon icon={faCoffee} />;

const Sidebar = () => {
  const [isCollapse, setIsCollapse] = useState(false);

  return (
    <>
      <div className="vh-100">
        <ProSidebar toggled="true" collapsed={isCollapse}>
          <SidebarHeader>
            <div className="d-flex align-items-center justify-content-around py-1">
              {!isCollapse && <h3>Welcome</h3>}
              <div
                className="cursor-pointer p-2"
                onClick={() => setIsCollapse(!isCollapse)}
              >
                <FontAwesomeIcon size="lg" fs="lg" icon={faBars} />
              </div>
            </div>
          </SidebarHeader>
          <SidebarContent>
            <Menu iconShape="square">
              <MenuItem
                title="Dashboard"
                icon={<FontAwesomeIcon icon={faChartLine} />}
              >
                <Link to="/dashboard/home"> Dashboard</Link>
              </MenuItem>

              <MenuItem icon={<FontAwesomeIcon icon={faHeader} />}>
                <Link to="/dashboard/headers">Headers</Link>
              </MenuItem>

              <MenuItem icon={<FontAwesomeIcon icon={faAd} />}>
                <Link to="/dashboard/new-post-ads">Post Ads</Link>
              </MenuItem>
              <MenuItem icon={<FontAwesomeIcon icon={faSearch} />}>
                <Link to="/dashboard/search-ads"> Search Ads</Link>
              </MenuItem>
              <MenuItem icon={<CgProfile />}>
                <Link to="/dashboard/profile"> Profile</Link>
              </MenuItem>
              <MenuItem icon={<FontAwesomeIcon icon={faUsers} />}>
                <Link to="/dashboard/users"> Users</Link>
              </MenuItem>
              <MenuItem icon={<FontAwesomeIcon icon={faPager} />}>
                <Link to="/dashboard/pages">
                  <SubMenu title=" Pages">
                    <MenuItem>
                      <Link to="/dashboard/addNewPage">Add New Page </Link>
                    </MenuItem>
                  </SubMenu>
                </Link>
              </MenuItem>

              <MenuItem icon={<FontAwesomeIcon icon={faAd} />}>
                <Link to="/dashboard/categories"> Categories</Link>
              </MenuItem>
              <MenuItem icon={<GoLocation />}>
                <Link to="/dashboard/manage-locations"> Manage Locations</Link>
              </MenuItem>
              <MenuItem icon={<FontAwesomeIcon icon={faDollar} />}>
                <Link to="/dashboard/payment"> Payment</Link>
              </MenuItem>
              <MenuItem
                icon={<GrPlan style={{ backgroundColor: "lightgray" }} />}
              >
                <Link to="/dashboard/packages"> Packages</Link>
              </MenuItem>
              <MenuItem
                icon={<MdSettings style={{ backgroundColor: "lightgray" }} />}
              >
                <Link to="/dashboard/settings"> Settings</Link>
              </MenuItem>
            </Menu>
          </SidebarContent>
          <SidebarFooter className=" text-center">
            <Link
              className="text-decoration-none text-secondary"
              to="/dashboard/footers"
            >
              {" "}
              <Menu iconShape="square">
                <SubMenu title=" Footers">
                  <MenuItem>
                    <Link to="/dashboard/detail">Detail </Link>
                  </MenuItem>
                  <SubMenu title="Columns">
                    <MenuItem>
                      <Link to={`/dashboard/columns/col${1}`}>Col 1</Link>{" "}
                    </MenuItem>
                    <MenuItem>
                      {" "}
                      <Link to={`/dashboard/columns/col${2}`}>Col 2</Link>{" "}
                    </MenuItem>
                    <MenuItem>
                      {" "}
                      <Link to={`/dashboard/columns/col${3}`}>Col 3</Link>{" "}
                    </MenuItem>
                    <MenuItem>
                      {" "}
                      <Link to={`/dashboard/columns/col${4}`}>Col 4</Link>
                    </MenuItem>
                  </SubMenu>
                  <MenuItem>
                    <Link to="/dashboard/subFooter">Sub Footer </Link>
                  </MenuItem>
                </SubMenu>
              </Menu>
            </Link>
          </SidebarFooter>
        </ProSidebar>
      </div>
    </>
  );
};

export default Sidebar;
