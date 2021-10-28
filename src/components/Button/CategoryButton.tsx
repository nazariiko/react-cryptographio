import React from 'react';

import classNames from 'classnames';

type CategoryButtonProps = {
  text: string;
  active?: boolean;
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
};

function CategoryButton({ text, className, onClick, active }: CategoryButtonProps) {
  return (
    <button
      onClick={onClick}
      className={classNames('category-btn', className, { 'category-btn__active': active })}>
      {text}
    </button>
  );
}

export default React.memo(CategoryButton);
