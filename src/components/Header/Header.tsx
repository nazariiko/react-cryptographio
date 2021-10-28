import React from 'react';

import { Link } from 'react-router-dom';

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { setCurrentPage } from '../../redux/page/pageSlice';
import { setSearchValue } from '../../redux/search/searchSlice';

import Theme from './Theme';
import Overlay from './Overlay';

import logoIcon from '../../icons/logo37.svg';
import searchIcon from '../../icons/search.svg';
import burgerIcon from '../../icons/burger-menu.svg';

function Header() {
  const currentPage = useAppSelector((state) => state.page.currentPage);
  const dispatch = useAppDispatch();
  const [sideMenuVisibility, setSideMenuVisibility] = React.useState(false);
  const [search, setSearch] = React.useState('');

  const handleOpenSideMenu = () => {
    setSideMenuVisibility(true);
  };

  const handleCloseSideMenu = () => {
    setSideMenuVisibility(false);
  };

  const handleSearchEnter = (event: any) => {
    if (event.key === 'Enter') {
      dispatch(setSearchValue(search));
    }
  };

  return (
    <div className="header">
      <div className="container">
        <Link to="/">
          <div onClick={() => dispatch(setCurrentPage('home '))} className="header-logo-block">
            <img src={logoIcon} alt="logo" />
            <span>
              Cryptograph<span>io</span>
            </span>
          </div>
        </Link>
        <div className="header-menu">
          <ul>
            <Link to="/cryptocurrencies">
              <li
                onClick={() => dispatch(setCurrentPage('cryptocurrencies'))}
                className={currentPage === 'cryptocurrencies' ? 'active' : ''}>
                Cryptocurrencies
              </li>
            </Link>
            <Link to="exchanges">
              <li
                onClick={() => dispatch(setCurrentPage('exchanges'))}
                className={currentPage === 'exchanges' ? 'active' : ''}>
                Exchanges
              </li>
            </Link>
            <Link to="/news">
              <li
                onClick={() => dispatch(setCurrentPage('news'))}
                className={currentPage === 'news' ? 'active' : ''}>
                News
              </li>
            </Link>
          </ul>
        </div>
        <div className="header-right-block">
          <div className="header-search-block">
            <img
              onClick={() => {
                dispatch(setSearchValue(search));
              }}
              className="header-right-block__search-icon"
              src={searchIcon}
              alt="search"
            />
            <input
              onChange={(e) => setSearch(e.target.value)}
              onKeyPress={handleSearchEnter}
              type="text"
              placeholder="Search crypto"
              value={search}
            />
            <svg
              onClick={() => {
                setSearch('');
                dispatch(setSearchValue(''));
              }}
              width="10"
              height="10"
              viewBox="0 0 32 34"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <line
                x1="30.7071"
                y1="2.70711"
                x2="0.707107"
                y2="32.7071"
                stroke="#6C6C6C"
                strokeWidth="2"
              />
              <line
                x1="0.707107"
                y1="1.29289"
                x2="30.7071"
                y2="31.2929"
                stroke="#6C6C6C"
                strokeWidth="2"
              />
            </svg>
          </div>
          <Theme className={'header-menu-toggle-theme'} />
          <div className="burger-menu">
            <button onClick={handleOpenSideMenu} className="burger-menu__btn">
              <img src={burgerIcon} alt="burger-menu" />
            </button>
            {sideMenuVisibility && <Overlay handleCloseSideMenu={handleCloseSideMenu} />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
