import * as React from 'react';
import { useEffect, useState } from 'react';
import { Box, Grid, Toolbar, Typography } from '@mui/material';
import { Submission } from '../model';
import SubmissionCard from './SubmissionCard';

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

  function createSubmissionsCard(submission: Submission): JSX.Element {
    return (
      <Grid key={submission.id} item md={3}>
        {SubmissionCard(submission)}
      </Grid>
    );
  }

  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      <Toolbar />
      <Grid container spacing={3}>
        {hasDoneInitialFetch
          ? submissions.map(createSubmissionsCard)
          : <Typography>LOADING</Typography>
        }
      </Grid>
    </Box>
  );
}
