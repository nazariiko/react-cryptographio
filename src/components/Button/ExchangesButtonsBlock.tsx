import React from 'react';

import { OptionButton, CategoryButton } from '../Button';

import watchlistIcon from '../../icons/watchlist.svg';

function ExchangesButtonsBlock() {
  const onClick1 = () => {};

  return (
    <div className="exchanges-buttons-block">
      <div className="left-options">
        <OptionButton text={'Watchlist'} icon={watchlistIcon} onClick={onClick1} />
      </div>
      <div className="categories-btns-desktop">
        <CategoryButton text={'Spot'} active className="ml-20" />
      </div>
    </div>
  );
}

export default ExchangesButtonsBlock;
