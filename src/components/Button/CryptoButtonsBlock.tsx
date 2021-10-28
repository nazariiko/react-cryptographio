import React from 'react';

import { OptionButton } from '../../components/Button';
import { SortPopup } from '../../components/SortPopup';
import { FiltersPopup } from '../../components/FiltersPopup';

import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { setWatchlistFilter } from '../../redux/filter/filterSlice';

import watchlistIcon from '../../icons/watchlist.svg';
import watchlistIconActive from '../../icons/star-filled.svg';
import sortByIcon from '../../icons/sortby.svg';
import filtersByIcon from '../../icons/filters.svg';

function CryptoButtonsBlock() {
  const dispatch = useAppDispatch();
  const filterByWatchlist = useAppSelector((state) => state.filter.filterByWatchlist);
  const [filtersPopupVisibility, setFiltersPopupVisibility] = React.useState(false);
  const [sortPopupVisibility, setSortPopupVisibility] = React.useState(false);

  const onClickFilters = React.useCallback(() => {
    setFiltersPopupVisibility(!filtersPopupVisibility);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onCloseFilters = React.useCallback(() => {
    setFiltersPopupVisibility(false);
  }, []);

  const onClickSort = React.useCallback(() => {
    setSortPopupVisibility(!sortPopupVisibility);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onCloseSortPopup = React.useCallback(() => {
    setSortPopupVisibility(false);
  }, []);

  const onClickWatchlist = React.useCallback(() => {
    dispatch(setWatchlistFilter(!filterByWatchlist));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filterByWatchlist]);

  const onClickOutside = (e: any) => {
    if (!e.path.find((item: any) => item.className === 'sort')) {
      setSortPopupVisibility(false);
    }

    if (!e.path.find((item: any) => item.className === 'filter-block')) {
      setFiltersPopupVisibility(false);
    }
  };

  React.useEffect(() => {
    window.addEventListener('click', onClickOutside);
  }, []);

  return (
    <div className="cryptocurrencies-buttons-block">
      <div className="left-options">
        <OptionButton
          text={'Watchlist'}
          icon={filterByWatchlist ? watchlistIconActive : watchlistIcon}
          onClick={onClickWatchlist}
        />
        <div className="sort">
          <OptionButton text={'Sort by'} icon={sortByIcon} onClick={onClickSort} />
          {sortPopupVisibility && (
            <SortPopup
              sortOptions={['Price', 'Market cap', '24h%', '7d%']}
              onCloseSortPopup={onCloseSortPopup}
            />
          )}
        </div>
      </div>

      <div className="filters">
        <div className="filter-block">
          <OptionButton
            text={'Filters'}
            icon={filtersByIcon}
            onClick={onClickFilters}
            className="filters__option-btn mr-0"
          />
          {filtersPopupVisibility && <FiltersPopup onCloseFilters={onCloseFilters} />}
        </div>
      </div>
    </div>
  );
}

export default CryptoButtonsBlock;
