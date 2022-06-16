import React from "react";
import { Button, Col, FormControl, Row, Table } from "react-bootstrap";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
const UsersWallet = () => {
  return (
    <div className="p-2 bg-white m-2">
      <h6 className="my-2">All Wallet</h6>
      <FormControl placeholder="Search..." className="my-2" />
      <Table striped bordered hover responsive size="sm">
        <thead className="text-center">
          <tr>
            <th>User ID</th>
            <th>Name</th>
            <th>User Email</th>
            <th>Amount</th>
            <th>Created</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto@mdo.com</td>
            <td>30 Points</td>
            <td>2022-05-18</td>
            <td>
              <Row sm="1" md="2" className="g-1 text-center">
                <Col>
                  <Button variant="warning">
                    <FaEdit />{" "}
                  </Button>
                </Col>
                <Col>
                  <Button variant="danger">
                    <MdDelete />{" "}
                  </Button>
                </Col>
              </Row>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>Mark</td>
            <td>Otto@mdo.com</td>
            <td>30 Points</td>
            <td>2022-05-18</td>
            <td>
              {" "}
              <Row sm="1" md="2" className="g-1 text-center">
                <Col>
                  <Button variant="warning">
                    <FaEdit />{" Edit "}
                  </Button>
                </Col>
                <Col>
                  <Button variant="danger">
                    <MdDelete />{" "}
                  </Button>
                </Col>
              </Row>
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td>Mark</td>
            <td>Otto@mdo.com</td>
            <td>30 Points</td>
            <td>2022-05-18</td>
            <td>
              {" "}
              <Row sm="1" md="2" className="g-1 text-center">
                <Col>
                  <Button variant="warning">
                    <FaEdit />{" "}
                  </Button>
                </Col>
                <Col>
                  <Button variant="danger">
                    <MdDelete />{" "}
                  </Button>
                </Col>
              </Row>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default UsersWallet;
