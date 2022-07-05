import Link from 'next/link';
import {
  BsEnvelope,
  BsList,
  BsPerson,
  BsPhone,
  BsSearch,
  BsTelephone,
} from 'react-icons/bs';
import BottomNav from './BottomNav';
import MenuOffcanvas from './MenuOffcanvas';
import ProfileOffcanvas from './ProfileOffcanvas';

const Header = () => {
  return (
    <header>
      <ProfileOffcanvas />
      <MenuOffcanvas />
      {/* <!-- top--contact navbar --> */}
      <nav className="navbar d-none d-md-block bg-light">
        <div className="container">
          <div className="navbar-nav d-flex flex-row w-100 gap-4">
            <a href="#" className="nav-link d-flex gap-2 align-items-center">
              <BsTelephone className="text-danger" />
              <span className="text-dark">+8801835539553</span>
            </a>

            <a href="#" className="nav-link d-flex gap-2 align-items-center">
              <BsEnvelope className="text-danger" />
              <span className="text-dark">info.softfy@gmail.com</span>
            </a>

            <a
              href="#"
              className="nav-link ms-auto d-flex gap-2 align-items-center"
            >
              <BsPhone className="text-danger" />
              <span className="text-dark">Save big on our app!</span>
            </a>
          </div>
        </div>
      </nav>

      {/* <!-- top--main navbar --> */}
      <nav className="navbar border-bottom bg-white">
        <div className="container">
          <div className="navbar-nav d-flex flex-row align-items-center gap-4 w-100">
            {/* <!-- nav logo --> */}
            <Link href="/">
              <a className="navbar-brand fs-3 fw-bolder me-0 text-dark d-none d-md-block">
                Softfy
              </a>
            </Link>
            {/* <!-- hamburger menu --> */}
            <a
              href="#menu-sidebar"
              data-bs-toggle="offcanvas"
              role="button"
              aria-controls="menu-sidebar"
              className="d-md-none"
            >
              <span className="fw-bold fs-1 text-secondary">
                <BsList />
              </span>
            </a>
            <form className="d-flex input-group flex-grow-1">
              <input
                className="form-control border-2 border-danger shadow-none"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-danger px-4" type="submit">
                <BsSearch />
              </button>
            </form>
            <div className="navbar-nav d-none d-md-block">
              <div className="nav-item d-flex flex-row gap-4">
                <a
                  className="nav-link"
                  href="#account-sidebar"
                  data-bs-toggle="offcanvas"
                  role="button"
                  aria-controls="account-sidebar"
                >
                  <BsPerson className="text-dark fs-2" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* <!-- top--main bottom navbar --> */}
      <nav className="navbar navbar-expand d-none d-md-block bg-danger py-0">
        <div className="container">
          <ul className="navbar-nav gap-1 gap-xl-5">
            <li className="nav-item">
              <a
                type="button"
                href="#menu-sidebar"
                data-bs-toggle="offcanvas"
                role="button"
                aria-controls="menu-sidebar"
                className="text-white fs-3"
              >
                <BsList />
              </a>
            </li>
            <li className="nav-item dropdown">
              <button
                className="btn btn-danger dropdown-toggle px-3 px-xl-5 h-100 shadow-none rounded-0"
                id="navbarDropdownMenuLink"
                // role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Categories
              </button>
              <ul className="dropdown-menu">
                <li className="dropdown-item">
                  <a
                    href="#"
                    className="
                      nav-link
                      text-secondary
                      d-flex
                      justify-content-between
                      align-items-center
                    "
                  >
                    <span> Desktop </span>
                    <i className="bi bi-chevron-right"></i>
                  </a>
                </li>
                <li className="dropdown-item">
                  <a
                    href="#"
                    className="
                      nav-link
                      text-secondary
                      d-flex
                      justify-content-between
                      align-items-center
                    "
                  >
                    <span> Laptop </span>
                    <i className="bi bi-chevron-right"></i>
                  </a>
                </li>
                <li className="dropdown-item">
                  <a
                    href="#"
                    className="
                      nav-link
                      text-secondary
                      d-flex
                      justify-content-between
                      align-items-center
                    "
                  >
                    <span> Men&apos;s Watch </span>
                    <i className="bi bi-chevron-right"></i>
                  </a>
                </li>
                <li className="dropdown-item">
                  <a
                    href="#"
                    className="
                      nav-link
                      text-secondary
                      d-flex
                      justify-content-between
                      align-items-center
                    "
                  >
                    <span> Microwave Oven </span>
                    <i className="bi bi-chevron-right"></i>
                  </a>
                </li>
                <li className="dropdown-item">
                  <a
                    href="#"
                    className="
                      nav-link
                      text-secondary
                      d-flex
                      justify-content-between
                      align-items-center
                    "
                  >
                    <span> Motor Bike </span>
                    <i className="bi bi-chevron-right"></i>
                  </a>
                </li>
                <li className="dropdown-item">
                  <a
                    href="#"
                    className="
                      nav-link
                      text-secondary
                      d-flex
                      justify-content-between
                      align-items-center
                    "
                  >
                    <span> Refrigerator </span>
                    <i className="bi bi-chevron-right"></i>
                  </a>
                </li>
                <li className="dropdown-item">
                  <a
                    href="#"
                    className="
                      nav-link
                      text-secondary
                      d-flex
                      justify-content-between
                      align-items-center
                    "
                  >
                    <span> Smart Phone </span>
                    <i className="bi bi-chevron-right"></i>
                  </a>
                </li>
                <li className="dropdown-item">
                  <a
                    href="#"
                    className="
                      nav-link
                      text-secondary
                      d-flex
                      justify-content-between
                      align-items-center
                    "
                  >
                    <span> Smart TV & Android TV </span>
                    <i className="bi bi-chevron-right"></i>
                  </a>
                </li>
                <li className="dropdown-item">
                  <a
                    href="#"
                    className="
                      nav-link
                      text-secondary
                      d-flex
                      justify-content-between
                      align-items-center
                    "
                  >
                    <span> Speaker </span>
                    <i className="bi bi-chevron-right"></i>
                  </a>
                </li>
                <li className="dropdown-item">
                  <a
                    href="#"
                    className="
                      nav-link
                      text-secondary
                      d-flex
                      justify-content-between
                      align-items-center
                    "
                  >
                    <span> Split AC </span>
                    <i className="bi bi-chevron-right"></i>
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <Link href="/all-ads">
                <a className="text-white nav-link">All Ads</a>
              </Link>
            </li>
            <li>
              <a href="/campaigns" className="text-white nav-link">
                Campaigns
              </a>
            </li>
            <li>
              <a href="/help" className="text-white nav-link">
                Help
              </a>
            </li>
          </ul>
          <Link href="/post-ad">
            <a className="btn btn-warning shadow-none nav-link rounded-0 text-white px-3 px-xl-5">
              Post Your Ad
            </a>
          </Link>
        </div>
      </nav>

      {/* <!-- *bottom navbar --> */}
      <BottomNav />
    </header>
  );
};

export default Header;
