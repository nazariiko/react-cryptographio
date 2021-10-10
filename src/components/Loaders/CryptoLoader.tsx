import React from 'react';
import ContentLoader from 'react-content-loader';

const CryptoLoader = () => (
  <ContentLoader
    speed={2}
    width={1100}
    height={77}
    viewBox="0 0 1100 77"
    backgroundColor="var(--loader-background)"
    foregroundColor="var(--loader-foreground)">
    <rect x="0" y="29" rx="10" ry="10" width="35" height="20" />
    <rect x="55" y="29" rx="10" ry="10" width="110" height="20" />
    <rect x="205" y="29" rx="10" ry="10" width="100" height="20" />
    <rect x="340" y="29" rx="10" ry="10" width="50" height="20" />
    <rect x="415" y="29" rx="10" ry="10" width="50" height="20" />
    <rect x="515" y="29" rx="10" ry="10" width="130" height="20" />

    <rect x="730" y="20" rx="10" ry="10" width="110" height="20" />
    <rect x="800" y="45" rx="8" ry="8" width="40" height="15" />
    <rect x="945" y="29" rx="10" ry="10" width="150" height="20" />
  </ContentLoader>
);

export default CryptoLoader;
