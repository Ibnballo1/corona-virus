/* eslint-disable react/no-array-index-key */
import React from 'react';
import { useSelector } from 'react-redux';

const Continent = () => {
  const stateData = useSelector((state) => state.corona);
  const newStateData = stateData.slice(0, 10);
  const mostConfirmed = Math.max(...newStateData.map((confirmedCases) => confirmedCases.confirmed));
  const mostAffectedContinent = newStateData.map((confirmedCases, index) => {
    const { continent, confirmed } = confirmedCases;
    return (
      <h2 key={index}>
        {(mostConfirmed === confirmed) && continent}
      </h2>
    );
  });
  // console.log('Most confirmed cases ', mostConfirmed);

  return (
    <div>
      <div>
        {mostAffectedContinent}
        <p>
          {mostConfirmed}
        </p>
      </div>
    </div>
  );
};

export default Continent;
