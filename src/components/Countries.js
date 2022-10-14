/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Countries = ({
  continents,
  stateSearchData,
  filteredContinent,
}) => (
  <div className="country">
    {
      (stateSearchData === '' || stateSearchData !== continents) ? ''
        : filteredContinent.map((countries, index) => (
          <div
            className="forEachCountry"
            style={
              (index === 0 || index % 3 === 0 || index % 3 === 1) ? { backgroundColor: '#cf4278' }
                : { backgroundColor: '#ec4c8a' }
            }
            key={index}
          >
            <div className="img">
              <img src="map1.png" alt="Continent Map" />
            </div>
            <div className="eachCountry">
              <Link className="links" to={`/${countries.country}`}>➔</Link>
              <div className="nameNum">
                <h2 className="countryName">{countries.country.toUpperCase()}</h2>
                <p className="numAffected">{countries.confirmed}</p>
              </div>
            </div>
          </div>
        ))
    }
  </div>
);

Countries.propTypes = {
  filteredContinent: PropTypes.array.isRequired,
  stateSearchData: PropTypes.string.isRequired,
  continents: PropTypes.string.isRequired,
};

export default Countries;
