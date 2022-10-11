import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const date = new Date();
  return (
    <div className="headers">
      <p className="headerp">
        <Link
          className="homeLinks"
          to="/"
        >
          &#60;
        </Link>
        {date.getFullYear()}
      </p>
      <p className="mostAffected">Most Affected</p>
      <p />
    </div>
  );
};

export default Header;
