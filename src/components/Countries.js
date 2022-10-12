/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Countries = ({
  // countries,
  // affected,
  text,
  continents,
  // stateData,
  stateSearchData,
  filteredContinent,
//   filteredCountry,
}) => (
  <div className="country">
    {
      (stateSearchData === '' || stateSearchData !== continents) ? text
        : filteredContinent.map((countries, index) => (
          <div
            className="eachCountry"
            key={index}
          >
            <Link className="links" to={`/${countries.country}`}>➔</Link>
            <div className="nameNum">
              <h2 className="countryName">{countries.country.toUpperCase()}</h2>
              <p className="numAffected">{countries.confirmed[index]}</p>
            </div>
          </div>
        ))
    }
  </div>
);

Countries.propTypes = {
  // countries: PropTypes.array.isRequired,
  // affected: PropTypes.array.isRequired,
  filteredContinent: PropTypes.array.isRequired,
  // filteredCountry: PropTypes.array.isRequired,
  // stateData: PropTypes.array.isRequired,
  stateSearchData: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  continents: PropTypes.string.isRequired,
};

export default Countries;
