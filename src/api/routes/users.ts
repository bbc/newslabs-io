import { Router } from 'express';
import { getUsersAndRoles, getUserAndRole } from '../db';
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

router.get('/users/:id', async (req, res) => {
  const userId = req.params['id'];
  try {
    const user = await getUserAndRole(userId);
    res.json(user);
  } catch (error) {
    handleError(res, error as Error);
  }
});

export default router;