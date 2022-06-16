import React, { useState } from "react";
import { Button, Card, Col, ListGroup, Row } from "react-bootstrap";
import DashboardNav from "../DashboardNav/DashboardNav";
import "./package.css";
import { BsFillCloudCheckFill } from "react-icons/bs";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import PackageModal from "./PackageModal";
import { Link } from "react-router-dom";

const Packages = () => {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const packages = [
    {
      title: "Basic",
      price: 5,
      features: [
        "10 Posts",
        " 24hours support",
        " Upload high quality",
        " Quality Image",
      ],
    },
    {
      title: "Standard",
      price: 10,
      features: [
        "20 Posts",
        " 24hours support",
        " Upload high quality",
        " Quality Image",
      ],
    },
    {
      title: "Professional",
      price: 20,
      features: [
        "50 Posts",
        " 24hours support",
        " Upload high quality",
        " Quality Image",
      ],
    },
  ];

  return (
    <div>
      <DashboardNav title="Packages"></DashboardNav>
      {/* <div
        className="bg-img text-align-center  d-flex align-items-center justify-content-center"
        style={{
          height: "20rem",          
          color: "white",
          backgroundColor: "#145CA6",
        
        }}
      >
        <h3>Find simple plans for Get Started</h3>
      </div> */}
      <div className=" my-5  d-flex align-items-center justify-content-center">
        <Row xs={1} md={3} className="g-5">
          {" "}
          {packages.map((pack) => (
            <Col className="  d-flex align-items-center justify-content-center">
              <Card
                style={{
                  width: "18rem",
                  height: "25rem",

                  marginTop: "-30px",
                }}
              >
                <Card.Body>
                  <p className="text-center fw-bold my-1">{pack.title}</p>
                  <div
                    className="border border-primary border-2  rounded"
                    style={{
                      marginLeft: 110,
                      marginRight: 110,
                    }}
                  ></div>
                  <div className="text-center my-3">
                    <h2>
                      ${pack.price}
                      <span className="fs-6 fw-normal">/month</span>
                    </h2>

                    <Button className="mt-2" variant="outline-primary">
                      Get Started
                    </Button>
                  </div>
                  <Card.Text>
                    <ListGroup>
                      {pack.features.map((e) => (
                        <ListGroup.Item className="border-0">
                          <BsFillCloudCheckFill className="text-primary" /> {e}
                        </ListGroup.Item>
                      ))}
                    </ListGroup>
                  </Card.Text>
                  <div className="  d-flex align-items-center justify-content-center">
                    <Button
                      as={Link}
                      to={`/dashboard/packages/${pack.title}`}
                      onClick={handleShow}
                      className="mx-2"
                      variant="warning"
                    >
                      <FaEdit />
                      {" Edit "}
                    </Button>
                    <Button className="mx-2" variant="danger">
                      <MdDelete />
                      {" Delete "}
                    </Button>
                  </div>
                </Card.Body>
              </Card>
              {console.log("pack", pack)}

              <PackageModal pack={pack} show={show} setShow={setShow} />
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default Packages;
