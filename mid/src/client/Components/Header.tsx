import * as React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

export const Header = <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
  <Toolbar>
    <Typography variant="h6" noWrap component="div">
      News Labs I/O
    </Typography>
  </Toolbar>
</AppBar>;
