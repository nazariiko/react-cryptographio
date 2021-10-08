import React from 'react';

type ExchangesItemProps = {
  index: number;
  name: string;
  score: string;
  volumeInUsd24H: string;
  volumeInPercent24H: number;
  avgLiquidity: number;
  weeklyVisits: string;
  markets: number;
  coins: number;
  logo: string;
  isWatchlist: boolean;
};

function ExchangesItem({
  index,
  name,
  score,
  volumeInUsd24H,
  volumeInPercent24H,
  avgLiquidity,
  weeklyVisits,
  markets,
  coins,
  logo,
  isWatchlist,
}: ExchangesItemProps) {
  return (
    <tr>
      <td>
        <div className="td-ex-numbering">
          <svg
            width="13"
            height="13"
            viewBox="0 0 13 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M2.90968 12.4832C2.76725 12.4832 2.62581 12.4388 2.5051 12.3515C2.28025 12.1885 2.17521 11.9084 2.23641 11.6382L3.07274 7.95414L0.236451 5.46679C0.0279647 5.28478 -0.0516805 4.99655 0.0339158 4.73282C0.119512 4.46959 0.352398 4.28322 0.628131 4.25773L4.38088 3.91703L5.86459 0.444873C5.97399 0.18977 6.22314 0.0250244 6.49996 0.0250244C6.77679 0.0250244 7.02594 0.18977 7.13534 0.444278L8.61904 3.91703L12.3712 4.25773C12.6475 4.28262 12.8804 4.46959 12.966 4.73282C13.0516 4.99606 12.9725 5.28478 12.764 5.46679L9.92769 7.95364L10.764 11.6376C10.8253 11.9084 10.7202 12.1885 10.4954 12.351C10.2712 12.5135 9.97212 12.526 9.73596 12.384L6.49996 10.4502L3.26396 12.3851C3.15456 12.4501 3.03267 12.4832 2.90968 12.4832ZM6.49996 9.61717C6.62295 9.61717 6.74475 9.6502 6.85425 9.71516L9.90825 11.5417L9.11893 8.06463C9.0626 7.81716 9.14661 7.55879 9.33783 7.39137L12.0159 5.04267L8.47275 4.72092C8.21764 4.69761 7.99825 4.53723 7.89857 4.30216L6.49996 1.0255L5.09967 4.30266C5.00108 4.53614 4.78169 4.69652 4.52718 4.71983L0.98351 5.04158L3.6615 7.39027C3.85332 7.55819 3.93723 7.81607 3.8804 8.06413L3.09168 11.5411L6.14568 9.71516C6.25508 9.6502 6.37697 9.61717 6.49996 9.61717ZM4.35222 3.98418C4.35222 3.98418 4.35222 3.98477 4.35162 3.98527L4.35222 3.98418ZM8.64662 3.98259L8.64721 3.98368C8.64721 3.98308 8.64721 3.98308 8.64662 3.98259Z"
              fill="#989898"
            />
          </svg>
          <span>{index}</span>
        </div>
      </td>
      <td className="td-ex-name">
        <div className="td-ex-name-block">
          <img className="ex-logo" src={logo} alt="bitcoin" />
          <p>{name}</p>
        </div>
      </td>
      <td>
        <div className="ex-score-colored">
          <p>{score}</p>
        </div>
      </td>
      <td>
        <div className="volume-24h">
          <p>{volumeInUsd24H}</p>
          <span style={{ color: 'var(--red)' }}>{volumeInPercent24H}%</span>
        </div>
      </td>
      <td>
        <p>{avgLiquidity}</p>
      </td>
      <td>
        <p>{weeklyVisits}</p>
      </td>
      <td>
        <p>{markets}</p>
      </td>
      <td>
        <p>{coins}</p>
      </td>
    </tr>
  );
}

export default ExchangesItem;
