import React from 'react';

type PromoCryptoItemProps = {
  name: string;
  surname: string;
  price: string;
  change24H: number;
  change7D: number;
  marketCap: string;
  volumeInUsd24H: string;
  volumeInCrypto24H: string;
  circulationInCrypto: string;
  logo: string;
};


function PromoCryptoItem({
  name,
  surname,
  price,
  change24H,
  change7D,
  marketCap,
  volumeInUsd24H,
  volumeInCrypto24H,
  circulationInCrypto,
  logo,
}: PromoCryptoItemProps) {
  return (
    <tr>
      <td className="td-crypto-name">
        <div className="td-crypto-name-block">
          <img className="crypto-logo" src={logo} alt="bitcoin" />
          <p>
            {name} <span>{surname}</span>
          </p>
        </div>
      </td>
      <td>
        <p>{price}</p>
      </td>
      <td>
        <p className="change-24h">{change24H}</p>
      </td>
      <td>
        <p className="change-7d">{change7D}</p>
      </td>
      <td>
        <p>{marketCap}</p>
      </td>
      <td>
        <div className="volume-24h">
          <p>{volumeInUsd24H}</p>
          <span>{volumeInCrypto24H}</span>
        </div>
      </td>
      <td>
        <p>{circulationInCrypto}</p>
      </td>
    </tr>
  );
}

export default PromoCryptoItem;
