import React from "react";
import {
  Button,
  Col,
  Container,
  Dropdown,
  ListGroup,
  Row,
} from "react-bootstrap";
import Header from "../../common/Header";
import { ImShare2 } from "react-icons/im";
import { BsTwitter, BsWhatsapp, BsFacebook } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { FaCopy } from "react-icons/fa";
import { BiUpArrowCircle } from "react-icons/bi";
import { RiForbid2Line } from "react-icons/ri";

import {
  AiTwotoneStar,
  AiTwotonePhone,
  AiOutlineWechat,
  AiFillSafetyCertificate,
} from "react-icons/ai";
import SimilarAd from "../../../Components/SimilarAd";
import Footer from "../../common/Footer";

const SingleAd = () => {
  return (
    <div style={{backgroundColor:"#E7EDEE"}}>
      <Header></Header>
          <Container fluid="lg"  >
        <div className="my-3">
          <img className="w-100 " src="/images/ad.jpg" alt="ad"></img>
        </div>
              <div style={{backgroundColor:"#fff"}} className="p-2">
        {/* title of ad */}
        <div className="d-flex mx-3 justify-content-between">
          <div>
            <h4>49"ORIGINAL SONY BRAVIA SMART LED TV</h4>
            <p>Posted on 09 May 11:35 pm, Banasree, Dhaka</p>
          </div>

          <div className="d-flex  align-items-start">
            <Dropdown>
              <Dropdown.Toggle variant="light" id="dropdown-basic">
                <ImShare2></ImShare2> Share
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item target="_" href="https://www.whatsapp.com/">
                  {" "}
                  <BsWhatsapp></BsWhatsapp> Whatsapp
                </Dropdown.Item>
                <Dropdown.Item href="https://www.facebook.com/">
                  <BsFacebook></BsFacebook> Facebook
                </Dropdown.Item>
                <Dropdown.Item href="https://www.twitter.com/">
                  <BsTwitter></BsTwitter> Twitter
                </Dropdown.Item>
                <Dropdown.Item target="_" href="https://www.gmail.com/">
                  <MdEmail></MdEmail> Email
                </Dropdown.Item>
                <Dropdown.Item>
                  <FaCopy></FaCopy> Copy Link
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Button variant="light">
              <AiTwotoneStar></AiTwotoneStar> Save add
            </Button>
          </div>
        </div>

        <Row>
          {/* image section */}
          <Col xs={6} lg={8}>
            <img
              className="img-fluid"
              src="https://i.bikroy-st.com/49original-sony-bravia-smart-led-tv-for-sale-dhaka/240c059d-2822-4e1d-99b6-a32fb7390483/620/466/fitted.jpg"
              alt=""
            />
            {/* ad details */}
            <h3 className="my-4 text-success">
              Tk 48,000{" "}
              <span className="fs-6 fw-normal text-secondary fst-italic">
                Negotiable
              </span>
            </h3>
            <p>Condition: Used</p>
            <p>Brand: Sony</p>
                      <p>Model: KDL49W660E</p>
                      
                      <div>
                          <h6>Description</h6>
                          <p>টিভি সম্পুর্ন নতুন (৫ দিন ব্যবহৃত)। একবারে অরজিনাল সনি ব্রান্ডের। সাথে সকল কিছু আছে। ইমার্জেন্সি টাকা দরকার বলে বিক্রি করবো। </p>

                          <ul>
                              <li>
                              FHD 1080p Smart LED TV 
                              </li>
                              <li>X-Reality PRO Picture</li>
                              <li>Motion Rate - Native 50Hz</li>
                              <li>49-inch Screen Size</li>
                              <li>Frequency Response: 50/60Hz

                              </li>
                              <li>HDMI x 3, USB x 2</li>
                          </ul>
                      </div>
          </Col>
          {/* owner section */}
          <Col>
            <ListGroup>
              <ListGroup.Item>
                For sale by <span className="fw-bold"> Jannatul Ajmiry</span>{" "}
              </ListGroup.Item>
              <ListGroup.Item className="d-flex ">
                <AiTwotonePhone fontSize={20}></AiTwotonePhone>

                <p className="ms-2">
                  <span className="fw-bold"> 01400XXXXXX </span> <br></br>Click
                  to show phone number{" "}
                </p>
              </ListGroup.Item>
              <ListGroup.Item className="fw-bold">
                <AiOutlineWechat fontSize={25}></AiOutlineWechat> Chat
              </ListGroup.Item>
            </ListGroup>

            <div className="border rounded mt-3 p-3">
              <p className="fw-bold">
                <AiFillSafetyCertificate
                  fontSize={20}
                ></AiFillSafetyCertificate>{" "}
                Safety tips
              </p>
              <ul>
                <li>Avoid offers that look unrealistic</li>
                <li>Chat with seller to clarify item details</li>
                <li>Meet in a safe & public place</li>
                <li>Check the item before buying it</li>
                <li>Don’t pay in advance</li>
                <a href="/">See all safety tips</a>
              </ul>
            </div>
          </Col>
              </Row>
              <hr />
              {/* ad button */}

              <div className="mb-3">
                  <Button variant="warning">
                    <BiUpArrowCircle></BiUpArrowCircle>  Promote this ad
                  </Button>
                  <Button variant="light" className="ms-2">
                    <RiForbid2Line></RiForbid2Line> Report this ad
                  </Button>                  
              </div>
              </div> 
              <SimilarAd></SimilarAd>
          </Container>
          <Footer></Footer>
    </div>
  );
};

export default SingleAd;
