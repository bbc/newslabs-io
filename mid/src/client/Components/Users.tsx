import * as React from 'react';
import { Box, Toolbar, Typography } from '@mui/material';

export const Users = <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
  <Toolbar />
  <Typography paragraph>
    User 1
  </Typography>
  <Typography paragraph>
    User 2
  </Typography>
</Box>;
