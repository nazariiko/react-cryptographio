import React from 'react';

type PromoExchangeItemProps = {
  name: string;
  score: string;
  volumeInUsd24H: string;
  volumeInPercent24H: number;
  avgLiquidity: number;
  weeklyVisits: string;
  markets: number;
  coins: number;
  logo: string;
};


function PromoExchangeItem({
  name,
  score,
  volumeInUsd24H,
  volumeInPercent24H,
  avgLiquidity,
  weeklyVisits,
  markets,
  coins,
  logo
}: PromoExchangeItemProps) {
  return (
    <tr>
      <td className="td-crypto-name">
        <div className="td-crypto-name-block">
          <img className="crypto-logo" src={logo} alt="bitcoin" />
          <p>
            {name}
          </p>
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
          <span style={{color: "var(--red)"}}>{volumeInPercent24H}%</span>
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

export default PromoExchangeItem;