import React from 'react';

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { setSort } from '../../redux/sort/sortSlice';

type SortPopupProps = {
  sortOptions: Array<string>;
  onCloseSortPopup: (event?: React.MouseEvent) => void;
};

function SortPopup({ sortOptions, onCloseSortPopup }: SortPopupProps) {
  const dispatch = useAppDispatch();
  const sort = useAppSelector((state) => state.sort.sort);

  return (
    <div className="sort-popup">
      <div className="sort-popup-close">
        <button onClick={onCloseSortPopup}>
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
      <ul className="sort-popup-options">
        {sortOptions.map((item, index) => (
          <li
            onClick={(e) => {
              dispatch(setSort(item));
              onCloseSortPopup();
            }}
            className={`sort-popup-options__item ${item === sort ? 'active' : ''}`}
            key={index}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SortPopup;
