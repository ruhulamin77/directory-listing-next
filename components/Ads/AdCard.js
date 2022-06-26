import moment from "moment";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsCalendar4 } from "react-icons/bs";

const AdCard = ({ post }) => {
  return (
    <Link href={`/all-ads/${post._id}`}>
      <a className="nav-link py-0">
        <div className="card post-card">
          <div className="row g-0">
            <div className="col-5 col-sm-4">
              {post.images.length === 1 ? (
                post.images.map((item, index) => (
                  <div key={index} className="border-end">
                    <img
                      src={`http://localhost:5000/${item}`}
                      className="img-fluid rounded-start"
                      style={{
                        height: "200px",
                        width: "100%",
                        // objectFit: "contain",
                      }}
                      alt={post.title}
                    />
                  </div>
                ))
              ) : (
                <div
                  id={`slide-${post._id}`}
                  className="carousel carousel-dark slide"
                  data-bs-ride="carousel"
                >
                  <div className="carousel-inner border-end">
                    {post.images.map((item, index) => (
                      <div
                        key={index}
                        className={`carousel-item ${
                          index === 0 ? "active" : ""
                        }`}
                      >
                        <img
                          src={`http://localhost:5000/${item}`}
                          className="img-fluid rounded-start"
                          style={{
                            height: "200px",
                            width: "100%",
                            // objectFit: "contain",
                          }}
                          alt={post.title}
                        />
                      </div>
                    ))}
                  </div>
                  <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target={`#slide-${post._id}`}
                    data-bs-slide="prev"
                  >
                    <span
                      className="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target={`#slide-${post._id}`}
                    data-bs-slide="next"
                  >
                    <span
                      className="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>
              )}
            </div>
            <div className="col-7 col-sm-8">
              <div className="card-body d-flex flex-column h-100">
                <div>
                  <h6 className="card-title d-lg-none">{post.title}</h6>
                  <h5 className="card-title d-none d-lg-block">{post.title}</h5>
                  <div className="card-text text-muted">
                    <ul className="list-group mb-3">
                      {/* Available from:{' '} */}
                      {[
                        ...post.locations.map((location) => location.country),
                      ].join(", ")}
                    </ul>
                  </div>
                  <h6 className="card-title text-success">
                    Price: ${post.price}
                  </h6>
                </div>
                <p className="card-text w-100 mt-auto d-flex justify-content-end">
                  <small className="text-primary d-flex align-items-center gap-1">
                    <BsCalendar4 />
                    {moment(post.createdAt).fromNow()}
                  </small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default AdCard;
