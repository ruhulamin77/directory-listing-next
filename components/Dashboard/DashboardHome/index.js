import React, { useEffect } from "react";
import { Card, Col, Row } from "react-bootstrap";

import { FaUsers, FaUserAlt } from "react-icons/fa";
import { BsFillFileEarmarkPostFill } from "react-icons/bs";

import { ImStatsBars, ImStatsDots } from "react-icons/im";
import { FiClock } from "react-icons/fi";
import DashboardNav from "../DashboardNav";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getAllPosts } from "../../../store/actions/postActions";
import { TotoalPosts } from "./TotalPosts";
import { TodayPosts } from "./TodayPosts";

const DashboardHome = () => {
    const dispatch=useDispatch()
  const {posts,loading,todayPosts}= useSelector(state=>state.posts)
  console.log("posts", posts)
  console.log("todayPosts", todayPosts)
const date = new Date()

console.log("date", date)
  useEffect(()=>{
    dispatch(getAllPosts({}))
  },[])
  return (
    <div>
      <DashboardNav title="Dashboard"></DashboardNav>

      <Row sm="1" md="2" lg="4" className="g-2">
        <Col>
          <div className="d-flex bg-white m-3">
            <div className="bg-success p-4 d-flex align-items-center">
              <FaUsers className="fs-1 text-white" />
            </div>
            <Card.Body>
              <Card.Text className="m-0">Total Active Users</Card.Text>
              <Card.Title>5023</Card.Title>
            </Card.Body>
          </div>
        </Col>
        <Col>
          <TodayPosts todayPosts={todayPosts} loading={loading}/>
        </Col>

        <Col>
          <TotoalPosts posts={posts}/>
        </Col>

        <Col>
          <div className="d-flex bg-white m-3">
            <div className="bg-black p-4 d-flex align-items-center">
              <BsFillFileEarmarkPostFill className="fs-1 text-white" />
            </div>
            <Card.Body>
              <Card.Text className="m-0">Total Points</Card.Text>
              <Card.Title>2350</Card.Title>
            </Card.Body>
          </div>
        </Col>
      </Row>
      {/* user conditions */}
      <Row sm="1" md="2" lg="4" className="g-2">
        <Col>
          <div className="d-flex bg-white m-3">
            <div className="bg-light p-4 d-flex align-items-center">
              <ImStatsBars className="fs-1 text-black" />
            </div>
            <Card.Body>
              <Card.Text className="m-0">New Users</Card.Text>
              <Card.Title className="m-0 fs-6">
                <FiClock></FiClock> Today
              </Card.Title>
              <Card.Title className="mt-1 fs-6">
                <FaUserAlt /> 0
              </Card.Title>
            </Card.Body>
          </div>
        </Col>
        <Col>
          <div className="d-flex bg-white m-3">
            <div className="bg-light p-4 d-flex align-items-center">
              <ImStatsDots className="fs-1 text-black" />
            </div>
            <Card.Body>
              <Card.Text className="m-0">New Users</Card.Text>
              <Card.Title className="m-0 fs-6">
                <FiClock></FiClock> Last Day
              </Card.Title>
              <Card.Title className="mt-1 fs-6">
                <FaUserAlt /> 10
              </Card.Title>
            </Card.Body>
          </div>
        </Col>

        <Col>
          <div className="d-flex bg-white m-3">
            <div className="bg-light p-4 d-flex align-items-center">
              <ImStatsBars className="fs-1 text-black" />
            </div>
            <Card.Body>
              <Card.Text className="m-0">New Users</Card.Text>
              <Card.Title className="m-0 fs-6">
                <FiClock></FiClock> Last Week
              </Card.Title>
              <Card.Title className="mt-1 fs-6">
                <FaUserAlt /> 53
              </Card.Title>
            </Card.Body>
          </div>
        </Col>

        <Col>
          <div className="d-flex bg-white m-3">
            <div className="bg-light p-4 d-flex align-items-center">
              <ImStatsDots className="fs-1 text-black" />
            </div>
            <Card.Body>
              <Card.Text className="m-0">New Users</Card.Text>
              <Card.Title className="m-0 fs-6">
                <FiClock></FiClock> Last Month
              </Card.Title>
              <Card.Title className="mt-1 fs-6">
                <FaUserAlt /> 307
              </Card.Title>
            </Card.Body>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default DashboardHome;
