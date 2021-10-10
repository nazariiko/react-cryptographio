import React from 'react';

import {
  formatPrice,
  formatMarketCap,
  formatVolumeInUsd24H,
  formatChange,
} from '../../helpers/format';

type PromoCryptoItemProps = {
  name: string;
  surname: string;
  price: string;
  change24H: string;
  change7D: string;
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
          <img className="crypto-logo" width={20} src={logo} alt="bitcoin" />
          <p>
            {name} <span>{surname}</span>
          </p>
        </div>
      </td>
      <td>
        <p>{formatPrice(price)}</p>
      </td>
      <td>
        <p className={`change-24h ${change24H && formatChange(change24H)[1]}`}>
          {change24H && formatChange(change24H)[0]}
        </p>
      </td>
      <td>
        <p className={`change-7d ${change7D && formatChange(change7D)[1]}`}>
          {change7D && formatChange(change7D)[0]}
        </p>
      </td>
      <td>
        <p>{marketCap && formatMarketCap(marketCap)}</p>
      </td>
      <td>
        <div className="volume-24h">
          <p>{volumeInUsd24H && formatVolumeInUsd24H(volumeInUsd24H)}</p>
          <span>{volumeInCrypto24H}</span>
        </div>
      </td>
      <td>
        <p>
          {circulationInCrypto} {surname}
        </p>
      </td>
    </tr>
  );
}

export default PromoCryptoItem;
