import React, { useState } from "react";
import { BsImages } from "react-icons/bs";
import { faImage } from "@fortawesome/free-solid-svg-icons";
import "./AddImages.css";
import { Draggable, Droppable, DragDropContext } from "react-beautiful-dnd";
import { IoIosCloseCircle } from "react-icons/io";

const AddImages = () => {
  const [images, setImages] = useState([]);

  // upload image functionalities
  const handleImageChange = (files) => {
    setImages([...images, ...files].slice(0, 5));
    if (files.length > 5 || images.length >= 5) {
      alert("You can only upload 5 images");
    }
  };

  // draggable images ordering
  const reorder = (images, startIndex, endIndex) => {
    const result = Array.from(images);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    return result;
  };
  const onEnd = (result) => {
    console.log(result);
    setImages(reorder(images, result.source.index, result.destination.index));
  };

  // remove images
  const removeImages = (img) => {
    const newImages = [...images];
    const restImages = newImages.filter((image) => image !== img);
    setImages(restImages);
  };

  // const imagesArr = images.length > 5 ? images.slice(0, 5) : images;
  return (
    <div className="border-top py-3 border-bottom">
      <div className="mb-2">Select Your Ads Photos (up to 5)</div>
      <label
        role="button"
        htmlFor="ad-images"
        className="p-3 border cursor-pointer shadow-sm mx-auto d-block text-center rounded-3"
      >
        <BsImages className="ms-1 fs-1 cursor-pointer" />
        <div>Add Photos</div>
      </label>
      <input
        onChange={(e) => {
          handleImageChange(e.target.files);
        }}
        className="d-none"
        id="ad-images"
        type="file"
        accept="image/*"
        multiple={true}
        max="5"
      />

      <DragDropContext onDragEnd={onEnd}>
        <Droppable droppableId="123" direction="horizontal">
          {(provided, snapshot) => (
            <div ref={provided.innerRef} className="mt-2 w-100 d-inline-block">
              {images.map((image, index) => (
                <Draggable
                  draggableId={index + ""}
                  key={index + ""}
                  index={index}
                >
                  {(provided, snapshot) => (
                    <div
                      className="mt-0 d-inline-block me-3 "
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      {/* show images preview */}
                      <div className="position-relative">
                        <img
                          className="rounded-3 my-3 shadow "
                          style={{
                            width: "92px",
                            height: "80px",
                            objectFit: "cover",
                            cursor: "default",
                          }}
                          src={URL.createObjectURL(image)}
                          alt=""
                        />
                        {/* image remove icon */}
                        <div
                          onClick={() => removeImages(image)}
                          className="img-remove-icon position-absolute"
                        >
                          <IoIosCloseCircle title="Remove Photo"></IoIosCloseCircle>
                        </div>
                      </div>
                    </div>
                  )}
                </Draggable>
              ))}
              {/* {provided.placeholder} */}
              {images.length ? (
                <p className=" text-muted">
                  You can reorder the images by dragging them.
                </p>
              ) : (
                ""
              )}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export default AddImages;
