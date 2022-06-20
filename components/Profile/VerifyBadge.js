import React from "react";

const steps = [
  {
    title: "Step 01: Take a photo of your Government ID on a flat surface.",
    img: "https://thumbs.dreamstime.com/b/id-identity-card-flat-style-design-vector-illustration-identification-driver-license-national-electronic-chip-male-photo-139157681.jpg",
  },
  {
    title: "Step 02: Take a selfie of your Government ID close to your face",
    img: "https://www.clickexchange.ca/wp-content/uploads/2021/04/OK_1.png",
  },
  {
    title: "Step 03: Take a selfie of your face",
    img: "https://thumbs.dreamstime.com/b/african-american-man-portrait-worker-id-badge-driver-licence-passport-photo-dark-skin-person-male-character-icon-social-media-188107522.jpg",
  },
  {
    title:
      "Step 04: Following the instructions send those Documents to admin@gmail.com",
  },
  {
    title:
      "Step 05: Last step, you verify your account by talking in live chat",
  },
];

const VerifyBadge = () => {
  return (
    <div className="my-5 container">
      <div className="mt-5">
        <h5 className="fw-bold ms-3">
          #Free post allowed for the verified user.
        </h5>
      </div>

      {steps.map((step, index) => (
        <div key={index} className={`${step.image ? "mt-5" : "mt-4"}`}>
          <h6 className="fw-bold ms-3 my-2">{step.title}</h6>
          {step.img && (
            <div className="col-sm-8 col-md-5 col-lg-5">
              <img src={step.img} alt="id" className="w-100 " />
            </div>
          )}
        </div>
      ))}

      {/* Step 01 */}
    </div>
  );
};

export default VerifyBadge;
