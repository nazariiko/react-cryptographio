import React from 'react';

import RangeSlider from './RangeSlider';

type FiltersPopupProps = {
  onCloseFilters: (event: React.MouseEvent) => void;
};

function FiltersPopup({ onCloseFilters }: FiltersPopupProps) {
  return (
    <div className="filters-popup">
      <div className="filters-popup-heading">
        <h3>Market cap</h3>
        <button onClick={onCloseFilters}>
          <svg
            width="20"
            height="20"
            viewBox="0 0 32 34"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <line
              x1="30.7071"
              y1="2.70711"
              x2="0.707107"
              y2="32.7071"
              stroke="black"
              strokeWidth="1"
            />
            <line
              x1="0.707107"
              y1="1.29289"
              x2="30.7071"
              y2="31.2929"
              stroke="black"
              strokeWidth="1"
            />
          </svg>
        </button>
      </div>
      <RangeSlider onCloseFilters={onCloseFilters} />
    </div>
  );
}

export default FiltersPopup;
