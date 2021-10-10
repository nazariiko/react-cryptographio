import React from 'react';
import ContentLoader from 'react-content-loader';

const ExchangeLoader = () => (
  <ContentLoader
    speed={2}
    width={1100}
    height={62}
    viewBox="0 0 1100 62"
    backgroundColor="var(--loader-background)"
    foregroundColor="var(--loader-foreground)">
    <rect x="0" y="23" rx="7" ry="7" width="25" height="15" />
    <rect x="45" y="23" rx="7" ry="7" width="100" height="15" />
    <rect x="410" y="23" rx="7" ry="7" width="50" height="15" />
    <rect x="540" y="23" rx="7" ry="7" width="120" height="15" />
    <rect x="830" y="23" rx="7" ry="7" width="50" height="15" />
    <rect x="950" y="23" rx="7" ry="7" width="50" height="15" />
    <rect x="1050" y="23" rx="7" ry="7" width="50" height="15" />
  </ContentLoader>
);

export default ExchangeLoader;
