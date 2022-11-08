import { createContext, useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import "./Example.css";

export const ThemeContext = createContext()

const Example = () => {
  const [theme, setTheme] = useState('light')
  
  const changeTheme = (e) => setTheme(e.target.value)
  
  const THEMES = ['light', 'dark', 'red'];

  return (
    <ThemeContext.Provider value={[theme, setTheme]}>
      <Header />
      <Main />
    </ThemeContext.Provider>
  );
};

export default Example;
