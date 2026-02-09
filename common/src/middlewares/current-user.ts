import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';

interface UserPayload {
    id: string;
    email: string;
}

declare global {
    namespace Express {
        interface Request {
            currentUser?: UserPayload;
            session?: {
                jwt?: string;
            } | null;
        }
    }
}

export const currentUser = (req: Request, res: Response, next: NextFunction) => {
    if (!req.session?.jwt) {
        return next();
    }

    try {
        const payload = jwt.verify(req.session.jwt, process.env.JWT_SIGN!) as UserPayload;

        req.currentUser = {
            email: payload.email,
            id: payload.id,
        };
    } catch (err) {}

    next();
};
