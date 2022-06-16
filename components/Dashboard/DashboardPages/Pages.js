import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import DashboardNav from "../DashboardNav/DashboardNav";

const Pages = () => {


    // handle header
    const handleHeader = () => {
        
    }


  return (
    <div>
      <DashboardNav title="Pages" />
      <Row xs={1} md={2} className="g-4">
        <Col>
          <div className="bg-white p-4 ">
            <h4>Header</h4>
            <Form>
              <div className="mb-3">
              {['Page 1', 'Page 2'].map((label) => (
  
     
  <Form.Check className=''
    
    label={label}
    name="group1"
    type={"checkbox"}
              id={`${label}`}
              onClick={handleHeader}
  />
 

))}
              </div>
              <Button>Submit</Button>
            </Form>
          </div>
        </Col>
        <Col>
          <div className="bg-white p-4 me-1">
            <h4>Footer</h4>
            <Form>
              <div className="mb-3">
                <Form.Check id=" footer checkbox 1 " label="page 1 " />
                <Form.Check id=" footer checkbox 2 " label="page 2 " />
              </div>
              <Button>Submit</Button>
            </Form>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Pages;
