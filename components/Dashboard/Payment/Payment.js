import React from "react";
import DashboardNav from "../DashboardNav/DashboardNav";
import { Card, Col, Row } from "react-bootstrap";

import {  FaStar,FaMoneyCheckAlt } from "react-icons/fa";

import { ImStatsBars, ImStatsDots } from "react-icons/im";
import { FiClock } from "react-icons/fi";
import PaymentWallet from "./PaymentWallet";

const Payment = () => {
  return (
    <div>
      <DashboardNav title="Payment"></DashboardNav>

      <Row sm="1" md="2" lg="4" className="g-2">
        <Col>
          <div className="d-flex bg-white m-3">
            <div className="bg-light p-4 d-flex align-items-center">
              <FaMoneyCheckAlt className="fs-1 text-black" />
            </div>
            <Card.Body>
              <Card.Text className="m-0">Today</Card.Text>
              <Card.Title className="m-0 fs-6">
                <FiClock></FiClock> Today
              </Card.Title>
              <Card.Title className="mt-1 fs-6">
                <FaStar /> 0
              </Card.Title>
            </Card.Body>
          </div>
        </Col>
        <Col>
          <div className="d-flex bg-white m-3">
            <div className="bg-light p-4 d-flex align-items-center">
              <FaStar className="fs-1 text-black" />
            </div>
            <Card.Body>
              <Card.Text className="m-0">Last day</Card.Text>
              <Card.Title className="m-0 fs-6">
                <FiClock></FiClock> 0
              </Card.Title>
              <Card.Title className="mt-1 fs-6">
                <FaStar /> 10
              </Card.Title>
            </Card.Body>
          </div>
        </Col>

        <Col>
          <div className="d-flex bg-white m-3">
            <div className="bg-light p-4 d-flex align-items-center">
              <FaMoneyCheckAlt className="fs-1 text-black" />
            </div>
            <Card.Body>
              <Card.Text className="m-0">Last Week</Card.Text>
              <Card.Title className="m-0 fs-6">
                <FiClock></FiClock> 5
              </Card.Title>
              <Card.Title className="mt-1 fs-6">
                <FaStar /> 53
              </Card.Title>
            </Card.Body>
          </div>
        </Col>

        <Col>
          <div className="d-flex bg-white m-3">
            <div className="bg-light p-4 d-flex align-items-center">
              <FaMoneyCheckAlt className="fs-1 text-black" />
            </div>
            <Card.Body>
              <Card.Text className="m-0">New Start</Card.Text>
              <Card.Title className="m-0 fs-6">
                <FiClock></FiClock> 6
              </Card.Title>
              <Card.Title className="mt-1 fs-6">
                <FaStar /> 33
              </Card.Title>
            </Card.Body>
          </div>
        </Col>
          </Row>
          
          {/* all wallet */}

          <PaymentWallet></PaymentWallet>
    </div>
  );
};

export default Payment;
