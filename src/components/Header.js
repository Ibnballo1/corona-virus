import React from 'react';

const Header = () => {
  const date = new Date();
  return (
    <div className="headers">
      <p>
        <span className="lessthan">&#60;</span>
        {date.getFullYear()}
      </p>
      <p>Most Affected</p>
      <p />
    </div>
  );
};

export default Header;
