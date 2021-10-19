import { Router } from 'express';

const router = Router();

router.get('/users', async (req, res) => {
  res.json([
      {
          id: '1',
          name: 'santa clause'
      }
  ]);
});

export default router;