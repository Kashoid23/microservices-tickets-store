import express from 'express';

const router = express.Router();

router.delete('/v1/logout', (req, res) => {
    res.send('Logout successful');
});

export { router as logoutRouter };
