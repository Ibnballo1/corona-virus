/* eslint-disable camelcase */
/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
/* eslint-disable react/no-array-index-key */
import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const CountryDetails = () => {
  const stateData = useSelector((state) => state.corona);
  // const newStateData = stateData.slice(0, 50);
  const { country } = useParams();
  return (
    <div className="details">
      {
        stateData.map((eachCountry, index) => {
          if (eachCountry.country === country) {
            const {
              continent,
              confirmed,
              capital_city,
              deaths,
              recovered,
              updated,
            } = eachCountry;
            return (
              <div key={index}>
                <section className="countryConfirmed">
                  <div className="img">
                    <img src="map1.png" alt="Continent Map" />
                  </div>
                  <div>
                    <h2 className="countrydetail">{country.toUpperCase()}</h2>
                    <p className="confirmDetail">{confirmed}</p>
                  </div>
                </section>
                <section className="countryDetails">
                  <h4 className="titleh4">Country Breakdown</h4>
                  <div className="allDetails">
                    <h4>Continent</h4>
                    <p>{continent}</p>
                  </div>
                  <div className="allDetails">
                    <h4>Capital-city</h4>
                    <p>{capital_city}</p>
                  </div>
                  <div className="allDetails">
                    <h4>Deaths</h4>
                    <p>{deaths}</p>
                  </div>
                  <div className="allDetails">
                    <h4>Recovered</h4>
                    <p>{recovered}</p>
                  </div>
                  <div className="allDetails">
                    <h4>Updated</h4>
                    <p>{updated}</p>
                  </div>
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
