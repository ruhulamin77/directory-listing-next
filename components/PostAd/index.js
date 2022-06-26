import { useRouter } from "next/router";
import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { clearErrors, createPost } from "../../store/actions/postActions";
import { NEW_POST_RESET } from "../../store/constants/postConstants";
import {
  Brand,
  Category,
  Condition,
  ContactDetails,
  Description,
  Images,
  Locations,
  Model,
  Price,
  PriceType,
  Title,
} from "./formFields";

const PostAd = () => {
  const dispatch = useDispatch();
  const { loading, error, success } = useSelector((state) => state.newPost);
  const [adPostData, setAdPostData] = useState({
    title: "",
    description: "",
    brand: "",
    model: "",
    price: "",
    priceType: "",
    condition: "",
    category: {},
    locations: [],
    images: [],
    contactDetails: {},
  });
  const router = useRouter();

  const setData = (key, value) => {
    setAdPostData({
      ...adPostData,
      [key]: value,
    });
  };
  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }
    if (success) {
      toast("Ad posted successfully");
      dispatch(clearErrors());
      dispatch({ type: NEW_POST_RESET });
      router.push("/all-ads");
    }
  }, [dispatch, error, success]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (adPostData.title === "") {
      toast.error("Please enter title");
      return;
    } else if (adPostData.description === "") {
      toast.error("Please enter description");
      return;
    } else if (adPostData.price === "") {
      toast.error("Please enter price");
      return;
    } else if (adPostData.category.category === "") {
      toast.error("Please select category");
      return;
    } else if (adPostData.locations.length === 0) {
      toast.error("Please select atleast one location");
      return;
    } else if (adPostData.images.length === 0) {
      toast.error("Please select atleast one image");
      return;
    } else {
      const formData = new FormData();
      formData.append("title", adPostData.title);
      formData.append("description", adPostData.description);
      formData.append("brand", adPostData.brand);
      formData.append("model", adPostData.model);
      formData.append("price", adPostData.price);
      formData.append("priceType", adPostData.priceType);
      formData.append("condition", adPostData.condition);
      formData.append("category", JSON.stringify(adPostData.category));
      formData.append("locations", JSON.stringify(adPostData.locations));
      formData.append(
        "contactDetails",
        JSON.stringify(adPostData.contactDetails)
      );
      if (adPostData.images.length > 0) {
        adPostData.images.forEach((image) => {
          formData.append("images", image);
        });
      }

      dispatch(createPost(formData));
    }
  };

  return (
    <section className="my-md-3 bg-light">
      <div
        className="container mx-auto bg-white rounded-3 shadow-sm py-3 px-4 overflow-hidden"
        style={{ maxWidth: "800px" }}
      >
        <h3 className="mb-3">
          Create<span className="text-danger"> AD</span>
        </h3>
        <form encType="multipart/form-data" onSubmit={handleSubmit}>
          {/* Title */}
          <Title setData={setData} />
          {/* End of Title */}

          {/* Description */}
          <Description setData={setData} />
          {/* End of Description */}

          {/* Category */}
          <Category setData={setData} />
          {/* End of Category */}

          {/* Brand */}
          <Brand setData={setData} />
          {/* End of Brand */}

          {/* Model */}
          <Model setData={setData} />
          {/* End of Model */}

          {/* Price */}
          <Price setData={setData} />
          {/* End of Price */}

          {/* Price Type */}
          <PriceType setData={setData} />
          {/* End of Price Type */}

          {/* condition */}
          <Condition setData={setData} />
          {/* end of condition */}

          {/* Locations */}
          <Locations setData={setData} />
          {/* End of Locations */}

          {/* Images */}
          <Images setData={setData} />
          {/* End of Images */}

          {/* Contact Details */}
          <ContactDetails setData={setData} />
          {/* End of Contact Details */}

          {/* Submit button */}
          {loading ? (
            <div className="d-grid gap-2 col-6 ms-auto my-5">
              <button className="btn btn-primary" type="button" disabled>
                <span
                  className="spinner-border spinner-border-sm me-2"
                  role="status"
                  aria-hidden="true"
                ></span>
                Loading...
              </button>
            </div>
          ) : (
            <div className="d-grid gap-2 col-6 ms-auto mt-5 mb-3">
              <button className="btn btn-primary" type="submit">
                Submit
              </button>
            </div>
          )}
          {/* End of Submit button */}
        </form>
      </div>
    </section>
  );
};

export default PostAd;
