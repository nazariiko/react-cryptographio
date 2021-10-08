import React from 'react';

import { OptionButton, CategoryButton, CategoryOptionButton } from '../../components/Button';
import { SortPopup } from '../../components/SortPopup';
import { CategoryPopup } from '../../components/CategoryPopup';
import { FiltersPopup } from '../../components/FiltersPopup';

import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { setWatchlistFilter } from '../../redux/filter/filterSlice';

import watchlistIcon from '../../icons/watchlist.svg';
import watchlistIconActive from '../../icons/star-filled.svg';
import sortByIcon from '../../icons/sortby.svg';
import sortByPrimaryIcon from '../../icons/sortby-primary.svg';
import filtersByIcon from '../../icons/filters.svg';

function CryptoButtonsBlock() {
  const dispatch = useAppDispatch();
  const filterByWatchlist = useAppSelector((state) => state.filter.filterByWatchlist);
  const [filtersPopupVisibility, setFiltersPopupVisibility] = React.useState(false);
  const [categoryPopupVisibility, setCategoryPopupVisibility] = React.useState(false);
  const [sortPopupVisibility, setSortPopupVisibility] = React.useState(false);
  const onClick1 = () => {};

  const onClickFilters = () => {
    setFiltersPopupVisibility(!filtersPopupVisibility);
  };

  const onCloseFilters = () => {
    setFiltersPopupVisibility(false);
  };

  const onClickSort = () => {
    setSortPopupVisibility(!sortPopupVisibility);
  };

  const onCloseSortPopup = () => {
    setSortPopupVisibility(false);
  };

  const onClickCategory = () => {
    setCategoryPopupVisibility(!categoryPopupVisibility);
  };

  const onCloseCategoryPopup = () => {
    setCategoryPopupVisibility(false);
  };

  const onClickWatchlist = () => {
    dispatch(setWatchlistFilter(!filterByWatchlist));
  };

  const onClickOutside = (e: any) => {
    if (!e.path.find((item: any) => item.className === 'sort')) {
      setSortPopupVisibility(false);
    }

    if (!e.path.find((item: any) => item.className === 'filter-block')) {
      setFiltersPopupVisibility(false);
    }

    if (!e.path.find((item: any) => item.className === 'categories-block-mobile')) {
      setCategoryPopupVisibility(false);
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
      <div className="categories-btns-desktop">
        <CategoryButton text={'Cryptocurrencies'} onClick={onClick1} active className="ml-20" />
        <CategoryButton text={'DeFi'} onClick={onClick1} />
        <CategoryButton text={'NFT'} onClick={onClick1} />
        <CategoryButton text={'Polkadot'} onClick={onClick1} />
      </div>

      <div className="filters">
        <div className="categories-block-mobile">
          <CategoryOptionButton
            text={'Crypto'}
            onClick={onClickCategory}
            icon={sortByPrimaryIcon}
            className="ml-20"
          />
          {categoryPopupVisibility && (
            <CategoryPopup
              categoryOptions={['Crypto', 'DeFi', 'NFT', 'Polkadot']}
              onClose={onCloseCategoryPopup}
            />
          )}
        </div>
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
