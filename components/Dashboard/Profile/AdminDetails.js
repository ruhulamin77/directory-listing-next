import React from 'react';
import { Button,  Col, Form, FormGroup, FormSelect, ListGroup, ListGroupItem, Row } from 'react-bootstrap';



const AdminDetails = () => {
    return (
        <div>
           
      <h6 className='p-3 fw-bold'>Account Details</h6>
    
    <ListGroup >
      <ListGroupItem className="p-3">
        <Row>
          <Col>
            <Form>
              <Row xs={1} md={2} className="g-4">
                {/* First Name */}
                <Col  >
                <Form.Label className="pt-3" >First Name</Form.Label>
                  <Form.Control
                    id="feFirstName"
                    placeholder="First Name"
                    defaultValue="Imtiaz"
                    onChange={() => {}}
                  />
                </Col>
                {/* Last Name */}
                <Col  >
                <Form.Label className="pt-3">Last Name</Form.Label>
                  <Form.Control
                    id="feLastName"
                    placeholder="Last Name"
                    defaultValue="Mahmud"
                    onChange={() => {}}
                  />
                </Col>
              </Row>
              <Row xs={1} md={2} className="g-4">
                {/* Email */}
                <Col>
                <Form.Label className="pt-3">Email</Form.Label>
                  <Form.Control
                    type="email"
                    id="feEmail"
                    placeholder="Email Address"
                    defaultValue="imtiazmahmod@softfy.com"
                    onChange={() => {}}
                    autoComplete="email"
                  />
                </Col>
                {/* Password */}
                <Col >
                <Form.Label className="pt-3">Password</Form.Label>
                  <Form.Control
                    type="password"
                    id="fePassword"
                    placeholder="Password"
                    defaultValue="EX@MPL#P@$$w0RD"
                    onChange={() => {}}
                    autoComplete="current-password"
                  />
                </Col>
              </Row>
              <FormGroup>
              <Form.Label className="pt-3">Address</Form.Label>
                <Form.Control
                  id="feAddress"
                  placeholder="Address"
                  defaultValue="1234 cox's bazar"
                  onChange={() => {}}
                />
              </FormGroup>
              <Row form>
                {/* State */}
                <Col>
                <Form.Label className="pt-3">State</Form.Label>
                  <Form.Control
                    id="feState"
                    placeholder="Dhaka"
                    onChange={() => {}}
                  />
                </Col>
                {/* State */}
                <Col>
                <Form.Label className="pt-3">City</Form.Label>
                  <FormSelect id="feInputCity">
                    <option>Choose...</option>
                    <option>Gazipur</option>
                    <option>Mirpur</option>
                  </FormSelect>
                </Col>
                {/* Post Code */}
                <Col>
                <Form.Label className="pt-3">Post Code</Form.Label>
                  <Form.Control
                    id="feZipCode"
                    placeholder="1234"
                    onChange={() => {}}
                  />
                </Col>
              </Row>
              <Row form>
                {/* Description */}
                <Col >
                <Form.Label className="pt-3">Description</Form.Label>
                                        <Form.Control as="textarea" id="feDescription"
                  placeholder='Type your Feelings'                          rows="5" />
                </Col>
              </Row>
              <Button type="submit" className='mt-3'>Update Account</Button>
            </Form>
          </Col>
        </Row>
      </ListGroupItem>
    </ListGroup>
 
        </div>
    );
};

export default AdminDetails;