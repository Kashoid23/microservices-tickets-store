import express from 'express';

const router = express.Router();

router.get('/v1/users/current', (req, res) => {
  res.send('Current user');
});

router.post('/v1/users', (req, res) => {
  res.send('User created');
});

export { router as userRouter };
