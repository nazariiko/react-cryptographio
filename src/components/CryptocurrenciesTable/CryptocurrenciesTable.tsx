import React from 'react';

import CryptocurrenciesItem from './CryptocurrenciesItem';
import infoIcon from '../../icons/info.svg';
import LoaderBlock from '../Loaders/LoaderBlock';

import { useAppSelector } from '../../app/hooks';
import { usePrevious } from '../../hooks/usePrevious';

import { useGetCryptocurrenciesQuery } from '../../redux/api/crypto';
import { isError } from 'util';

function CryptocurrenciesTable() {
  const { data, isLoading, isError, isSuccess } = useGetCryptocurrenciesQuery(100, {
    pollingInterval: 15000,
  });
  const prevData = usePrevious(data);
  const sort = useAppSelector((state) => state.sort.sort);
  const filterByWatchlist = useAppSelector((state) => state.filter.filterByWatchlist);
  const cryptoWatchlist = useAppSelector((state) => state.watchlist.crypto);
  const searchValue = useAppSelector((state) => state.search.searchValue);
  const filterByMarketCap = useAppSelector((state) => state.filter.filterByMarketCap);
  const tableRef = React.useRef<HTMLTableElement>(null);

  const sortCryptocurrencies: any = (a: any, b: any) => {
    switch (sort) {
      case 'Market cap':
        return +b.market_cap - +a.market_cap;

      case 'Price':
        return b.price - a.price;

      case '24h%':
        return Number(b['1d']?.['price_change_pct']) - Number(a['1d']?.['price_change_pct']);

      case '7d%':
        return Number(b['7d']?.['price_change_pct']) - Number(a['7d']?.['price_change_pct']);

      default:
        break;
    }
  };

  React.useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 700 && isSuccess) {
        tableRef.current!.scrollLeft = tableRef.current!.scrollLeft + 85;
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
      <div ref={tableRef} className="crypto-table-wrapper crypto-table-wrapper-loading">
        <table className="crypto-table crypto-table-loading">
          <thead>
            <tr>
              <th className="th-crypto-numbering">
                <p>#</p>
              </th>
              <th className="td-crypto-name-loading th-crypto-name">
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
        {Array(10)
          .fill(0)
          .map((_, index) => (
            <LoaderBlock key={index} />
          ))}
      </div>
    );
  }

  return (
    <div ref={tableRef} className="crypto-table-wrapper">
      <table className="crypto-table">
        <thead>
          <tr>
            <th className="th-crypto-numbering">
              <p>#</p>
            </th>
            <th className="td-crypto-name th-crypto-name">
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
                    The total market value of a cryptocurrency's circulating supply. It is analogous
                    to the free-float capitalization in the stock market. <br />
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
                  <p>A measure of how much of a cryptocurrency was traded in the last 24 hours.</p>
                </div>
                <p>Volume(24h)</p>
              </div>
            </th>
            <th>
              <div className="th-with-info">
                <img className="info" src={infoIcon} alt="info" />
                <div className="th-info-block">
                  <p>
                    The amount of coins that are circulating in the market and are in public hands.
                    It is analogous to the flowing shares in the stock market.
                  </p>
                </div>
                <p>Circulation Supply</p>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          {data &&
            [...data]
              .filter(
                (item) =>
                  item.name.toLowerCase().includes(searchValue.toLowerCase()) ||
                  item.id.toLowerCase().includes(searchValue.toLowerCase()),
              )
              .filter(
                (item) =>
                  Number(item.market_cap) >= filterByMarketCap[0] &&
                  Number(item.market_cap) <= filterByMarketCap[1],
              )
              .filter((item) => {
                if (!filterByWatchlist) {
                  return true;
                }
                let parsed = JSON.parse(cryptoWatchlist ? cryptoWatchlist : '[]');
                return parsed.includes(item.id);
              })
              .sort(sortCryptocurrencies)
              .map((item: any, index: any) => (
                <CryptocurrenciesItem
                  index={index + 1}
                  name={item.name}
                  surname={item.id}
                  price={item.price}
                  prevPrice={prevData?.find((prevItem: any) => item.name === prevItem.name)?.price}
                  change24H={item['1d']?.['price_change_pct']}
                  change7D={item['7d']?.['price_change_pct']}
                  marketCap={item['market_cap']}
                  volumeInUsd24H={item['1d']?.['volume']}
                  volumeInCrypto24H={item['1d']?.['volume_change_pct']}
                  circulationInCrypto={item['circulating_supply']}
                  logo={item['logo_url']}
                  isWatchlist={false}
                  key={index}
                />
              ))}
        </tbody>
      </table>
    </div>
  );
}

export default CryptocurrenciesTable;
