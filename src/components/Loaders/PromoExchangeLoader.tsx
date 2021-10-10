import React from 'react';
import ContentLoader from 'react-content-loader';

const PromoExchangeLoader = () => (
  <ContentLoader
    speed={2}
    width={1030}
    height={56}
    viewBox="0 0 1030 56"
    backgroundColor="var(--loader-background)"
    foregroundColor="var(--loader-foreground)">
    <rect x="5" y="25" rx="7" ry="7" width="100" height="15" />
    <rect x="300" y="25" rx="7" ry="7" width="60" height="15" />
    <rect x="460" y="25" rx="7" ry="7" width="150" height="15" />
    <rect x="750" y="25" rx="7" ry="7" width="50" height="15" />
    <rect x="875" y="25" rx="7" ry="7" width="50" height="15" />
    <rect x="975" y="25" rx="7" ry="7" width="50" height="15" />
  </ContentLoader>
);

export default PromoExchangeLoader;
