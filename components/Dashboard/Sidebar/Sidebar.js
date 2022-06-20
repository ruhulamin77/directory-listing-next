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

import { GrPlan } from "react-icons/gr";
import Link from "next/link";
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
                <Link href="/dashboard/home">
                  <a>Dashboard</a>
                </Link>
              </MenuItem>

              <MenuItem icon={<FontAwesomeIcon icon={faHeader} />}>
                <Link href="/dashboard/headers">
                  <a>Headers</a>
                </Link>
              </MenuItem>

              <MenuItem icon={<FontAwesomeIcon icon={faAd} />}>
                <Link href="/dashboard/new-post-ads">
                  <a> Post Ads</a>
                </Link>
              </MenuItem>
              <MenuItem icon={<FontAwesomeIcon icon={faSearch} />}>
                <Link href="/dashboard/search-ads">
                  <a>Search Ads</a>
                </Link>
              </MenuItem>
              <MenuItem icon={<CgProfile />}>
                <Link href="/dashboard/profile">
                  <a>Profile</a>
                </Link>
              </MenuItem>
              <MenuItem icon={<FontAwesomeIcon icon={faUsers} />}>
                <Link href="/dashboard/users">
                  <a>Users</a>
                </Link>
              </MenuItem>
              <MenuItem icon={<FontAwesomeIcon icon={faPager} />}>
                <Link href="/dashboard/pages">
                  asfas
                  {/* <SubMenu title=" Pages">
                    <MenuItem>
                      <Link href="/dashboard/addNewPage">
                        <a>Add New Page</a>
                      </Link>
                    </MenuItem>
                  </SubMenu> */}
                </Link>
              </MenuItem>

              <MenuItem icon={<FontAwesomeIcon icon={faAd} />}>
                <Link href="/dashboard/categories">
                  <a>Categories</a>
                </Link>
              </MenuItem>
              <MenuItem icon={<GoLocation />}>
                <Link href="/dashboard/manage-locations">
                  <a>Manage Locations</a>
                </Link>
              </MenuItem>
              <MenuItem icon={<FontAwesomeIcon icon={faDollar} />}>
                <Link href="/dashboard/payment">
                  <a>Payment</a>
                </Link>
              </MenuItem>
              <MenuItem
                icon={<GrPlan style={{ backgroundColor: "lightgray" }} />}
              >
                <Link href="/dashboard/packages">
                  <a>Packages</a>
                </Link>
              </MenuItem>
              <MenuItem
                icon={<MdSettings style={{ backgroundColor: "lightgray" }} />}
              >
                <Link href="/dashboard/settings">
                  <a>Settings</a>
                </Link>
              </MenuItem>
            </Menu>
          </SidebarContent>
          <SidebarFooter className=" text-center">
            {/* <Link
              className="text-decoration-none text-secondary"
              href="/dashboard/footers"
            >
              {" "}
              <a>
                {" "}
                <Menu iconShape="square">
                  <SubMenu title=" Footers">
                    <MenuItem>
                      <Link href="/dashboard/detail">
                        <a>Detail</a>
                      </Link>
                    </MenuItem>
                    <SubMenu title="Columns">
                      <MenuItem>
                        <Link href={`/dashboard/columns/col${1}`}>Col 1</Link>{" "}
                      </MenuItem>
                      <MenuItem>
                        {" "}
                        <Link href={`/dashboard/columns/col${2}`}>
                          Col 2
                        </Link>{" "}
                      </MenuItem>
                      <MenuItem>
                        {" "}
                        <Link href={`/dashboard/columns/col${3}`}>
                          Col 3
                        </Link>{" "}
                      </MenuItem>
                      <MenuItem>
                        {" "}
                        <Link href={`/dashboard/columns/col${4}`}>Col 4</Link>
                      </MenuItem>
                    </SubMenu>
                    <MenuItem>
                      <Link href="/dashboard/subFooter">Sub Footer </Link>
                    </MenuItem>
                  </SubMenu>
                </Menu>
              </a>
            </Link> */}
          </SidebarFooter>
        </ProSidebar>
      </div>
    </>
  );
};

export default Sidebar;
