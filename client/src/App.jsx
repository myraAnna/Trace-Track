import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ColorModeContext, useMode } from './theme';
import { CssBaseline, ThemeProvider } from '@mui/material';
import Topbar from './scenes/global/Topbar';
import Navbar from './scenes/global/Navbar';
import Dashboard from './scenes/simulation'; //NAVBAR ONLY WORKING FOR THIS BUT NOT FOR OTHER
import Simulation from './scenes/simulation'; 
/*Data & Reports*/
import About from './scenes/about';

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">

            <Navbar />
            <main className="content">
              <Topbar />
                <Routes>
                  <Route path="/" element={<Dashboard />} />
                  <Route path="/simulation" element={<Simulation />} />
                  <Route path="/about" element={<About />} />
                </Routes>
            </main>
          </div>;

      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
