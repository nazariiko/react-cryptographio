import React from 'react';

import { NewsButtonsBlock } from '../../components/Button';
import { NewsBlock } from '../../components/News';
import Heading from '../../components/Heading';

function News() {
  return (
    <div className="news">
      <div className="container">
        <Heading text="News" />
        <NewsButtonsBlock />
        <NewsBlock />
      </div>
    </div>
  );
}

export default News;
