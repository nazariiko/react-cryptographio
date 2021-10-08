import React from 'react';

import { Route } from 'react-router-dom';

import { Header } from './components/Header';
import { Footer } from './components/Footer';

import { Home } from './pages/Home';
import { Cryptocurrencies } from './pages/Cryptocurrencies';
import { Exchanges } from './pages/Exchanges';
import { News } from './pages/News';

import { ThemeContext } from './context';
import { getTheme, setTheme } from './helpers/theme';

function App() {
  const [theme, toggleTheme] = React.useState(getTheme());

  React.useEffect(() => {
    setTheme(theme);
  }, [theme]);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
      }}>
      <div className="wrapper">
        <Header />

        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/cryptocurrencies">
          <Cryptocurrencies />
        </Route>
        <Route exact path="/exchanges">
          <Exchanges />
        </Route>
        <Route exact path="/news">
          <News />
        </Route>

        <Footer />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
