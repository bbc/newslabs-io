import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Submission } from '../model';

export default function SubmissionCard(submission: Submission) {
  return (
    <Card variant="outlined">
      <CardContent>
        <p style={{ fontWeight: "bold" }}>
          {submission.title}
        </p>
        <p>
          {submission.text}
        </p>
        <p style={{ fontStyle: "italic" }}>
          {submission.username}
        </p>
        <p>
          {submission.created_at}
        </p>
      </CardContent>
    </Card>
  );
}
