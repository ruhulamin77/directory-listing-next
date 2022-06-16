import React from "react";
import {
  Button,
  Col,
  Container,
  FormControl,
  InputGroup,
  Row,
} from "react-bootstrap";

const SearchBanner = () => {
  return (
    <Container>
      <Row className="p-5">
        <Col>
          <InputGroup className="mb-3 w-50 mx-auto ">
            <FormControl
              placeholder="what are you looking for?"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
            <Button variant="warning" id="button-addon2">
              Search
            </Button>
          </InputGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default SearchBanner;
