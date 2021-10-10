import React from 'react';

import { useGetGlobalDataQuery } from '../../redux/api/crypto';

import { PromoCryptoBlock, PromoExchangeBlock } from '../../components/PromoBlocks';
import { SliderNews } from '../../components/SliderNews';

import { formatVolumeInUsd24H } from '../../helpers/format';

import Heading from '../../components/Heading';
import ParagraphLoader from '../../components/Loaders/ParagraphLoader';

function Home() {
  const { data, isLoading, isError } = useGetGlobalDataQuery(null);

  return (
    <div className="content">
      <div className="container">
        <Heading text={`Today's Cryptocurrency Prices by Market Cap`} />
        {isLoading || isError ? (
          <ParagraphLoader />
        ) : (
          <p className="subheading-1">
            <u>
              The global crypto market cap is{' '}
              {data && formatVolumeInUsd24H(String(data.data.quote.USD.total_market_cap))}. <br />
            </u>
            Active cryptocurrencies: {data.data.active_cryptocurrencies}. <br />
          </p>
        )}

        <PromoCryptoBlock />
        <PromoExchangeBlock />
        <Heading text={`News`} />
        <SliderNews />
      </div>
    </div>
  );
}

export default Home;
