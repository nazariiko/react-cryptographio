import React from 'react';

import { Link } from 'react-router-dom';

import { useAppDispatch } from '../../app/hooks';
import { setCurrentPage } from '../../redux/page/pageSlice';

import logoIcon from '../../icons/logo59.svg';

function Footer() {
  const dispatch = useAppDispatch();

  return (
    <div className="footer">
      <div className="container">
        <Link to="/">
          <div onClick={() => dispatch(setCurrentPage('home'))} className="footer-logo">
            <img src={logoIcon} alt="logo" />
            <span>
              Cryptograph<span>io</span>
            </span>
          </div>
        </Link>
        <div className="footer-info">
          <div className="footer-info-developer">
            <p>Developer</p>
            <ul className="developer-social-networks">
              <li>
                <a href="https://github.com/nazariiko" target="_blank" rel="noreferrer">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M9.99875 0.20813C4.4775 0.20813 0 4.70313 0 10.2481C0 14.6831 2.865 18.4456 6.84 19.7744C7.34 19.8669 7.5225 19.5569 7.5225 19.2906C7.5225 19.0519 7.51375 18.4206 7.50875 17.5831C4.7275 18.1894 4.14 16.2369 4.14 16.2369C3.68625 15.0769 3.03 14.7681 3.03 14.7681C2.12125 14.1456 3.0975 14.1581 3.0975 14.1581C4.10125 14.2294 4.62875 15.1931 4.62875 15.1931C5.52125 16.7269 6.97 16.2844 7.54 16.0269C7.63 15.3781 7.88875 14.9356 8.175 14.6844C5.955 14.4306 3.62 13.5694 3.62 9.72313C3.62 8.62688 4.01 7.73063 4.65 7.02813C4.54625 6.77438 4.20375 5.75313 4.7475 4.37188C4.7475 4.37188 5.5875 4.10188 7.4975 5.40063C8.295 5.17813 9.15 5.06688 10.0013 5.06313C10.85 5.06813 11.7062 5.17813 12.505 5.40188C14.4137 4.10313 15.2525 4.37313 15.2525 4.37313C15.7975 5.75563 15.455 6.77563 15.3525 7.02938C15.9937 7.73188 16.38 8.62813 16.38 9.72438C16.38 13.5806 14.0425 14.4294 11.815 14.6781C12.1737 14.9881 12.4937 15.6006 12.4937 16.5369C12.4937 17.8794 12.4812 18.9619 12.4812 19.2906C12.4812 19.5594 12.6612 19.8719 13.1687 19.7731C17.1375 18.4431 20 14.6819 20 10.2481C20 4.70313 15.5225 0.20813 9.99875 0.20813Z"
                      fill="black"
                    />
                  </svg>
                </a>
              </li>
              <li>
                <a href="https://t.me/nazariikovalenko" target="_blank" rel="noreferrer">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M10 20C15.5242 20 20 15.5242 20 10C20 4.47583 15.5242 0 10 0C4.47583 0 0 4.47583 0 10C0 15.5242 4.47583 20 10 20ZM4.57583 9.78333L14.2175 6.06583C14.665 5.90417 15.0558 6.175 14.9108 6.85167L14.9117 6.85083L13.27 14.585C13.1483 15.1333 12.8225 15.2667 12.3667 15.0083L9.86667 13.1658L8.66083 14.3275C8.5275 14.4608 8.415 14.5733 8.15667 14.5733L8.33417 12.0292L12.9675 7.84333C13.1692 7.66583 12.9225 7.56583 12.6567 7.7425L6.93083 11.3475L4.4625 10.5775C3.92667 10.4075 3.915 10.0417 4.57583 9.78333V9.78333Z"
                      fill="black"
                    />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
          <p className="all-rights-reserved">© 2021 Cryptographio. All rights reserved</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
