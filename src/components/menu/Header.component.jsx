import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ imgProfil, firstName, lastName }) => {
  return (
    <header>
      <Link to="/">
        <img
          className="rounded-full bg-white w-36 h-36 object-cover mx-auto border-2 image-profil"
          src={imgProfil}
          alt={`avatar ${lastName}`}
        />
      </Link>
      <h5 className="w-full font-semibold text-base uppercase tracking-2-px mt-4 mb-2.5">
        {lastName}
        <br />
        {firstName}
      </h5>
    </header>
  );
};

export default Header;
