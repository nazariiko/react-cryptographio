import React from 'react';

import { ThemeContext } from '../../context';

import darkThemeIcon from '../../icons/moon.svg';
import lightThemeIcon from '../../icons/sun.svg';

type ThemeProps = {
  className: string;
};

function Theme({ className }: ThemeProps) {
  const { theme, toggleTheme } = React.useContext(ThemeContext);

  const onToggleTheme = (event: any) => {
    const { theme } = event.currentTarget.dataset;
    toggleTheme(theme);
  };

  return (
    <button
      className={className}
      onClick={onToggleTheme}
      data-theme={theme === 'light' ? 'dark' : 'light'}>
      {theme === 'light' ? (
        <img src={darkThemeIcon} alt="dark-mode" />
      ) : (
        <img src={lightThemeIcon} alt="dark-mode" />
      )}
    </button>
  );
}

export default Theme;
