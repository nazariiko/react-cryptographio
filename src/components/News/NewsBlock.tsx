import React from 'react';

import NewsItem from './NewsItem';

import news1 from '../../icons/news/1.png';
import news2 from '../../icons/news/2.png';
import news3 from '../../icons/news/3.png';
import news4 from '../../icons/news/4.png';
import news5 from '../../icons/news/5.png';
import news6 from '../../icons/news/6.png';
import news7 from '../../icons/news/7.png';
import news8 from '../../icons/news/8.png';
import news9 from '../../icons/news/9.png';
import news10 from '../../icons/news/10.png';

function NewsBlock() {
  return (
    <div className="news-block">
      <ul className="news-list">
        <NewsItem
          category={'Daily news'}
          text={'Central bank of Ukraine to promote ‘fair’ Bitcoin regulation'}
          image={news1}
        />
        <NewsItem
          category={'Cryptographio tutorial'}
          text={'Why Ethereum needs better compatibility, explained'}
          image={news2}
        />
        <NewsItem
          category={'Cryptographio tutorial'}
          text={'Why Ethereum needs better compatibility, explained'}
          image={news3}
        />
        <NewsItem
          category={'Cryptographio tutorial'}
          text={'Why Ethereum needs better compatibility, explained'}
          image={news4}
        />
        <NewsItem
          category={'Cryptographio tutorial'}
          text={'Why Ethereum needs better compatibility, explained'}
          image={news5}
        />
        <NewsItem
          category={'Cryptographio tutorial'}
          text={'Why Ethereum needs better compatibility, explained'}
          image={news6}
        />
        <NewsItem
          category={'Cryptographio tutorial'}
          text={'Why Ethereum needs better compatibility, explained'}
          image={news7}
        />
        <NewsItem
          category={'Cryptographio tutorial'}
          text={'Why Ethereum needs better compatibility, explained'}
          image={news8}
        />
        <NewsItem
          category={'Cryptographio tutorial'}
          text={'Why Ethereum needs better compatibility, explained'}
          image={news9}
        />
        <NewsItem
          category={'Cryptographio tutorial'}
          text={'Why Ethereum needs better compatibility, explained'}
          image={news10}
        />
      </ul>
    </div>
  );
}

export default NewsBlock;
