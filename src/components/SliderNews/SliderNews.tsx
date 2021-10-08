import React from 'react';

import { useWindowSize } from '../../hooks/useWindowSize';

import DoLeftSlide from './DoLeftSlide';
import DoRightSlide from './DoRightSlide';
import NewsItem from './NewsItem';

import news1 from '../../icons/news/1.png';
import news2 from '../../icons/news/2.png';
import news3 from '../../icons/news/3.png';
import news4 from '../../icons/news/4.png';
import news5 from '../../icons/news/5.png';

function SliderNews() {
  const size = useWindowSize();
  const [scrollWidth, setScrollWidth] = React.useState<number | undefined>(0);
  const [offsetWidth, setOffsetWidth] = React.useState<number | undefined>(0);
  const [doLeftSlideVisibility, setDoLeftSlideVisibility] = React.useState<boolean>(false);
  const [doRightSlideVisibility, setDoRightSlideVisibility] = React.useState<boolean>(true);

  const newsListRef = React.useRef<HTMLUListElement>(null);

  const handleScrollLeft = () => {
    const width = (size.width as number) < 700 ? 310 : 620;
    newsListRef.current!.scrollLeft = newsListRef.current!.scrollLeft - width;
  };

  const handleScrollRight = () => {
    const width = (size.width as number) < 700 ? 310 : 620;
    newsListRef.current!.scrollLeft = newsListRef.current!.scrollLeft + width;
  };

  const handleScroll = () => {
    if (
      Number(newsListRef.current?.scrollWidth) - Number(newsListRef.current?.offsetWidth) ===
      newsListRef.current?.scrollLeft
    ) {
      setDoRightSlideVisibility(false);
    } else {
      setDoRightSlideVisibility(true);
    }

    if (Number(newsListRef.current?.scrollLeft) === 0) {
      setDoLeftSlideVisibility(false);
    } else {
      setDoLeftSlideVisibility(true);
    }
  };

  React.useEffect(() => {
    newsListRef.current?.addEventListener('scroll', handleScroll);
    setScrollWidth(newsListRef.current?.scrollWidth);
    setOffsetWidth(newsListRef.current?.offsetWidth);
  }, []);

  return (
    <div className="news-slider">
      {Number(scrollWidth) > Number(offsetWidth) && doLeftSlideVisibility ? (
        <DoLeftSlide handleScrollLeft={handleScrollLeft} />
      ) : (
        ''
      )}
      <ul ref={newsListRef}>
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
          image={news4}
        />
        <NewsItem
          category={'Cryptographio tutorial'}
          text={'Why Ethereum needs better compatibility, explained'}
          image={news5}
        />
      </ul>
      {Number(scrollWidth) > Number(offsetWidth) && doRightSlideVisibility ? (
        <DoRightSlide handleScrollRight={handleScrollRight} />
      ) : (
        ''
      )}
    </div>
  );
}

export default SliderNews;
