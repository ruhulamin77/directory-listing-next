import {
  faAd,
  faBars,
  faChartLine,
  faDollar,
  faHeader,
  faPager,
  faSearch,
  faUsers,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { CgProfile } from 'react-icons/cg';
import { RiArrowDownSLine } from 'react-icons/ri';
import {
  Menu,
  MenuItem,
  ProSidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
} from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';

import { Accordion } from 'react-bootstrap';

import { GoLocation } from 'react-icons/go';
import { MdSettings } from 'react-icons/md';

import 'react-pro-sidebar/dist/css/styles.css';

import Link from 'next/link';
import { GrPlan } from 'react-icons/gr';
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
                <Link href="/admin/dashboard">
                  <a>Dashboard</a>
                </Link>
              </MenuItem>

              <MenuItem icon={<FontAwesomeIcon icon={faHeader} />}>
                <Link href="/admin/dashboard/headers">
                  <a>Headers</a>
                </Link>
              </MenuItem>

              <MenuItem icon={<FontAwesomeIcon icon={faAd} />}>
                <Link href="/admin/dashboard/new-post-ads">
                  <a> Post Ads</a>
                </Link>
              </MenuItem>
              <MenuItem icon={<FontAwesomeIcon icon={faSearch} />}>
                <Link href="/admin/dashboard/search-ads">
                  <a>Search Ads</a>
                </Link>
              </MenuItem>
              <MenuItem icon={<CgProfile />}>
                <Link href="/admin/dashboard/profile">
                  <a>Profile</a>
                </Link>
              </MenuItem>
              <MenuItem icon={<FontAwesomeIcon icon={faUsers} />}>
                <Link href="/admin/dashboard/users">
                  <a>Users</a>
                </Link>
              </MenuItem>
              <MenuItem
                className="accordion"
                id="accordionExample"
                // icon={<FontAwesomeIcon icon={faPager} />}
              >
                <div className="accordion-header" id="headingOne">
                  <div
                    className=" collapsed d-flex justify-content-between"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="false"
                    aria-controls="collapseOne"
                  >
                    <div>
                      {' '}
                      {
                        <FontAwesomeIcon className="ms-2 me-3" icon={faPager} />
                      }{' '}
                      Pages
                    </div>
                    <RiArrowDownSLine />
                  </div>
                </div>
                <ul
                  id="collapseOne"
                  className="accordion-collapse collapse "
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample"
                >
                  <MenuItem className="ms-5">
                    <Link href="/admin/dashboard/pages">
                      <a style={{ fontSize: '14px' }}>All Pages</a>
                    </Link>
                  </MenuItem>
                  <MenuItem className="ms-5">
                    <Link href="/admin/dashboard/pages/addNewPage">
                      <a style={{ fontSize: '14px' }}>Add New Page</a>
                    </Link>
                  </MenuItem>
                </ul>
              </MenuItem>
              {/* <MenuItem
                className="dropend"
                icon={<FontAwesomeIcon icon={faPager} />}
              >
                <div
                  className="dropdown-toggle"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Pages
                </div>

                <ul className="dropdown-menu dropdown-menu-dark">
                  <MenuItem className="dropdown-item">
                    <Link href="/admin/dashboard/pages">
                      <a style={{ fontSize: "14px" }}>All Pages</a>
                    </Link>
                  </MenuItem>
                  <MenuItem className="dropdown-item ">
                    <Link href="/admin/dashboard/pages/addNewPage">
                      <a style={{ fontSize: "14px" }}>Add New Page</a>
                    </Link>
                  </MenuItem>
                </ul>
              </MenuItem> */}
              {/* <MenuItem icon={<FontAwesomeIcon icon={faPager} />}>
                <SubMenu title=" Pages" >
                  <MenuItem>
                    <Link href="/admin/dashboard/pages">
                      <a>All Pages</a>
                    </Link>
                  </MenuItem>
                  <MenuItem>
                    <Link href="/admin/dashboard/addNewPage">
                      <a>Add New Page</a>
                    </Link>
                  </MenuItem>
                </SubMenu>
              </MenuItem> */}

              <div className="bg-dark" style={{ backgroundColor: 'black' }}>
                <Accordion
                  defaultActiveKey="0"
                  style={{ backgroundColor: 'black' }}
                >
                  <Accordion.Item
                    eventKey="1"
                    style={{ backgroundColor: 'black' }}
                    className="bg-dark"
                  >
                    <Accordion.Header
                      className="bg-dark"
                      style={{ backgroundColor: 'black' }}
                    >
                      <span className="me-3">
                        <FontAwesomeIcon icon={faAd} />
                      </span>{' '}
                      <span>Pages</span>
                    </Accordion.Header>
                    <Accordion.Body className="m-0 p-0 bg-dark">
                      <MenuItem>
                        <Link href="/admin/dashboard/pages">
                          <a className="ms-5">All Pages</a>
                        </Link>
                      </MenuItem>
                      <MenuItem>
                        <Link href="/admin/dashboard/addNewPage">
                          <a className="ms-5">Add New Page</a>
                        </Link>
                      </MenuItem>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
              <MenuItem icon={<FontAwesomeIcon icon={faAd} />}>
                <Link href="/admin/dashboard/categories">
                  <a>Categories</a>
                </Link>
              </MenuItem>
              <MenuItem icon={<GoLocation />}>
                <Link href="/admin/dashboard/manage-locations">
                  <a>Manage Locations</a>
                </Link>
              </MenuItem>
              <MenuItem icon={<FontAwesomeIcon icon={faDollar} />}>
                <Link href="/admin/dashboard/payment">
                  <a>Payment</a>
                </Link>
              </MenuItem>
              <MenuItem
                icon={<GrPlan style={{ backgroundColor: 'lightgray' }} />}
              >
                <Link href="/admin/dashboard/packages">
                  <a>Packages</a>
                </Link>
              </MenuItem>
              <MenuItem
                icon={<MdSettings style={{ backgroundColor: 'lightgray' }} />}
              >
                <Link href="/admin/dashboard/settings">
                  <a>Settings</a>
                </Link>
              </MenuItem>
            </Menu>
          </SidebarContent>
          <SidebarFooter className=" text-center">
            {/* <Link
              className="text-decoration-none text-secondary"
              href="/admin/dashboard/footers"
            >
              {" "}
              <a>
                {" "}
                <Menu iconShape="square">
                  <SubMenu title=" Footers">
                    <MenuItem>
                      <Link href="/admin/dashboard/detail">
                        <a>Detail</a>
                      </Link>
                    </MenuItem>
                    <SubMenu title="Columns">
                      <MenuItem>
                        <Link href={`/admin/dashboard/columns/col${1}`}>Col 1</Link>{" "}
                      </MenuItem>
                      <MenuItem>
                        {" "}
                        <Link href={`/admin/dashboard/columns/col${2}`}>
                          Col 2
                        </Link>{" "}
                      </MenuItem>
                      <MenuItem>
                        {" "}
                        <Link href={`/admin/dashboard/columns/col${3}`}>
                          Col 3
                        </Link>{" "}
                      </MenuItem>
                      <MenuItem>
                        {" "}
                        <Link href={`/admin/dashboard/columns/col${4}`}>Col 4</Link>
                      </MenuItem>
                    </SubMenu>
                    <MenuItem>
                      <Link href="/admin/dashboard/subFooter">Sub Footer </Link>
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
