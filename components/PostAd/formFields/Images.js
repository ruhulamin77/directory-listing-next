import React, { useState } from 'react';
import { useEffect } from 'react';
import { Draggable, Droppable, DragDropContext } from 'react-beautiful-dnd';
import { BsImages, BsXLg } from 'react-icons/bs';

const Images = ({ setData }) => {
  const [images, setImages] = useState([]);
  const [imagesPreview, setImagesPreview] = useState([]);

  useEffect(() => {
    setData('images', images);
  }, [images]);

  const reorder = (images, startIndex, endIndex) => {
    const result = Array.from(images);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    return result;
  };
  const onEnd = (result) => {
    setImagesPreview(
      reorder(imagesPreview, result.source.index, result.destination.index)
    );
    setImages(reorder(images, result.source.index, result.destination.index));
  };

  return (
    <div className="pb-4">
      <h5>
        Select Images<span className="text-danger">*</span>{' '}
      </h5>

      <DragDropContext onDragEnd={onEnd}>
        <Droppable droppableId="123" direction="horizontal">
          {(provided, snapshot) => (
            <div
              ref={provided.innerRef}
              className="mb-3 w-100 d-flex gap-2 pt-3 overflow-auto"
            >
              {imagesPreview.map((image, index) => (
                <Draggable
                  draggableId={index + ''}
                  key={index + ''}
                  index={index}
                >
                  {(provided, snapshot) => (
                    <div
                      className="mt-0 d-inline-block me-3"
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      {/* show images preview */}
                      <div
                        className="position-relative d-flex justify-content-center align-items-center bg-white"
                        style={{
                          width: '92px',
                          height: '92px',
                          border: '2px solid #a7a7a7',
                          borderStyle: 'dashed',
                        }}
                      >
                        <img
                          src={image}
                          alt={image + 'preview'}
                          style={{
                            objectFit: 'contain',
                            width: '100%',
                            height: '100%',
                          }}
                        />
                        <button
                          type="button"
                          className="btn btn-sm rounded-pill btn-danger position-absolute"
                          style={{
                            top: '-10px',
                            right: '-10px',
                          }}
                          onClick={() => {
                            setImagesPreview(
                              imagesPreview.filter((_, i) => i !== index)
                            );
                            setImages(images.filter((_, i) => i !== index));
                          }}
                        >
                          <BsXLg />
                        </button>
                      </div>
                    </div>
                  )}
                </Draggable>
              ))}
              <div className="d-flex gap-3 position-relative">
                {5 - imagesPreview.length > 0 &&
                  [...Array(5 - imagesPreview.length)].map((_, index) => (
                    <div
                      className={`card ${
                        index !== 0 ? 'opacity-50 pe-none' : ''
                      }`}
                      key={index}
                      style={{
                        width: '92px',
                        height: '92px',
                        border: `2px dashed ${
                          index !== 0 ? '#a7a7a7' : '#0B5ED7'
                        }`,
                        borderStyle: 'dashed',
                      }}
                    >
                      {/* images select */}
                      <div className="w-100 h-100">
                        <label
                          htmlFor="images"
                          className="w-100 h-100 d-flex gap-1 flex-column align-items-center justify-content-center"
                          style={{ cursor: 'pointer' }}
                        >
                          <BsImages
                            className={`fs-3 ${
                              index === 0 ? 'text-primary' : 'text-muted'
                            }`}
                          />
                          <span
                            className={
                              index === 0 ? 'text-primary' : 'text-muted'
                            }
                            style={{ fontSize: '12px' }}
                          >
                            Add Image
                          </span>
                        </label>
                        <input
                          type="file"
                          name="images"
                          disabled={index !== 0}
                          id="images"
                          accept="image/jpeg,image/png,image/jpg"
                          multiple={true}
                          className="form-control-file visually-hidden"
                          onChange={(e) => {
                            if (
                              e.target.files.length + imagesPreview.length >
                              5
                            ) {
                              setImages(
                                images.concat(
                                  [...e.target.files]
                                    .slice(0, 5 - imagesPreview.length)
                                    .map((file) => file)
                                )
                              );
                              setImagesPreview(
                                imagesPreview.concat(
                                  [...e.target.files]
                                    .slice(0, 5 - imagesPreview.length)
                                    .map((file) => URL.createObjectURL(file))
                                )
                              );
                            } else {
                              const images = [...e.target.files];
                              setImages(images);
                              setImagesPreview([
                                ...imagesPreview,
                                ...images.map((image) =>
                                  URL.createObjectURL(image)
                                ),
                              ]);
                            }
                          }}
                        />
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          )}
        </Droppable>
      </DragDropContext>

      <span className="text-primary fs-6">
        {' '}
        Images: {imagesPreview.length}/5
      </span>
    </div>
  );
};

export default Images;
