import React from 'react';
import { Link } from 'react-router-dom';

import { useAppDispatch } from '../../app/hooks';
import { setCurrentPage } from '../../redux/page/pageSlice';

import PromoExchangeItem from './PromoExchangeItem';

import exchangeIcon from '../../icons/exchange.svg';
import infoIcon from '../../icons/info.svg';

import binance from '../../icons/exchanges/binance.svg';
import coinbase from '../../icons/exchanges/coinbase.svg';

function PromoExchangeBlock() {
  const dispatch = useAppDispatch();

  return (
    <div className="home-promo-block">
      <div className="home-promo-block-top">
        <div className="home-promo-block-top__description">
          <img src={exchangeIcon} alt="fire" />
          <p>Exchanges</p>
        </div>
        <Link to="/exchanges">
          <button
            onClick={() => dispatch(setCurrentPage('exchanges'))}
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
                <div className="th-with-info">
                  <img className="info" src={infoIcon} alt="info" />
                  <div className="th-info-block">
                    <p>
                      CoinMarketCap ranks and scores exchanges based on the following: Web Traffic
                      Factor; Average Liquidity; Volume, as well as the Confidence that the volume
                      reported by an exchange is legitimate. Weights are assigned to the
                      above-mentioned factors and a score from 0.0 to 10.0 is given to the Spot
                      Exchange.
                    </p>
                  </div>
                  <p>Exchange score</p>
                </div>
              </th>
              <th>
                <div className="th-with-info">
                  <p>Volume(24h)</p>
                </div>
              </th>
              <th>
                <p>Avg.Liquidity</p>
              </th>
              <th>
                <div className="th-with-info">
                  <img className="info" src={infoIcon} alt="info" />
                  <div className="th-info-block">
                    <p>
                      Weekly visits to website (not including mobile app) based on data from
                      SimilarWeb.
                    </p>
                  </div>
                  <p>Weekly visits</p>
                </div>
              </th>
              <th>
                <p>Markets</p>
              </th>
              <th>
                <p>Coins</p>
              </th>
            </tr>
          </thead>
          <tbody>
            <PromoExchangeItem
              name={'Binance'}
              score={'9.9'}
              volumeInUsd24H={'$4,511,754,954'}
              volumeInPercent24H={8.71}
              avgLiquidity={684}
              weeklyVisits={'28,351,152'}
              markets={1419}
              coins={385}
              logo={binance}
            />

            <PromoExchangeItem
              name={'Coinbase Exchange'}
              score={'9.0'}
              volumeInUsd24H={'$25,035,576,545'}
              volumeInPercent24H={35.1}
              avgLiquidity={574}
              weeklyVisits={'2,901,407'}
              markets={312}
              coins={104}
              logo={coinbase}
            />
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default PromoExchangeBlock;
