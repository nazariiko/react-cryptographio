import React from 'react';
import ContentLoader from 'react-content-loader';

const ParagraphLoader = () => (
  <ContentLoader
    speed={2}
    width={300}
    height={90}
    viewBox="0 0 300 90"
    backgroundColor="var(--loader-background)"
    foregroundColor="var(--loader-foreground)">
    <rect x="0" y="10" rx="10" ry="10" width="300" height="20" />
    <rect x="0" y="40" rx="10" ry="10" width="200" height="20" />
  </ContentLoader>
);

export default ParagraphLoader;
