import Link from 'next/link';
import { BsStack } from 'react-icons/bs';
import { useDispatch } from 'react-redux';

const MenuOffcanvas = () => {
  // const dispatch = useDispatch();
  // const { user } = useSelector((state) => state.auth);
  return (
    <div
      className="offcanvas offcanvas-start"
      tabIndex="-1"
      id="menu-sidebar"
      aria-labelledby="menu-sidebar-label"
      style={{ zIndex: 1051 }}
    >
      <div className="offcanvas-header d-flex justify-content-between">
        {/* <!-- user logged in --> */}
        {/* {user ? ( */}
        {/* <div className="container-fluid d-flex gap-3 align-items-center">
          <img
            src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw0QDw4PDw0NDw8QDg0PDw0QDQ8NDg0PFREWFhURFRMYHSggGBolGxUVITEhJSkrLi4uFx8zODMsNygtLisBCgoKBQUFDgUFDisZExkrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIAN8A4gMBIgACEQEDEQH/xAAaAAEAAwEBAQAAAAAAAAAAAAAAAwQFAQIH/8QAMxABAAECAgcFBwQDAAAAAAAAAAECEQMEBSExQVFhcRIygbHBIjNCgpGh0RRSYvFy4fD/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8A+4gAAAAAAAAADlVURrmYiFTEz9EbImr7QC4MurP17opj7vP63E4/aAawyP1mJ+6PpD1GexOU+ANUUcPSEfFTbnE3WsLFpq7sxPmCQAAAAAAAAAAAAAAAAAAABBmcxFEcZ3Q9Y+LFNMzP9sfErmqZmdsg9YuLVVrqnw3PAAAAAAO01TGuJmJ4xLgDRyucv7NW3dO6VxhNPI5jtRae9G/jALYAAAAAAAAAAAAAAABI5VNomeETIMzSGJers7qfNVdqm8zPGbuAAAAAAAAAPeDidmqKuG3pveAG7Euq2RrvRHLUsgAAAAAAAAAAAAAAIM5VbDq6WTq2f93PWPMGUAAAAAAAAAAAC/oye9HSf++i+zdFz7VXSPVpAAAAAAAAAAAAAAAK2f8Adz4eayizNN6Ko5SDGAAAAAAAAAAABd0ZGurpHq0VHRlOqqefovAAAAAAAAAAAAAAAIsxixTTMzF91uKVT0l3I/yjyBmgAAAAAAAAAAA0dHYsTHZta0X63XWXo3v/ACz5w1AAAAAAAAAAAAAAAFXSFN8OeUxK08YtN6ZjjEgxAmJ9AAAAAAAAAAAFzRke1VPKI+/+mkqaOotTf9038Ny2AAAAAAAAAAAAAAAAClmslEzNUTbVMzFr3mzNb0sXGo7NVUcJm3TcDwAAAAAAAAs5XKduO1M2i8xznZvVpbGWw+zRTHLX12gliIjVDoAAAAAAAAAAAAAAAAAKGksHZXv2Tz4L6rpH3fjAMsAAAAAAAE+Twe1VF9ka5a7N0Z3qukebSAAAAAAAAAAAAAAAAAAAVdI9z5oWlPSc+xHX0BmgAAAAAAAuaM71XT1aTL0dPt/LLUAAAAAAAAAAAAAAAAAAAlQ0nV3Y6yu1VREa5iOs2ZWdxIqr1a4iLXBAAAAAAAACfIzbEp53j6tdg01WmJ4TEtvDxKZjVMT97A9gAAAAAAAAAA4Do8V4lMbZiOsoas7hx8V+kSCyKNWkY3Uz46kOJn652RFPPbINKuuIi8zERzmynjZ+Phi/OdihVMzrmbzz1uA9YuJVVN6pmeW6PB4dAAAAAAAAACJtrjV01AC5g5+YtFUX5xtXsPHoq2THTZLFAbwycHOV0/yjmnp0jxp+kgvirTn8Odt46wlox6KtlVM+IJRy7oAAK2YzdNOrbVw/Kji5vEq32jhCCfWQCQAAAAAAAAAAAAAAAAAAAAAHHQEmHj107Kp6bYXMDPxOqrV/KNjPAbt+gw+1PGfqA5+Q/IAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/2Q=="
            alt=""
            className="rounded-circle border border-5"
            height="60px"
            width="60px"
          />
          <div>
            <h5>Ruhul Amin</h5>
            <h5>{user?.name}</h5>
            <Link href="/profile">
              <a>Manage account</a>
            </Link>
          </div>
        </div>
        ) : ( */}
        <div className="d-grid col-10 flex-fill">
          <Link href="/user/login">
            <a type="button" className="btn btn-outline-primary shadow-none">
              Log In
            </a>
          </Link>
        </div>
        {/* )} */}

        <button
          type="button"
          className="btn-close ms-3 me-2 shadow-none"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div>
      {/* <hr className="m-0" /> */}
      <Link href="/post-ad">
        <a className="btn mx-3 btn-warning shadow-none text-white px-3 px-xl-5">
          Post Your Ad
        </a>
      </Link>
      {/* <hr className="m-0" /> */}
      <div className="offcanvas-body">
        <ul className="list-group">
          {[...Array(10).keys()].map((i) => (
            <li
              key={i}
              className="list-group-item list-group-item-action border-0"
            >
              <a className="nav-link text-secondary d-flex justify-content-between align-items-center">
                <span>
                  <BsStack className="me-2" />
                  {i} Category
                </span>
                <span>
                  <i className="bi bi-chevron-right"></i>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
      <hr />
      <div className="offcanvas-footer container">
        <p>&copy; Softfy Technologies {new Date().getFullYear()}</p>
      </div>
    </div>
  );
};

export default MenuOffcanvas;
