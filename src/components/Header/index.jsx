import React from 'react';
import logo from "../../assets/icons/logo-movistar-blue.svg";

const Header = () => {
  return (
    <nav className="flex flex-wrap items-center py-2 px-4 lg:h-14 lg:text-center lg:overflow-visible justify-center bg-white rounded-b-lg fixed top-0 w-full z-50 shadow">
      <a className="navbar-brand1" href="/#">
        <img className="icon-standard1" src={logo} alt="" />
      </a>
    </nav>
  );
};

export default Header;
