import React from 'react';
import { Link } from 'react-router-dom';

import { useAppDispatch } from '../../app/hooks';
import { setCurrentPage } from '../../redux/page/pageSlice';
import { useGetExchangesQuery } from '../../redux/api/crypto';

import PromoExchangeItem from './PromoExchangeItem';
import PromoExchangeLoader from '../Loaders/PromoExchangeLoader';

import exchangeIcon from '../../icons/exchange.svg';
import infoIcon from '../../icons/info.svg';

function PromoExchangeBlock() {
  const dispatch = useAppDispatch();
  const { data, isLoading, isError, isSuccess } = useGetExchangesQuery(2);

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
        {isLoading || isError ? (
          <table className="home-promo-block-bottom-table">
            <thead>
              <tr>
                <th className="td-crypto-name td-crypto-name-loading">
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
                    <p>Volume BTC(24h)</p>
                  </div>
                </th>
                <th>
                  <p>Year established</p>
                </th>
                <th>
                  <p>Markets</p>
                </th>
                <th>
                  <p>Coins</p>
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
              .map((_, index) => <PromoExchangeLoader key={index} />)
          : ''}

        {isSuccess ? (
          <table className="home-promo-block-bottom-table">
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
                    <p>Volume BTC(24h)</p>
                  </div>
                </th>
                <th>
                  <p>Year established</p>
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
              {data &&
                data.map((item: any, index: number) => (
                  <PromoExchangeItem
                    name={item.name}
                    score={item.trust_score}
                    volumeInBtc24H={item.trade_volume_24h_btc}
                    year_established={item.year_established}
                    markets={Math.floor(Math.random() * 1000)}
                    coins={Math.floor(Math.random() * 3000)}
                    logo={item.image}
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

export default PromoExchangeBlock;
