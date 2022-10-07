/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
/* eslint-disable react/no-array-index-key */
import React from 'react';
// import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const CountryDetails = () => {
  const stateData = useSelector((state) => state.corona);
  const newStateData = stateData.slice(0, 50);
  const { country } = useParams();
  return (
    <div>
      {/* <h2>{country}</h2> */}
      {
        newStateData.map((eachCountry, index) => {
          if (eachCountry.country === country) {
            // console.log('eachCountry is ', eachCountry, ' and country is ', country);
            const {
              continent,
              confirmed,
              capitalCity,
              deaths,
              recovered,
              updated,
            } = eachCountry;
            return (
              <div key={index}>
                <section>
                  <h2>{country}</h2>
                  <p>{confirmed}</p>
                </section>
                <h4>Country Breakdown</h4>
                <section className="countryDetails">
                  <table border={1}>
                    <tbody>
                      <tr>
                        <td>Continent</td>
                        <td>{continent}</td>
                      </tr>
                      <tr>
                        <td>Capital-city</td>
                        <td>{capitalCity}</td>
                      </tr>
                      <tr>
                        <td>Deaths</td>
                        <td>{deaths}</td>
                      </tr>
                      <tr>
                        <td>Recovered</td>
                        <td>{recovered}</td>
                      </tr>
                      <tr>
                        <td>Updated</td>
                        <td>{updated}</td>
                      </tr>
                    </tbody>
                  </table>
                </section>
              </div>
            );
          }
        })
      }
    </div>
  );
};

export default CountryDetails;
