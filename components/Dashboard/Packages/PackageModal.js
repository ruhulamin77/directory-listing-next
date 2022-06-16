import { useState } from "react";
import { Button, Form, ListGroup, Modal } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { BsFillCloudCheckFill, BsFillPlusCircleFill } from "react-icons/bs";
import { FaEdit } from "react-icons/fa";

const PackageModal = ({ setShow, show, pack }) => {
  // console.log(pack);
  const { packTitle } = useParams();

  console.log(packTitle);
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");

  const [data, setData] = useState({});

  const [feature, setFeature] = useState("");
  const [input, setInput] = useState(false);
  const [value, setValue] = useState("");
  const features = pack?.features;
  const handleClose = () => setShow(false);

  // handle title
  const handleTitle = (e) => {
    const value = e.target.value;
    setTitle(value);
  };
  // handle Price
  const handlePrice = (e) => {
    const value = e.target.value;
    setPrice(value);
  };
  // handle Features

  const handleData = () => {
    const newData = {
      title,
      price,
      feature,
    };
    setData(newData);
    console.log(data);
  };

  // handleEdit
  const [index, setIndex] = useState();
  const handleEdit = (el, index) => {
    setFeature(el);
    setValue(el);
    setInput(true);
    setIndex(index);
  };
  console.log(feature, "index", index);

  // handleChange
  const handleChange = (e) => {
    if (e.target.value) {
      setFeature(e.target.value);
    }
    console.log(e.target.value);
  };

  // handleAdd
  const handleAdd = (e) => {
    const key = e.key;
    if (key === "Enter") {
      setInput(false);
      // feature update
      features[index] = feature;
      console.log(pack.features);
    }
  };
  return (
    <div>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>{pack.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId={pack.title}>
              <Form.Label>Package Title</Form.Label>
              <Form.Control
                type="text"
                defaultValue={pack.title}
                placeholder="Package title"
                autoFocus
                onBlur={handleTitle}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.price">
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="number"
                placeholder="Price"
                defaultValue={pack.price}
                onBlur={handlePrice}
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.features">
              <Form.Label>Features</Form.Label>

              <ListGroup>
                {pack.features.map((el, i) =>
                  input && index === i ? (
                    <div>
                      <Form.Control
                        defaultValue={value}
                        onKeyPress={handleAdd}
                        onChange={handleChange}
                      />{" "}
                    </div>
                  ) : (
                    <ListGroup.Item className="border-0">
                      <BsFillCloudCheckFill className="text-primary" /> {el}{" "}
                      <FaEdit
                        className="cursor-pointer"
                        onClick={() => handleEdit(el, i)}
                      />
                    </ListGroup.Item>
                  )
                )}
                {/* {input && (
                  <div>
                    <Form.Control
                      defaultValue={value}
                      onKeyPress={handleAdd}
                      onChange={handleChange}
                    />{" "}
                  </div>
                )} */}
              </ListGroup>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button type="submit" onClick={handleData} variant="primary">
            Update
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default PackageModal;
