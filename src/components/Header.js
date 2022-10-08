import React from 'react';

const Header = () => {
  const date = new Date();
  return (
    <div className="headers">
      <p className="headerp">
        <span className="lessthan">&#60;</span>
        {date.getFullYear()}
      </p>
      <p className="mostAffected">Most Affected</p>
      <p />
    </div>
  );
};

export default Header;
