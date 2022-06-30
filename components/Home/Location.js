import Link from 'next/link';
import React from 'react';
import { useSelector } from 'react-redux';
// import './Location.css';

const Location = () => {
  const { locations } = useSelector((state) => state.locations);
  console.log('locations:' + locations);

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
                    <div className="state_name">{st?.name}</div>
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
