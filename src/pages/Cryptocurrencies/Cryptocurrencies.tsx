import React from 'react';

import { CryptoButtonsBlock } from '../../components/Button';
import { CryptocurrenciesTable } from '../../components/CryptocurrenciesTable';
import Heading from '../../components/Heading';

function Cryptocurrencies() {
  return (
    <div className="cryptocurrencies">
      <div className="container">
        <Heading text="Сryptocurrencies" />
        <CryptoButtonsBlock />
        <CryptocurrenciesTable />
      </div>
    </div>
  );
}

export default Cryptocurrencies;
