import * as React from 'react';
import { useEffect, useState } from 'react';
import { Box, Toolbar, Typography } from '@mui/material';

interface Submission {
  id: number,
  title: string,
  text: string,
  username: string,
  created_at: string
}

export function Submissions() {
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [hasDoneInitialFetch, setHasDoneInitialFetch] = useState<boolean>(false);

  useEffect(() => {
    async function fetchSubmissions() {
      const res = await fetch('/api/submissions');
      const submissionData = await res.json();

      setSubmissions(submissionData);
      setHasDoneInitialFetch(true);
    }
    if (!hasDoneInitialFetch) {
      fetchSubmissions();
    }
  });

  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      <Toolbar />
      {hasDoneInitialFetch
        ? submissions.map(submission => {
          return (
            <Typography paragraph key={"submission-" + submission.id}>
              {submission.title}: {submission.text} ({submission.created_at}, {submission.username})
            </Typography>
          );
        })
        : <Typography>LOADING</Typography>
      }
    </Box>
  );
}
