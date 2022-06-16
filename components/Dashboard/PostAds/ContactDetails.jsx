import React from 'react';
import { Form, FormControl, FormLabel, InputGroup } from 'react-bootstrap';

const ContactDetails = () => {
  return (
    <div className="my-3">
      {/* <div className="fw-bold">Contact details</div> */}

      <Form.Label htmlhtmlFor="name">Name</Form.Label>
      <InputGroup className="mb-3">
        <FormControl
          placeholder="Seller name"
          aria-label="Seller Name"
          id="name"
          aria-describedby="basic-addon1"
          defaultValue={'Ruhul Amin'}
        />
      </InputGroup>
      <Form.Label htmlhtmlFor="email">Email</Form.Label>
      <InputGroup className="mb-3">
        <FormControl
          id="email"
          placeholder="Seller name"
          aria-label="Seller Name"
          aria-describedby="basic-addon1"
          defaultValue={'ruhulaminbd99@gmail.com'}
        />
      </InputGroup>
      <Form.Label htmlhtmlFor="phone">Phone no</Form.Label>
      <InputGroup className="mb-3">
        <FormControl
          id="phone"
          placeholder="Phone no"
          aria-label="Phone no"
          aria-describedby="basic-addon1"
        />
      </InputGroup>
      {/* <div className=" my-3">
        <div className="text-muted">Name</div>
        <h6>Mosharrof Hosen Munna</h6>
        <input type="text" defaultValue={"Mosharrof Hosen Munna"} />
      </div>
      <div className=" my-3">
        <div className="text-muted">Email</div>
        <h6>mosharrofmunna0@gmail.com</h6>
        <input type="text" defaultValue={"mosharrofmunna0@gmail.com"} />
      </div>
      <div className=" my-3">
        <div className="text-muted">Add phone no</div>
        <input type="text" />
      </div> */}
    </div>
  );
};

export default ContactDetails;
