import React from 'react';
import { StrictMode } from 'react';
import './App.css';
import NavbarComponent from './Navbar/Navbar';
import FooterComponent from './Footer/Footer';
import 'bootstrap-icons/font/bootstrap-icons.css';

export default function App() {
  return (
    <StrictMode>
      <NavbarComponent />
      <FooterComponent />
    </StrictMode>
  )
}
