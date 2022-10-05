import React from 'react';

const Header = () => {
  const date = new Date();
  // console.log(date.getFullYear());
  return (
    <div>
      <p>
        <span className="lessthan">&#60;</span>
        {date.getFullYear()}
        <span>Most Affected</span>
      </p>
    </div>
  );
};

export default Header;
