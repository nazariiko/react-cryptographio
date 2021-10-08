import React from 'react';

import classNames from 'classnames';

type CategoryOptionButtonProps = {
  text: string;
  icon?: string;
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
};

function CategoryOptionButton({ text, className, onClick, icon }: CategoryOptionButtonProps) {
  return (
    <button onClick={onClick} className={classNames('category-option-btn', className)}>
      <img src={icon} alt={text} />
      {text}
    </button>
  );
}

export default CategoryOptionButton;
