import React from 'react';

import { ExchangesTable } from '../../components/ExchangesTable';
import { ExchangesButtonsBlock } from '../../components/Button';
import { SliderNews } from '../../components/SliderNews';
import Heading from '../../components/Heading';

function Exchanges() {
  return (
    <div className="exchanges">
      <div className="container">
        <Heading text="Top Cryptocurrency Spot Exchanges" />
        <p className="subheading-1">
          Cryptographio ranks and scores exchanges based on traffic, liquidity, trading volumes, and
          confidence in the legitimacy of trading volumes reported.
        </p>
        <ExchangesButtonsBlock />
        <ExchangesTable />
        <SliderNews />
      </div>
    </div>
  );
}

export default Exchanges;
