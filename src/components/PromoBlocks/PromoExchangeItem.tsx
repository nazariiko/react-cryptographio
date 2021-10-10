import React from 'react';

type PromoExchangeItemProps = {
  name: string;
  score: string;
  volumeInBtc24H: string;
  year_established: string;
  markets: number;
  coins: number;
  logo: string;
};

function PromoExchangeItem({
  name,
  score,
  volumeInBtc24H,
  year_established,
  markets,
  coins,
  logo,
}: PromoExchangeItemProps) {
  return (
    <tr>
      <td className="td-crypto-name">
        <div className="td-crypto-name-block">
          <img className="crypto-logo" width={20} src={logo} alt="bitcoin" />
          <p>{name}</p>
        </div>
      </td>
      <td>
        <div className="ex-score-colored">
          <p>{score}</p>
        </div>
      </td>
      <td>
        <p>{volumeInBtc24H && Number(volumeInBtc24H).toFixed(2)}</p>
      </td>
      <td>
        <p>{year_established}</p>
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
