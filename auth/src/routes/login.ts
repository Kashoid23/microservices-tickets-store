import express from 'express';

const router = express.Router();

router.post('/v1/login', (req, res) => {
    res.send('Login successful');
});

export { router as loginRouter };
