import * as React from 'react';
import { Box, Toolbar, Typography } from '@mui/material';
import { useEffect, useState } from 'react';

export function Users() {
  const [users, setUsers] = useState([]);
  const [hasDoneInitialFetch, setHasDoneInitialFetch] = useState(false);

  useEffect(() => {
    async function fetchUsers() {
      const res = await fetch('/api/users');
      const userData = await res.json();

      setUsers(userData);
      setHasDoneInitialFetch(true);
    }
    if (!hasDoneInitialFetch) {
      fetchUsers();
    }
  });

  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      <Toolbar />
      {hasDoneInitialFetch
        ? users.map(user => {
          return (
            <Typography paragraph key={"user-" + user.id}>
              {user.username}: {user.description} ({user.created_at})
            </Typography>
          );
        })
        : <Typography>LOADING</Typography>
      }
    </Box>
  );
}