import { Router } from 'express';
import db from '../db';
const router = Router();

router.get('/users', async (req, res) => {
  const users = await db.select('*').from('users');
  res.json(users);
});

export default router;