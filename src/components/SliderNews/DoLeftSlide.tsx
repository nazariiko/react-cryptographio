import React from 'react';

import leftArrow from '../../icons/left-slide-arrow.svg';

type DoLeftSlideProps = {
  handleScrollLeft: () => void;
};

function DoLeftSlide({ handleScrollLeft }: DoLeftSlideProps) {
  return (
    <div className="left-slide-block">
      <button onClick={handleScrollLeft}>
        <img src={leftArrow} alt="left arrow" />
      </button>
    </div>
  );
}

export default DoLeftSlide;
