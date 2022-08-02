
import { Card, Spinner } from "react-bootstrap";
import { BsFillFileEarmarkPostFill } from "react-icons/bs";

export const TodayPosts =({todayPosts, loading})=>{

    return <div>
        <div className="d-flex bg-white m-3">
            <div className="bg-primary p-4 d-flex align-items-center">
              <BsFillFileEarmarkPostFill className="fs-1 text-white" />
            </div>
            <Card.Body>
              <Card.Text className="m-0">Today Post</Card.Text>
              <Card.Title>{loading
              ? <Spinner animation="border" size="sm" />
              :
                todayPosts.length 
               }</Card.Title>
            </Card.Body>
          </div>
    </div>
}