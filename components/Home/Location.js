import Link from 'next/link';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { allFilter, getAllPosts } from '../../store/actions/postActions';
// import './Location.css';

const Location = () => {
  const { locations } = useSelector((state) => state.locations);
  console.log('locations:' + locations);

  const dispatch = useDispatch();
  const handleFilter = (state) => {
    const filter = { state };

    dispatch(allFilter(filter));
    dispatch(getAllPosts(filter));
  };

  const { posts, allFilters } = useSelector((state) => state.posts);

  console.log('posts', posts, allFilters);
  return (
    <div className="main_container">
      <div className="location_container ">
        {locations?.map((loc, i) => (
          <div key={i} className="country">
            <div>
              <h5 className="country_heading">{loc?.name}</h5>
              <div className="states_container">
                {loc.state.map((st, i) => (
                  <div key={i} className="state_column">
                    <Link href="/all-ads">

                      <a
                        className="state_name"
                        onClick={() => handleFilter(st.name)}
                      >
                        {st?.name}
                      </a>

                    </Link>
                    <ul>
                      {st.city.map((ct, i) => (
                        <li key={i}>
                          <Link href="">
                            <a>{ct}</a>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      <hr />
    </div>
  );
};
export default Location;
