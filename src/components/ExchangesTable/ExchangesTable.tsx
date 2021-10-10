import React from 'react';

import { useGetExchangesQuery } from '../../redux/api/crypto';
import { useAppSelector } from '../../app/hooks';
import ExchangeLoader from '../Loaders/ExchangeLoader';

import ExchangesItem from './ExchangesItem';
import infoIcon from '../../icons/info.svg';

function ExchangesTable() {
  const { data, isLoading, isError, isSuccess } = useGetExchangesQuery(100, {
    pollingInterval: 15000,
  });
  const filterByWatchlist = useAppSelector((state) => state.filter.filterByWatchlist);
  const exchangeWatchlist = useAppSelector((state) => state.watchlist.exchange);

  const tableRef = React.useRef<HTMLTableElement>(null);

  React.useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 700 && isSuccess) {
        tableRef.current!.scrollLeft = tableRef.current!.scrollLeft + 200;
        window.removeEventListener('resize', handleResize);
      }
    }
    window.addEventListener('resize', handleResize);
    setTimeout(() => {
      handleResize();
    }, 500);
    return () => window.removeEventListener('resize', handleResize);
  }, [isSuccess]);

  if (isLoading || isError) {
    return (
      <div ref={tableRef} className="ex-table-wrapper">
        <table className="ex-table">
          <thead>
            <tr>
              <th className="th-ex-numbering">
                <p>#</p>
              </th>
              <th className="td-ex-name th-ex-name td-ex-name-loading">
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
        {Array(10)
          .fill(0)
          .map((_, index) => (
            <ExchangeLoader key={index} />
          ))}
      </div>
    );
  }

  return (
    <div ref={tableRef} className="ex-table-wrapper">
      <table className="ex-table">
        <thead>
          <tr>
            <th className="th-ex-numbering">
              <p>#</p>
            </th>
            <th className="td-ex-name th-ex-name">
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
            data
              .filter((item: any) => {
                if (!filterByWatchlist) {
                  return true;
                }
                let parsed = JSON.parse(exchangeWatchlist ? exchangeWatchlist : '[]');
                return parsed.includes(item.id);
              })
              .map((item: any, index: number) => (
                <ExchangesItem
                  id={item.id}
                  index={index + 1}
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
    </div>
  );
}

export default ExchangesTable;
