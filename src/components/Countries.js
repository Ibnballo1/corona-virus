/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Countries = ({
  countries,
  affected,
  // filteredContinent,
  // filteredCountry,
}) => (
  <div className="country">
    {/* {console.log(filteredContinent)} */}
    {/* {console.log(filteredCountry)} */}
    {
      countries.map((country, index) => (
        <div
          className="eachCountry"
          key={index}
        >
          <Link className="links" to={`/${country}`}>➔</Link>
          <div className="nameNum">
            <h2 className="countryName">{country.toUpperCase()}</h2>
            <p className="numAffected">{affected[index]}</p>
          </div>
        </div>
      ))
    }
  </div>
);

Countries.propTypes = {
  countries: PropTypes.array.isRequired,
  affected: PropTypes.array.isRequired,
  // filteredContinent: PropTypes.array.isRequired,
  // filteredCountry: PropTypes.array.isRequired,
};

export default Countries;
