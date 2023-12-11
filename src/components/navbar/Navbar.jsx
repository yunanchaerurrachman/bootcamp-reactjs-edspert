import React, { useState } from 'react';
import { Link } from "react-router-dom";
import './navbar.css';

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  return (
    <nav className="navbar">
      <div className="container-navbar">
        <div className="logo">
          <span>Edspert</span>
        </div>
        <div className="container-button-link">
          <div className="button-link">
            <Link to={`/`}>Beranda</Link>
          </div>
          <div className="button-link">
            <Link to={`/program`}>Program</Link>
          </div>
          <div className="button-link">
            <Link to={`/kontak`}>Kontak</Link>
          </div>
        </div>
        <div className="button-menu">
          {menu
            ? <p onClick={() => setMenu(false)}>KELUAR</p>
            : <p onClick={() => setMenu(true)}>MENU</p>}
        </div>
      </div>
      {menu && (
        <div className="container-menu">
          <div className="button-menu-link">
            <a href="#beranda" onClick={() => setMenu(false)}>BERANDA</a>
          </div>
          <div className="button-menu-link">
            <a href="#program" onClick={() => setMenu(false)}>PROGRAM</a>
          </div>
          <div className="button-menu-link">
            <a href="#kontak" onClick={() => setMenu(false)}>KONTAK</a>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar