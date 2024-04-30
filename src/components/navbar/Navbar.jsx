import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './navbar.css';

const Menu = () => (
  <>
  <p><a href="#home">Home</a></p>
  <p><a href="#about">About</a></p>
  <p><a href="#markets">Markets</a></p>
  <p><a href="#top-movers">Top Movers</a></p>
  </>
)

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="sj__navbar">
      <div className="sj__navbar-logo">
        <h1>Shreeji Investment</h1>
      </div>
      <div className="sj__navbar-links">
        <Menu />
      </div>
      <div className="sj__navbar-contact">
        <button type="button">Contact Us</button>        
      </div>
      <div className="sj__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />
        }
        {toggleMenu && (
          <div className="sj__navbar-menu_container scale-up-center">
            <div className="sj__navbar-menu_container-links">
              <Menu />
              <div className="sj__navbar-menu_container-links-contact">
                <p>Sign in</p>
                <button type="button">Contact Us</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar
