import * as React from 'react';
import { Link as LinkRouter } from "react-router-dom";
import { AppBar, Toolbar, Link } from '@mui/material';
import ScienceIcon from '@mui/icons-material/Science';

export const Header = <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
  <Toolbar>
    <Link component={LinkRouter} underline="hover" to="/" variant="h6" color="#fff" noWrap>
      News Labs I/O <ScienceIcon />
    </Link>
  </Toolbar>
</AppBar>;
