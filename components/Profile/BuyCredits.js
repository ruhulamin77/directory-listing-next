import Link from "next/link";
import React, { useState } from "react";

const BuyCredits = () => {
  const [amount, setAmount] = useState("10");

  return (
    <div className="my-5 container">
      <h5>
        Your current account balance:{" "}
        <span className="fs-3 fw-bold text-danger">$0</span>
      </h5>
      {/* <h6 className="text-uppercase text-primary fw-bolder">
        || Get Instant Cash Deposite ||
      </h6> */}
      {/* custom */}
      <div className="row">
        <div className="col">
          <div className="card">
            <div className="card-body">
              <h6 className="text-uppercase text-primary fw-bolder">
                Buy Credits
              </h6>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Amount $</label>
                    <input
                      type="number"
                      className="form-control"
                      min={10}
                      value={amount}
                      onChange={(e) => {
                        setAmount(e.target.value);
                        if (e.target.value < 10) {
                          setAmount(10);
                        }
                      }}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Payment Method</label>
                    <select className="form-control">
                      <option>Bitcoin</option>
                      <option>Ethereum</option>
                      <option>Litecoin</option>
                      <option>Bitcoin Cash</option>
                      <option>Ripple</option>
                      <option>Card</option>
                      <option>Bank Transfer</option>
                      <option>Paypal</option>
                      <option>Payoneer</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="row my-2">
                <div className="col-md-12">
                  <div className="form-group">
                    <label>
                      <input type="checkbox" />
                      <span className="ms-2">
                        I agree to the{" "}
                        <Link href="/profile">
                          <a>Terms and Conditions</a>
                        </Link>
                      </span>
                    </label>
                  </div>
                </div>
              </div>
              <div className="row mt-4">
                <div className="col-md-12">
                  <button className="btn btn-primary btn-block px-5">
                    Buy Credits
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="ms-5 my-4 d-flex flex-column align-items-start">
        <div className="dropdown d-flex align-items-center gap-2">
          <div className="text-primary">Payment Amount:</div>
          <button
            className="btn btn-outline-primary dropdown-toggle"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            US ${amount}
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            {[10, 20, 30, 40, 50, 60, 70, 80, 90, 100].map((item) => (
              <li onClick={() => setAmount(item)} className="dropdown-item">
                ${item}
              </li>
            ))}
          </ul>
        </div>
        <button type="button" className="btn btn-primary px-5 my-3">
          Add Bitcoin
        </button>
      </div> */}
    </div>
  );
};

export default BuyCredits;
