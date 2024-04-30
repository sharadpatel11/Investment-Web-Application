import React from 'react';
import './header.css';
import header_image from '../../Assets/header-image2.png';
import title_icon from '../../Assets/Finance Icons.svg';

const Header = () => {
  return (
    <div className="sj__header section__padding" id="home">
      <div className="sj__header-left">
        <div className="sj__header-title">
          <div className="sj__header-title__top">
            <h2>WELCOME TO</h2> 
            <div className="sj__header-title__image">
              <img src={ title_icon } alt="money icon" />
            </div>
          </div>
          <div className="sj__header-title__bottom">
            <h2>SHREEJI INVESTMENT</h2>
          </div>
        </div>
        <div className="header__p">
          <p>Where Fortunes Rise and Dreams Take Flight!</p>
        </div>
      </div>
      <div className="sj__header-right">
        <img src={header_image} alt="invest" />
      </div>
    </div>
  )
}

export default Header
