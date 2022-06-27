import Link from 'next/link';
import { Container } from 'react-bootstrap';
import { AiFillCar } from 'react-icons/ai';
import { FaDog } from 'react-icons/fa';
import { GiTShirt } from 'react-icons/gi';
import { GoDeviceMobile } from 'react-icons/go';
import { IoHome } from 'react-icons/io5';
import { MdMonitor, MdOutlineChair } from 'react-icons/md';
import { useSelector } from 'react-redux';

const Category = () => {
  const { categories } = useSelector((state) => state.categories);
  console.log('categories: ', categories);
  return (
    <div>
      <Container>
        <div className="main_container">
          <h5>Browse items by category</h5>
          <div className="category mb-5" md={2} lg={4}>
            <Link href="" className="category_item">
              <a>
                <div className="category_icon">
                  <MdMonitor />
                </div>
                <div className="category_title">
                  <div className="category_name">Electronics</div>
                  <div className="category_quantity">
                    122 <span>ads</span>
                  </div>
                </div>
              </a>
            </Link>
            <Link href="" className="category_item">
              <a>
                {' '}
                <div className="category_icon">
                  <MdOutlineChair />
                </div>
                <div className="category_title">
                  <div className="category_name">Home & Living</div>
                  <div className="category_quantity">
                    122 <span>ads</span>
                  </div>
                </div>
              </a>
            </Link>
            <Link href="" className="category_item">
              <a>
                {' '}
                <div className="category_icon">
                  <AiFillCar />
                </div>
                <div className="category_title">
                  <div className="category_name">Vehicles</div>
                  <div className="category_quantity">
                    122 <span>ads</span>
                  </div>
                </div>
              </a>
            </Link>
            <Link href="" className="category_item">
              <a>
                <div className="category_icon">
                  <FaDog />
                </div>
                <div className="category_title">
                  <div className="category_name"> Pets & Animals</div>
                  <div className="category_quantity">
                    122 <span>ads</span>
                  </div>
                </div>
              </a>
            </Link>
            <Link href="" className="category_item">
              <a>
                {' '}
                <div className="category_icon">
                  <IoHome />
                </div>
                <div className="category_title">
                  <div className="category_name"> Property</div>
                  <div className="category_quantity">
                    122 <span>ads</span>
                  </div>
                </div>
              </a>
            </Link>

            <Link href="" className="category_item">
              <a>
                <div className="category_icon">
                  <GiTShirt />
                </div>
                <div className="category_title">
                  <div className="category_name">
                    {' '}
                    Men&apos;s Fashion & Grooming
                  </div>
                  <div className="category_quantity">
                    122 <span>ads</span>
                  </div>
                </div>
              </a>
            </Link>

            {/* <Link href="" className="category_item">
              <div className="category_icon">
                <GiLargeDress />
              </div>
              <div className="category_title">
                <div className="category_name"> Women's Fashion & Beauty</div>
                <div className="category_quantity">
                  122 <span>ads</span>
                </div>
              </div>
            </Link>

            <Link href="" className="category_item">
              <div className="category_icon">
                <IoFootball />
              </div>
              <div className="category_title">
                <div className="category_name"> Hobbies, Sports & Kids</div>
                <div className="category_quantity">
                  122 <span>ads</span>
                </div>
              </div>
            </Link>
            <Link href="" className="category_item">
              <div className="category_icon">
                <FaIndustry />
              </div>
              <div className="category_title">
                <div className="category_name"> Business & Industry</div>
                <div className="category_quantity">
                  122 <span>ads</span>
                </div>
              </div>
            </Link>
            <Link href="" className="category_item">
              <div className="category_icon">
                <FaGraduationCap />
              </div>
              <div className="category_title">
                <div className="category_name"> Education</div>
                <div className="category_quantity">
                  122 <span>ads</span>
                </div>
              </div>
            </Link>

            <Link href="" className="category_item">
              <div className="category_icon">
                <GiCrystalGrowth />
              </div>
              <div className="category_title">
                <div className="category_name"> Essentials</div>
                <div className="category_quantity">
                  122 <span>ads</span>
                </div>
              </div>
            </Link>
            <Link href="" className="category_item">
              <div className="category_icon">
                <MdWork />
              </div>
              <div className="category_title">
                <div className="category_name"> Jobs</div>
                <div className="category_quantity">
                  122 <span>ads</span>
                </div>
              </div>
            </Link>
            <Link href="" className="category_item">
              <div className="category_icon">
                <MdDesignServices />
              </div>
              <div className="category_title">
                <div className="category_name"> Services</div>
                <div className="category_quantity">
                  122 <span>ads</span>
                </div>
              </div>
            </Link>
            <Link href="" className="category_item">
              <div className="category_icon">
                <GiPalmTree />
              </div>
              <div className="category_title">
                <div className="category_name"> Agriculture</div>
                <div className="category_quantity">
                  122 <span>ads</span>
                </div>
              </div>
            </Link>
            <Link href="" className="category_item">
              <div className="category_icon">
                <MdHomeWork />
              </div>
              <div className="category_title">
                <div className="category_name"> Overseas Jobs</div>
                <div className="category_quantity">
                  122 <span>ads</span>
                </div>
              </div>
            </Link> */}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Category;
