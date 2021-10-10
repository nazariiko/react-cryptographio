import React from 'react';

import { OptionButton, CategoryButton } from '../Button';

import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { setWatchlistFilter } from '../../redux/filter/filterSlice';

import watchlistIcon from '../../icons/watchlist.svg';
import watchlistIconActive from '../../icons/star-filled.svg';

function ExchangesButtonsBlock() {
  const dispatch = useAppDispatch();
  const filterByWatchlist = useAppSelector((state) => state.filter.filterByWatchlist);

  const onClickWatchlist = () => {
    dispatch(setWatchlistFilter(!filterByWatchlist));
  };

  return (
    <div className="exchanges-buttons-block">
      <div className="left-options">
        <OptionButton
          text={'Watchlist'}
          icon={filterByWatchlist ? watchlistIconActive : watchlistIcon}
          onClick={onClickWatchlist}
        />
      </div>
      <div className="categories-btns-desktop">
        <CategoryButton text={'Spot'} active className="ml-20" />
      </div>
    </div>
  );
}

export default ExchangesButtonsBlock;
