import React from 'react';

import { PromoCryptoBlock, PromoExchangeBlock } from '../../components/PromoBlocks';
import { SliderNews } from '../../components/SliderNews';

import Heading from '../../components/Heading';

function Home() {
  return (
    <div className="content">
      <div className="container">
        <Heading text={`Today's Cryptocurrency Prices by Market Cap`} />
        <p className="subheading-1">
          The global crypto market cap is $1.88T, a <span>0.36%</span> decrease over the last day.
        </p>
        <PromoCryptoBlock />
        <PromoExchangeBlock />
        <Heading text={`News`} />
        <SliderNews />
      </div>
    </div>
  );
}

export default Home;
