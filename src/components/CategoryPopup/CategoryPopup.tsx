import React from 'react';

type CategoryPopupProps = {
  categoryOptions: Array<string>;
  onClose: (event: React.MouseEvent) => void;
};

function CategoryPopup({ categoryOptions, onClose }: CategoryPopupProps) {
  return (
    <div className="category-popup">
      <div className="category-popup-close">
        <button onClick={onClose}>
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
      <ul className="category-popup-options">
        {categoryOptions.map((item, index) => (
          <li className="category-popup-options__item" key={index}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CategoryPopup;
