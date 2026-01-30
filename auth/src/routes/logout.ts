import express from 'express';

const router = express.Router();

router.delete('/v1/logout', (req, res) => {
    req.session = null;

    res.send({ message: 'Logged out successfully' });
});

export { router as logoutRouter };
