import React, { useEffect, useState } from 'react';
import { Button, FormControl, InputGroup, Modal } from 'react-bootstrap';

const EditLocation = (props) => {
  const { country } = props;
  const [editedCountry, setEditedCountry] = useState(country);

  // console.log(country,);
  console.log(editedCountry.countryName);
  const handleChange = (value) => {
    const newEditedCategory = { ...editedCountry };
    newEditedCategory['categoryName'] = value;
    setEditedCountry(newEditedCategory);
  };

  useEffect(() => {
    setEditedCountry(country);
  }, [country]);

  return (
    <div>
      <Modal
        {...props}
        size="md"
        className="shadow-lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Edit Exist Country Name
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* add Country name */}
          <label htmlhtmlFor="" className="mb-2">
            Country Name
          </label>
          <InputGroup className="mb-3">
            <FormControl
              defaultValue={editedCountry.categoryName}
              placeholder="Enter New Country"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
              onChange={(e) => handleChange(e.target.value.trim())}
            />
          </InputGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button className="btn-danger">Delete This Country</Button>
          <Button>Update</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default EditLocation;
