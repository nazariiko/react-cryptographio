import React from 'react';

import ExchangesItem from './ExchangesItem';
import infoIcon from '../../icons/info.svg';

import binance from '../../icons/exchanges/binance.svg';
import coinbase from '../../icons/exchanges/coinbase.svg';
import coinzo from '../../icons/exchanges/coinzo.svg';
import huobi from '../../icons/exchanges/huobi.svg';
import kraken from '../../icons/exchanges/kraken.svg';
import upbit from '../../icons/exchanges/upbit.svg';
import blockchain from '../../icons/exchanges/blockchain.svg';

function ExchangesTable() {
  const tableRef = React.useRef<HTMLTableElement>(null);

  React.useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 700) {
        tableRef.current!.scrollLeft = tableRef.current!.scrollLeft + 130;
        window.removeEventListener('resize', handleResize);
      }
    }
    window.addEventListener('resize', handleResize);
    setTimeout(() => {
      handleResize();
    }, 500);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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
          <ExchangesItem
            index={1}
            name={'Binance'}
            score={'9.9'}
            volumeInUsd24H={'$4,511,754,954'}
            volumeInPercent24H={8.71}
            avgLiquidity={684}
            weeklyVisits={'28,351,152'}
            markets={1419}
            coins={385}
            logo={binance}
            isWatchlist={true}
          />

          <ExchangesItem
            index={2}
            name={'Coinbase Exchange'}
            score={'9.0'}
            volumeInUsd24H={'$25,035,576,545'}
            volumeInPercent24H={35.1}
            avgLiquidity={574}
            weeklyVisits={'2,901,407'}
            markets={312}
            coins={104}
            logo={coinbase}
            isWatchlist={false}
          />

          <ExchangesItem
            index={3}
            name={'Huobi global'}
            score={'8.8'}
            volumeInUsd24H={'$4,934,765,835'}
            volumeInPercent24H={14.48}
            avgLiquidity={606}
            weeklyVisits={'962,260'}
            markets={1069}
            coins={360}
            logo={huobi}
            isWatchlist={false}
          />

          <ExchangesItem
            index={4}
            name={'Kraken'}
            score={'8.4'}
            volumeInUsd24H={'$1,279,187,209'}
            volumeInPercent24H={32.48}
            avgLiquidity={555}
            weeklyVisits={'2,080,996'}
            markets={347}
            coins={88}
            logo={kraken}
            isWatchlist={true}
          />

          <ExchangesItem
            index={5}
            name={'Upbit'}
            score={'6.0'}
            volumeInUsd24H={'$6,060,942,436'}
            volumeInPercent24H={10.05}
            avgLiquidity={289}
            weeklyVisits={'2,346,043'}
            markets={221}
            coins={147}
            logo={upbit}
            isWatchlist={true}
          />

          <ExchangesItem
            index={6}
            name={'Blockchain.com'}
            score={'5.6'}
            volumeInUsd24H={'$15,437,417'}
            volumeInPercent24H={32.11}
            avgLiquidity={266}
            weeklyVisits={'1,094,417'}
            markets={41}
            coins={21}
            logo={blockchain}
            isWatchlist={false}
          />

          <ExchangesItem
            index={7}
            name={'Coinzo'}
            score={'4.0'}
            volumeInUsd24H={'$15,437,417'}
            volumeInPercent24H={32.11}
            avgLiquidity={134}
            weeklyVisits={'94,417'}
            markets={23}
            coins={12}
            logo={coinzo}
            isWatchlist={false}
          />
        </tbody>
      </table>
    </div>
  );
}

export default ExchangesTable;
