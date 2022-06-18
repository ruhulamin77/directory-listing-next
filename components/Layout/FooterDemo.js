import Link from 'next/link';
import React from 'react';
import {
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from 'react-icons/fa';

export default function FooterDemo() {
  return (
    <footer className="bg-light">
      {/* <!-- START THE SOCIAL MEDIA CONTENT  --> */}
      <div className="footer-sm bg-white border border-y">
        <div className="container mx-auto">
          <div className="row py-4 text-center">
            <div className="col-lg-5 col-md-6 mb-4 mb-md-0">
              connect with us on social media
            </div>
            <div className="col-lg-7 col-md-6 d-flex gap-3 justify-content-center">
              {[
                {
                  icon: <FaFacebookF className='fs-4' />,
                  url: '#',
                  name: 'Facebook',
                },
                {
                  icon: <FaGithub className='fs-4' />,
                  url: '#',
                  name: 'Github',
                },
                {
                  icon: <FaInstagram className='fs-4' />,
                  url: '#',
                  name: 'Instagram',
                },
                {
                  icon: <FaLinkedin className='fs-4' />,
                  url: '#',
                  name: 'Linkedin',
                },
              ].map((item) => (
                <Link href={item.url} key={item.name}>
                  <a className="text-danger">{item.icon}</a>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* <!-- START THE CONTENT FOR THE CAMPANY INFO --> */}
      <div className="container mt-5">
        <div className="row justify-content-center mt-3 pb-3">
          <div className="col-12 col-sm-6 col-lg-6 mx-auto">
            <h5 className="text-capitalize fw-bold">Softfy</h5>
            <hr
              className="bg-danger d-inline-block my-3"
              style={{ width: '60px', height: '2px' }}
            />
            <p className="lh-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
              ex obcaecati blanditiis reprehenderit ab mollitia voluptatem
              consectetur?
            </p>
          </div>
          <div className="col-12 col-sm-6 col-lg-2 mb-4 mx-auto">
            <h5 className="text-capitalize fw-bold">Products</h5>
            <hr
              className="bg-danger d-inline-block my-3"
              style={{ width: '60px', height: '2px' }}
            />
            <ul className="list-inline campany-list">
              <li>
                <a href="#">Lorem ipsum</a>
              </li>
              <li>
                <a href="#">Lorem ipsum</a>
              </li>
              <li>
                <a href="#">Lorem ipsum</a>
              </li>
              <li>
                <a href="#">Lorem ipsum</a>
              </li>
            </ul>
          </div>
          <div className="col-12 col-sm-6 col-lg-2 mb-4 mx-auto">
            <h5 className="text-capitalize fw-bold">useful links</h5>
            <hr
              className="bg-danger d-inline-block my-3"
              style={{ width: '60px', height: '2px' }}
            />
            <ul className="list-inline campany-list">
              <li>
                <a href="#"> Your Account</a>
              </li>
              <li>
                <a href="#">Become an Affiliate</a>
              </li>
              <li>
                <a href="#">create an account</a>
              </li>
              <li>
                <a href="#">Help</a>
              </li>
            </ul>
          </div>
          <div className="col-12 col-sm-6 col-lg-2 mb-4 mx-auto">
            <h5 className="text-capitalize fw-bold">contact</h5>
            <hr
              className="bg-danger d-inline-block my-3"
              style={{ width: '60px', height: '2px' }}
            />
            <ul className="list-inline campany-list">
              <li>
                <a href="#">Lorem ipsum</a>
              </li>
              <li>
                <a href="#">Lorem ipsum</a>
              </li>
              <li>
                <a href="#">Lorem ipsum</a>
              </li>
              <li>
                <a href="#">Lorem ipsum</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* <!-- START THE COPYRIGHT INFO  --> */}
      <div className="bg-danger pt-3 pb-3">
        <div className="container">
          <div className="row text-center text-white">
            <div className="col-12">
              <div>
                &copy; Copyright 2021{' '}
                <Link href="/">
                  <a className="text-warning">Softfy</a>
                </Link>{' '}
                | Created by{' '}
                <Link href="/">
                  <a className="text-warning">Softfy</a>
                </Link>
                {/* <a href="http://codewithpatrick.com" target="_blank">
                  Muriungi
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
