import React from 'react';
import { Link } from 'react-router-dom';

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { setCurrentPage } from '../../redux/page/pageSlice';

import Theme from './Theme';

type OverlayProps = {
  handleCloseSideMenu: () => void;
};

function Overlay({ handleCloseSideMenu }: OverlayProps) {
  const currentPage = useAppSelector((state) => state.page.currentPage);
  const dispatch = useAppDispatch();

  return (
    <div className="overlay">
      <div className="side-menu">
        <div className="side-menu-navigation">
          <button onClick={handleCloseSideMenu}>
            <svg
              width="25"
              height="25"
              viewBox="0 0 32 34"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <line
                x1="30.7071"
                y1="2.70711"
                x2="0.707107"
                y2="32.7071"
                stroke="black"
                strokeWidth="2"
              />
              <line
                x1="0.707107"
                y1="1.29289"
                x2="30.7071"
                y2="31.2929"
                stroke="black"
                strokeWidth="2"
              />
            </svg>
          </button>
          <Theme className={'side-menu-toggle-theme'} />
        </div>
        <ul>
          <Link to="/cryptocurrencies">
            <li
              onClick={() => {
                dispatch(setCurrentPage('cryptocurrencies'));
                handleCloseSideMenu();
              }}
              className={currentPage === 'cryptocurrencies' ? 'active' : ''}>
              Cryptocurrencies
            </li>
          </Link>
          <Link to="exchanges">
            <li
              onClick={() => {
                dispatch(setCurrentPage('exchanges'));
                handleCloseSideMenu();
              }}
              className={currentPage === 'exchanges' ? 'active' : ''}>
              Exchanges
            </li>
          </Link>
          <Link to="/news">
            <li
              onClick={() => {
                dispatch(setCurrentPage('news'));
                handleCloseSideMenu();
              }}
              className={currentPage === 'news' ? 'active' : ''}>
              News
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default Overlay;
