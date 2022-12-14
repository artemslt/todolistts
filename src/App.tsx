import React, { useEffect } from 'react';
import './App.css';

import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import LightModeIcon from '@mui/icons-material/LightMode';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Header from './components/Header/Header';
import AddToDo from './components/AddToDo/AddToDo';
import ContactsList from './components/Contactlist/Contactlist';
import { PaletteMode } from '@mui/material';

// eslint-disable-next-line @typescript-eslint/no-empty-function
const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

function App() {
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);

  return (
    <>
      <CssBaseline />
      <Container maxWidth='md'>
        <Box
          sx={{
            display: 'flex',
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            bgcolor: 'background.default',
            color: 'text.primary',
            borderRadius: 1
          }}
        >
          {theme.palette.mode} mode
          <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color='inherit'>
            {theme.palette.mode === 'dark' ? <Brightness4Icon /> : <LightModeIcon />}
          </IconButton>
        </Box>
        <Header />
        <AddToDo />
        <ContactsList />
      </Container>
    </>
  );
}

export default function ToggleColorMode() {
  const [mode, setMode] = React.useState<PaletteMode>();
  useEffect(() => {
    const theme = localStorage.getItem('theme') || 'light';
    if (theme === 'dark') {
      setMode('dark');
      return;
    }
    setMode('light');
  }, []);

  useEffect(() => {
    if (!mode) {
      return;
    }
    localStorage.setItem('theme', mode);
  }, [mode]);

  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      }
    }),
    []
  );

  const theme = createTheme({
    palette: {
      mode
    }
  });

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
