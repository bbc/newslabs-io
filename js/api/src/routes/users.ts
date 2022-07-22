import { Router } from 'express';
import { getUsersAndRoles } from '../db';
import handleError from '../lib/handleError';

const router = Router();

router.get('/users', async (req, res) => {
  try {
    const user = await getUsersAndRoles();
    res.json(user);
  } catch (error) {
    handleError(res, error as Error);
  }
});

export default router;