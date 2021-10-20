import { Response, Router } from 'express';
import { getUsersAndRoles, getUserAndRole } from '../db';

const router = Router();

function handleError(res: Response, error: Error) {
  const message = (error as Error).message;
  console.log(`Database Error: ${message}`);
  res.sendStatus(500);
}

router.get('/users', async (req, res) => {
  try {
    const user = await getUsersAndRoles();
    res.json(user);
  } catch (error) {
    handleError(res, error as Error)
  }
});

router.get('/users/:id', async (req, res) => {
  const userId = req.params['id'];
  try {
    const [user] = await getUserAndRole(userId);
    res.json(user);
  } catch (error) {
    handleError(res, error as Error)
  }
});

export default router;