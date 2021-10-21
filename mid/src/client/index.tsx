import ReactDOM from 'react-dom';
import React from 'react';
import { Box, CssBaseline, ThemeProvider } from '@mui/material';
import { Content } from './Components/Content';
import { Header } from './Components/Header';
import { Navigation } from './Components/Navigation';
import { theme } from './theme';

const App = () => {
  return <ThemeProvider theme={theme}>
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      {Header}
      {Navigation}
      {Content}
    </Box>
  </ThemeProvider>;
};

ReactDOM.render(<App />, document.getElementById('app'));
