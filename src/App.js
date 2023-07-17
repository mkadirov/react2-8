import {CssBaseline, createTheme, ThemeProvider} from '@mui/material'
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';

import { useState } from 'react';
import DarkModeContext from './components/DarkModeContext/DarkModeContext';



let getTheme = (mode) => 
createTheme({
  palette: {
    mode: mode,
    primary: {
      main: '#0052cc',
    },
    secondary: {
      main: '#edf2ff',
    },
  },
  shape: {
    borderRadius: 10,
  }
});



function App() {
  const [mode, setMode] = useState('light');

  return (
    <>
    <DarkModeContext.Provider value={{mode, toggleMode: ()=> setMode(mode === 'light'? 'dark': 'light')}}>
    <ThemeProvider theme={getTheme(mode)}>
      <CssBaseline/>
      <Header/>
      <Main/>
      <Footer/>
    </ThemeProvider>
    </DarkModeContext.Provider>
    
    </>
  );
}

export default App;
