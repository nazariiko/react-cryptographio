import React from 'react';
import { Link } from 'react-router-dom';

import { useAppDispatch } from '../../app/hooks';
import { setCurrentPage } from '../../redux/page/pageSlice';

import PromoCryptoItem from './PromoCryptoItem';

import hotIcon from '../../icons/hot.svg';
import infoIcon from '../../icons/info.svg';

import bitcoin from '../../icons/crypto/bitcoin.svg';
import ethereum from '../../icons/crypto/ethereum.svg';

function PromoCryptoBlock() {
  const dispatch = useAppDispatch();

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
        <table className="home-promo-block-bottom-table">
          <col className="first-col" />
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
            <PromoCryptoItem
              name={'Bitcoin'}
              surname={'BTC'}
              price={'$43,546.95'}
              change24H={3.16}
              change7D={8.71}
              marketCap={'$830,204,201,427'}
              volumeInUsd24H={'$37,052,141,879'}
              volumeInCrypto24H={'840,107 BTC'}
              circulationInCrypto={'18,823,743 BTC'}
              logo={bitcoin}
            />

            <PromoCryptoItem
              name={'Ethereum'}
              surname={'ETH'}
              price={'$3,456.76'}
              change24H={4.16}
              change7D={5.71}
              marketCap={'$367,226,290,423'}
              volumeInUsd24H={'$21,987,863,047'}
              volumeInCrypto24H={'7,043,702 ETH'}
              circulationInCrypto={'117,639,111 ETH'}
              logo={ethereum}
            />
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default PromoCryptoBlock;
