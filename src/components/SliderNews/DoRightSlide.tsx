import React from 'react';

import rightArrow from '../../icons/right-slide-arrow.svg';

type DoRightSlideProps = {
  handleScrollRight: () => void;
};

function DoRightSlide({ handleScrollRight }: DoRightSlideProps) {
  return (
    <div className="right-slide-block">
      <button onClick={handleScrollRight}>
        <img src={rightArrow} alt="right arrow" />
      </button>
    </div>
  );
}

export default DoRightSlide;
