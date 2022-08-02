
import { BsFillFileEarmarkPostFill } from "react-icons/bs";

import { Card } from "react-bootstrap";

export  const TotoalPosts=({posts})=>{


    return <>
        <div className="d-flex bg-white m-3">
            <div className="bg-warning p-4 d-flex align-items-center">
              <BsFillFileEarmarkPostFill className="fs-1 text-white" />
            </div>
            <Card.Body>
              <Card.Text className="m-0">All Live Post</Card.Text>
              <Card.Title>{posts.length}</Card.Title>
            </Card.Body>
          </div>
    </>
}