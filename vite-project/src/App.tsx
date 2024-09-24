import { useState } from 'react';
import './App.css'
import Header from './components/Header/index.tsx'
import Main from "./components/Main/Main.tsx"
import { createContext } from 'react';

export const ThemeContext = createContext< {theme:string, setTheme:React.Dispatch<React.SetStateAction<string>>} | null>(null);

function App() {
  const [theme, setTheme] = useState("light")
  
  
  return (
    <ThemeContext.Provider value = {{theme , setTheme}}>
    <div className={`container ${theme}`}>
      <Header />
      <Main />
    </div>
    </ThemeContext.Provider>
  )
}

export default App
