import React from 'react';

import { CategoryButton } from '../Button';

function NewsButtonsBlock() {
  const onClick1 = () => {};

  return (
    <div className="news-buttons-block">
      <div className="categories-btns">
        <CategoryButton text={'All'} active onClick={onClick1} className="mb-10" />
        <CategoryButton text={'Bitcoin'} onClick={onClick1} className="mb-10" />
        <CategoryButton text={'Ethereum'} onClick={onClick1} className="mb-10" />
        <CategoryButton text={'Market'} onClick={onClick1} className="mb-10" />
        <CategoryButton text={'DeFi'} onClick={onClick1} className="mb-10" />
        <CategoryButton text={'SEC'} onClick={onClick1} className="mb-10" />
      </div>
    </div>
  );
}

export default NewsButtonsBlock;
