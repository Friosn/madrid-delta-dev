import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/profile">Profile</NavLink>
        </li>
        <li>
          <NavLink to="/">Events</NavLink>
        </li>
        <li>
          <NavLink to="/ranking">Ranking</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
