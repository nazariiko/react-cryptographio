import React from 'react';
import classNames from 'classnames';

type OptionButtonProps = {
  text: string;
  icon?: string;
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
};

function OptionButton({ text, icon, className, onClick }: OptionButtonProps) {
  return (
    <button onClick={onClick} className={classNames('option-btn', className)}>
      <img src={icon} alt={text} />
      {text}
    </button>
  );
}

export default React.memo(OptionButton);
