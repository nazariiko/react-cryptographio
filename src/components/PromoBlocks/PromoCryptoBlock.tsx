import React from 'react';
import { Link } from 'react-router-dom';

import { useAppDispatch } from '../../app/hooks';
import { setCurrentPage } from '../../redux/page/pageSlice';

import { useGetCryptocurrenciesQuery } from '../../redux/api/crypto';

import PromoCryptoItem from './PromoCryptoItem';
import PromoCryptoLoader from '../Loaders/PromoCryptoLoader';

import hotIcon from '../../icons/hot.svg';
import infoIcon from '../../icons/info.svg';

function PromoCryptoBlock() {
  const dispatch = useAppDispatch();
  const { data, isLoading, isError, isSuccess } = useGetCryptocurrenciesQuery(2);

  return (
    <div className="home-promo-block">
      <div className="home-promo-block-top">
        <div className="home-promo-block-top__description">
          <img src={hotIcon} alt="fire" />
          <p>Cryptocurrencies</p>
        </div>
        <Link to="/cryptocurrencies">
          <button
            onClick={() => dispatch(setCurrentPage('cryptocurrencies'))}
            className="home-promo-block-top__more">
            More
            <svg
              width="8"
              height="15"
              viewBox="0 0 8 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M0.999999 1L7 7.5L0.999999 14" stroke="#7500BD" />
            </svg>
          </button>
        </Link>
      </div>

      <div className="home-promo-block-bottom">
        {isLoading || isError ? (
          <table className="home-promo-block-bottom-table home-promo-block-bottom-table-loading">
            <thead>
              <tr>
                <th className="td-crypto-name td-crypto-name-loading">
                  <p>Name</p>
                </th>
                <th>
                  <p>Price</p>
                </th>
                <th>
                  <p>24h%</p>
                </th>
                <th>
                  <p>7d%</p>
                </th>
                <th>
                  <div className="th-with-info">
                    <img className="info" src={infoIcon} alt="info" />
                    <div className="th-info-block">
                      <p>
                        The total market value of a cryptocurrency's circulating supply. It is
                        analogous to the free-float capitalization in the stock market. <br />
                        <br />
                        Market Cap = Current Price x Circulating Supply.
                      </p>
                    </div>
                    <p>Market cap</p>
                  </div>
                </th>
                <th>
                  <div className="th-with-info">
                    <img className="info" src={infoIcon} alt="info" />
                    <div className="th-info-block">
                      <p>
                        A measure of how much of a cryptocurrency was traded in the last 24 hours.
                      </p>
                    </div>
                    <p>Volume(24h)</p>
                  </div>
                </th>
                <th>
                  <div className="th-with-info">
                    <img className="info" src={infoIcon} alt="info" />
                    <div className="th-info-block">
                      <p>
                        The amount of coins that are circulating in the market and are in public
                        hands. It is analogous to the flowing shares in the stock market.
                      </p>
                    </div>
                    <p>Circulation Supply</p>
                  </div>
                </th>
              </tr>
            </thead>
          </table>
        ) : (
          ''
        )}
        {isLoading || isError
          ? Array(2)
              .fill(0)
              .map((_, index) => <PromoCryptoLoader key={index} />)
          : ''}

        {isSuccess ? (
          <table className="home-promo-block-bottom-table">
            <thead>
              <tr>
                <th className="td-crypto-name">
                  <p>Name</p>
                </th>
                <th>
                  <p>Price</p>
                </th>
                <th>
                  <p>24h%</p>
                </th>
                <th>
                  <p>7d%</p>
                </th>
                <th>
                  <div className="th-with-info">
                    <img className="info" src={infoIcon} alt="info" />
                    <div className="th-info-block">
                      <p>
                        The total market value of a cryptocurrency's circulating supply. It is
                        analogous to the free-float capitalization in the stock market. <br />
                        <br />
                        Market Cap = Current Price x Circulating Supply.
                      </p>
                    </div>
                    <p>Market cap</p>
                  </div>
                </th>
                <th>
                  <div className="th-with-info">
                    <img className="info" src={infoIcon} alt="info" />
                    <div className="th-info-block">
                      <p>
                        A measure of how much of a cryptocurrency was traded in the last 24 hours.
                      </p>
                    </div>
                    <p>Volume(24h)</p>
                  </div>
                </th>
                <th>
                  <div className="th-with-info">
                    <img className="info" src={infoIcon} alt="info" />
                    <div className="th-info-block">
                      <p>
                        The amount of coins that are circulating in the market and are in public
                        hands. It is analogous to the flowing shares in the stock market.
                      </p>
                    </div>
                    <p>Circulation Supply</p>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {data &&
                data.map((item: any, index: number) => (
                  <PromoCryptoItem
                    name={item.name}
                    surname={item.id}
                    price={item.price}
                    change24H={item['1d']?.['price_change_pct']}
                    change7D={item['7d']?.['price_change_pct']}
                    marketCap={item['market_cap']}
                    volumeInUsd24H={item['1d']?.['volume']}
                    volumeInCrypto24H={item['1d']?.['volume_change_pct']}
                    circulationInCrypto={item['circulating_supply']}
                    logo={item['logo_url']}
                    key={index}
                  />
                ))}
            </tbody>
          </table>
        ) : (
          ''
        )}
      </div>
    </div>
  );
}

export default PromoCryptoBlock;
