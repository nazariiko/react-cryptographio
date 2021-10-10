import React from 'react';
import ContentLoader from 'react-content-loader';

const PromoCryptoLoader = () => (
  <ContentLoader
    speed={2}
    width={1030}
    height={56}
    viewBox="0 0 1030 56"
    backgroundColor="var(--loader-background)"
    foregroundColor="var(--loader-foreground)">
    <rect x="5" y="25" rx="7" ry="7" width="100" height="15" />
    <rect x="190" y="25" rx="7" ry="7" width="50" height="15" />
    <rect x="275" y="25" rx="7" ry="7" width="35" height="15" />
    <rect x="355" y="25" rx="7" ry="7" width="35" height="15" />
    <rect x="450" y="25" rx="7" ry="7" width="130" height="15" />
    <rect x="670" y="17" rx="7" ry="7" width="100" height="15" />
    <rect x="730" y="35" rx="5" ry="5" width="40" height="10" />
    <rect x="870" y="25" rx="7" ry="7" width="150" height="15" />
  </ContentLoader>
);

export default PromoCryptoLoader;
