import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { toast } from 'react-toastify';
import { loginUser } from '../../store/actions/userActions';
import Header from '../Layout/Header';
import Link from 'next/link';

const Login = () => {
  const dispatch = useDispatch();
  // const navigate = useNavigate();
  const { error, loading, isAuthenticated } = useSelector(
    (state) => state.auth
  );
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  useEffect(() => {
    if (isAuthenticated) {
      toast.success('You are logged in');
      navigate('/');
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
    dispatch(loginUser(formData));
  };

  return (
    <div>
      <div className="container-sm" style={{ maxWidth: '600px' }}>
        <div className="card my-5">
          <div className="my-3 mx-auto card-body w-100">
            <h2 className="card-title">Login</h2>
            <p className="card-subtitle mb-2 text-muted">
              Provide your credentials to login.
            </p>
            <form onSubmit={handleSubmit} className="mt-5">
              <div className="form-floating mb-3">
                <input
                  type="email"
                  className={`form-control ${
                    formData.email.match(
                      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
                    )
                      ? 'is-valid'
                      : formData.email === ''
                      ? ''
                      : 'is-invalid'
                  }`}
                  id="email"
                  name="email"
                  required
                  value={formData.email}
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
                      ? 'is-valid'
                      : formData.password === ''
                      ? ''
                      : 'is-invalid'
                  }`}
                  id="password"
                  name="password"
                  required
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Password"
                />
                <label htmlFor="password">
                  Password<span className="text-danger">*</span>
                </label>
              </div>
              <button
                type="submit"
                disabled={formData.email === '' || formData.password === ''}
                className="btn btn-primary w-100"
              >
                {loading ? (
                  <div className="spinner-border text-light" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                ) : (
                  'Login'
                )}
              </button>
            </form>
            <p className="text-center mt-3">
              New to us?{' '}
              <Link href="/registration">
                <a>Register</a>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
