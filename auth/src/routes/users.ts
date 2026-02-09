import express, { Request, Response } from 'express';
import { body } from 'express-validator';
import jwt from 'jsonwebtoken';
import { BadRequestError, currentUser, validateRequest } from '@kashoid/common';

import { User } from '../models/user';

const router = express.Router();

router.get('/v1/users/current', currentUser, (req, res) => {
    res.send({ currentUser: req.currentUser || null });
});

router.post('/v1/users', [
    body('email').isEmail().withMessage('Email must be valid'),
    body('password').trim().isLength({ min: 4, max: 20 }).withMessage('Password must be between 4 and 20 characters')
],
validateRequest,
async (req: Request, res: Response) => {
    const { email, password } = req.body;

    const existingUser = await User.findOne({ email });

    if (existingUser) {
        throw new BadRequestError('Email already exists');
    }

    const newUser = User.build({ email, password });
    await newUser.save();

    const userJwt = jwt.sign({
        id: newUser.id,
        email: newUser.email
    }, process.env.JWT_SIGN!);

    req.session = { jwt: userJwt };

    res.status(201).send(newUser);
});

export { router as userRouter };
