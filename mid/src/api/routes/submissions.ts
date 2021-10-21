import { Router } from 'express';
import { getSubmissionsAndUsers, getSubmissionAndUser } from '../db';
import handleError from '../lib/handleError';

const router = Router();

router.get('/submissions', async (req, res) => {
  try {
    const submission = await getSubmissionsAndUsers();
    res.json(submission);
  } catch (error) {
    handleError(res, error as Error);
  }
});

router.get('/submissions/:id', async (req, res) => {
  const submissionId = req.params['id'];
  try {
    const [submission] = await getSubmissionAndUser(submissionId);
    res.json(submission);
  } catch (error) {
    handleError(res, error as Error);
  }
});

export default router;