import express from 'express';

const router = express.Router();

router.post('/v1/sessions', (req, res) => {
    res.send('Login successful');
});

router.delete('/v1/sessions', (req, res) => {
    res.send('Logout successful');
});

export { router as sessionRouter };
