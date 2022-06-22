import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { registerUser } from "../../store/actions/userActions";
import Link from "next/link";
import { useRouter } from "next/router";

const Register = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const { loading, error, isAuthenticated } = useSelector(
    (state) => state.auth
  );

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
  });

  useEffect(() => {
    if (isAuthenticated) {
      toast.success("You are logged in");
      router.push("/");
    }
    if (error) {
      toast.error(error);
    }
  }, [isAuthenticated, error]);

  const handleChange = (e) =>
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      toast.success("Password and Confirm Password do not match");
      return;
    }
    const registerData = {
      name: formData.name,
      email: formData.email,
      password: formData.password,
      number: formData.number,
    };

    dispatch(registerUser(registerData));
  };

  return (
    <div>
      <div className="container-sm" style={{ maxWidth: "600px" }}>
        <div className="card my-5">
          <div className="my-3 mx-auto card-body w-100">
            <h2 className="card-title">Register</h2>
            <p className="card-subtitle mb-2 text-muted">
              Register and get started for free!
            </p>
            <form onSubmit={handleSubmit} className="mt-5">
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className={`form-control ${
                    formData.name.length > 0 ? "is-valid" : ""
                  }`}
                  id="name"
                  name="name"
                  required
                  onChange={handleChange}
                  placeholder="Name"
                />
                <label htmlFor="name">
                  Full Name<span className="text-danger">*</span>
                </label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="email"
                  className={`form-control ${
                    formData.email.match(
                      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
                    )
                      ? "is-valid"
                      : formData.email === ""
                      ? ""
                      : "is-invalid"
                  }`}
                  id="email"
                  name="email"
                  required
                  onChange={handleChange}
                  placeholder="Email"
                />
                <label htmlFor="email">
                  Email address<span className="text-danger">*</span>
                </label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="password"
                  className={`form-control ${
                    formData.password.length >= 6
                      ? "is-valid"
                      : formData.password === ""
                      ? ""
                      : "is-invalid"
                  }`}
                  id="password"
                  name="password"
                  required
                  onChange={handleChange}
                  placeholder="Password"
                />
                <label htmlFor="password">
                  Password<span className="text-danger">*</span>
                </label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="password"
                  className={`form-control ${
                    formData.password === formData.confirmPassword &&
                    formData.password.length >= 6
                      ? "is-valid"
                      : formData.confirmPassword === ""
                      ? ""
                      : "is-invalid"
                  }`}
                  id="confirmPassword"
                  name="confirmPassword"
                  required
                  onChange={handleChange}
                  disabled={formData.password.length >= 6 ? false : true}
                  placeholder="Confirm Password"
                />
                <label htmlFor="confirmPassword">
                  Confirm Password<span className="text-danger">*</span>
                </label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className={`form-control ${
                    formData.phone.length > 0 ? "is-valid" : ""
                  }`}
                  id="phone"
                  name="phone"
                  onChange={handleChange}
                  placeholder="Phone"
                />
                <label htmlFor="phone">
                  Phone Number <span className="text-muted">(optional)</span>
                </label>
              </div>
              <button
                type="submit"
                disabled={
                  formData.name === "" ||
                  formData.email === "" ||
                  formData.password === "" ||
                  formData.confirmPassword === ""
                }
                className="btn btn-primary w-100"
              >
                {loading ? (
                  <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                ) : (
                  "Register"
                )}
              </button>
            </form>
            <p className="text-center mt-3">
              Already have an account?{" "}
              <Link href="/user/login">
                <a>Login</a>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
