/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Countries = ({ countries, affected }) => (
  <div className="country">
    {
      countries.map((country, index) => (
        <div
          className="eachCountry"
          key={index}
        >
          <Link to={`/${country}`}>
            <span>→</span>
          </Link>
          <h2>{country}</h2>
          <p>{affected[index]}</p>
        </div>
      ))
    }
  </div>
);

Countries.propTypes = {
  countries: PropTypes.array.isRequired,
  affected: PropTypes.array.isRequired,
};

export default Countries;
