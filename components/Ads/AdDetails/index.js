import React, { useEffect } from "react";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import AdImages from "./AdImages";
import AdInfos from "./AdInfos";
import AdAside from "./AdAside";
import AdDetailsLoader from "./AdDetailsLoader";
import { useRouter } from "next/router";
import { getPostDetails } from "../../../store/actions/postActions";
import Head from "next/head";

const AdDetails = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { id } = router.query;
  const { post, loading } = useSelector((state) => state.postDetails);

  useEffect(() => {
    dispatch(getPostDetails(id));
  }, [dispatch, id]);

  return (
    <>
      {/*Ad  Details */}
      <Head>
        <title>Softfy | {post.title ? post.title : "Ad Details"}</title>
      </Head>
      {!loading ? (
        Object.keys(post).length >= 1 ? (
          <section className="my-md-3 bg-light">
            <div
              className="container mx-auto bg-white rounded-3 shadow-sm p-3 overflow-hidden"
              style={{ maxWidth: "1200px" }}
            >
              <div className="row">
                <div className="col-12">
                  {/* title */}
                  <div>
                    <h4>{post.title}</h4>
                    <p className="text-muted">
                      Posted{" "}
                      <span className="text-danger">
                        {moment(post.createdAt).fromNow()}
                      </span>{" "}
                      by{" "}
                      <span className="text-danger">
                        {post.contactDetails?.user.name}
                      </span>
                    </p>
                  </div>
                  {/* title */}
                </div>
                <div className="col-md-8">
                  {/* carousel */}
                  <AdImages post={post} />
                  {/* carousel */}
                  {/* description */}
                  <AdInfos post={post} />
                  {/* details table */}
                </div>
                {/* sidebar */}
                <div className="col-md-4">
                  <AdAside post={post} />
                </div>
              </div>
            </div>
          </section>
        ) : (
          <section className="my-md-3 bg-light">
            <div
              className="container mx-auto bg-white rounded-3 shadow-sm p-3 overflow-hidden d-flex justify-content-center"
              style={{ maxWidth: "1200px" }}
            >
              <h3 className="text-danger">Ad not found.</h3>
            </div>
          </section>
        )
      ) : (
        <AdDetailsLoader />
      )}
    </>
  );
};

export default AdDetails;
