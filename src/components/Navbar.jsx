// src/components/Navbar.js
import React from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';

const CustomNavbar = () => {
  return (
    <Navbar color="primary" dark expand="md">
      <NavbarBrand href="/">Messenger Clone</NavbarBrand>
    </Navbar>
  );
};

export default CustomNavbar;