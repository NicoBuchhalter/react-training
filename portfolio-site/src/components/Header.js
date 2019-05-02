import React from 'react';
import { NavLink } from 'react-router-dom';


const Header = () => (
  <header>
    <h1>Portfolio Site</h1>
    <NavLink  activeClassName="is-active" exact={true} to="/">Home Page</NavLink>
    <NavLink  activeClassName="is-active" exact={true} to="/portfolio">Portfolio</NavLink>
    <NavLink  activeClassName="is-active" exact={true} to="/contact">Contact</NavLink>
  </header>
);

export default Header;