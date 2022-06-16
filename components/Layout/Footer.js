import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
// import playStore from "../../images/google-play.png";
// import appStore from "../../images/app-store.png";

import { AiFillFacebook } from 'react-icons/ai';

const Footer = () => {
  return (
    <div>
      <div className="hr_footer" />
      <div className="main_container">
        <div className="footer_container mt-5">
          <Row>
            <Col xs={12} sm={6} md={3} lg={3} className="footer_left me-5 mb-3">
              <h6>Download our app</h6>
              <Row xs={2} sm={2} md={2} lg={2} className="footer_app">
                <a href=""> {/* <img src={playStore} alt="play store" /> */}</a>
                <a href="">{/* <img src={appStore} alt="app store" /> */}</a>
              </Row>
              <h6 className="mt-4">Connect with</h6>
              <div className="fb_logo">
                <AiFillFacebook /> Like us on facebook
              </div>
              <h6 className="mt-3">Other countries</h6>
              <div>
                <a href="www">Sri Lanka</a>
              </div>
            </Col>

            <Col xs={12} sm={12} md={8} lg={8} className="footer_right">
              <Row xs={2} sm={4} md={4} lg={4}>
                <Col>
                  <h6>More from Bikroy</h6>
                  <ul>
                    <li>
                      <a href="">Sell Fast</a>
                    </li>
                    <li>
                      <a href="">Doorstep Delivery</a>
                    </li>
                    <li>
                      <a href="">Membership</a>
                    </li>
                    <li>
                      <a href="">Banner Ads</a>
                    </li>
                    <li>
                      <a href="">Ads Promotions</a>
                    </li>
                    <li>
                      <a href="">Staffing Solutions</a>
                    </li>
                  </ul>
                </Col>
                <Col>
                  <h6>Help & Support</h6>
                  <ul>
                    <li>
                      <a href="">FAQ</a>
                    </li>
                    <li>
                      <a href="">Stay safe</a>
                    </li>
                    <li>
                      <a href="">Contact Us</a>
                    </li>
                  </ul>
                </Col>
                <Col>
                  <h6>Follow Bikroy</h6>
                  <ul>
                    <li>
                      <a href="">Blog</a>
                    </li>
                    <li>
                      <a href="">Facebook</a>
                    </li>
                    <li>
                      <a href="">Twitter</a>
                    </li>
                    <li>
                      <a href="">Youtube</a>
                    </li>
                  </ul>
                </Col>
                <Col>
                  <h6>About Bikroy</h6>
                  <ul>
                    <li>
                      <a href="">About Us</a>
                    </li>
                    <li>
                      <a href="">Careers</a>
                    </li>
                    <li>
                      <a href="">Terms and Conditions</a>
                    </li>
                    <li>
                      <a href="">Privacy policy</a>
                    </li>
                    <li>
                      <a href="">Sitemap</a>
                    </li>
                  </ul>
                </Col>
              </Row>
            </Col>
          </Row>
          <hr />
        </div>

        <div className="copyright">
          <p>Copyright &copy; Softfy Technologies </p>
          <p>Bikroy.com</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
