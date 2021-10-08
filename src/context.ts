import React from "react";

type Theme = { theme: string; toggleTheme: (theme: string) => void };

export const ThemeContext = React.createContext({} as Theme)
