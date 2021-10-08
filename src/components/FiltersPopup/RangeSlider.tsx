import * as React from 'react';

import Slider from '@material-ui/core/Slider';
import { ThemeProvider, createTheme } from '@material-ui/core/styles';

import { useMemoryState } from '../../hooks/useMemoryState';

import { useAppDispatch } from '../../app/hooks';
import { setMarketCapFilter } from '../../redux/filter/filterSlice';

const theme = createTheme({
  components: {
    MuiSlider: {
      styleOverrides: {
        thumb: {
          '&:hover, &.Mui-focusVisible': {
            boxShadow: '0px 0px 0px 10px rgba(117, 0, 189, 0.1)',
          },
          color: '#fff',
          border: '1px solid var(--primary-1)',
        },
        track: {
          color: 'var(--primary-1)',
        },
        rail: {
          color: 'var(--primary-1)',
        },
      },
    },
  },
});

function RangeSlider({ onCloseFilters }: any) {
  const [value, setValue] = useMemoryState('range', [0, 1500000000000]);
  const dispatch = useAppDispatch();

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };

  const formatNumber = (number: number) => {
    let count = 0;
    let arr = number.toString().split('').reverse();
    for (let i = 1; i < arr.length; i++) {
      if (i % 3 === 0 && i >= 3) {
        arr.splice(i + count, 0, ',');
        count++;
      }
    }

    while (arr[arr.length - 1] === ',') {
      arr.pop();
    }

    return `$${arr.reverse().join('')}`;
  };

  return (
    <div className="filters-popup-range-slider">
      <label htmlFor="market-cap-min">$0</label>
      <label htmlFor="market-cap-max">$1.5T</label>
      <ThemeProvider theme={theme}>
        <Slider
          value={value}
          onChange={handleChange}
          valueLabelDisplay="off"
          min={0}
          max={1500000000000}
          step={100000}
        />
      </ThemeProvider>
      <div className="filters-popup-from-to">
        <div className="filters-from">
          <p>From:</p>
          <span>{formatNumber(value[0])}</span>
        </div>
        <div className="filters-to">
          <p>To:</p>
          <span>{formatNumber(value[1])}</span>
        </div>
      </div>
      <button
        onClick={() => {
          dispatch(setMarketCapFilter(value));
          onCloseFilters();
        }}
        className="filters-popup__submit-btn">
        Submit
      </button>
    </div>
  );
}

export default RangeSlider;
