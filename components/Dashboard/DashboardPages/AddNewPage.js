import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import DashboardNav from '../DashboardNav/';
import AddImages from '../PostAds/AddImages';

const AddNewPage = () => {
  const [data, setData] = useState({});
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState({});
  const [position, setPosition] = useState('');
  const [images, setImages] = useState([]);
  // title
  const handleTitle = (e) => {
    setTitle(e.target.value);
  };

  // description
  const handleDescription = (e) => {
    setDescription(e.target.value);
  };
  // handle Position
  const handlePosition = (e) => {
    const value = e.target.checked;
    const id = e.target.id;
    // const pos = {}
    // pos[id.toLowerCase()]= value

    const pos = { ...position };

    setPosition(value);
    console.log(position);
  };

  // handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const newData = {
      title,
      description,
      position,
    };

    setData(newData);
    console.log(data);
  };
  return (
    <div>
      <DashboardNav title="Add New Page" />

      <div className="bg-white m-2 rounded-3 p-3 shadow-sm">
        <Form>
          <Form.Group className="mb-3" controlId="title">
            <Form.Label className="fw-bold">Title</Form.Label>
            <Form.Control
              onChange={handleTitle}
              type="text"
              placeholder="Title to be short!"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="description">
            <Form.Label className="fw-bold">Descriptions</Form.Label>
            <Form.Control
              onChange={handleDescription}
              as="textarea"
              type="text"
              rows="5"
              placeholder="Share more details to make effectives"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label className="fw-bold d-block">Position</Form.Label>
            {['Header', 'Footer'].map((label, index) => (
              <Form.Check
                key={label}
                className=""
                inline
                label={label}
                name="group1"
                type={'checkbox'}
                id={`${label}`}
                onClick={handlePosition}
              />
            ))}
          </Form.Group>

          {/* addImage */}
          <AddImages />

          <Button
            onClick={handleSubmit}
            className="mt-3"
            variant="primary"
            type="submit"
          >
            Add New Page
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default AddNewPage;
