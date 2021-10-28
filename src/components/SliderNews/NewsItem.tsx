import React from 'react';

type NewsItemProps = {
  category: string;
  text: string;
  image: string;
};

function NewsItem({ category, text, image }: NewsItemProps) {
  return (
    <li>
      <div className="news-slider__image-block">
        <img src={image} alt="news" />
      </div>
      <span>{category}</span>
      <p>⁠{text}</p>
    </li>
  );
}

export default React.memo(NewsItem);
