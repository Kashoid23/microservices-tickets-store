import express, { Request, Response } from 'express';
import { body } from 'express-validator';
import { validateRequest, currentUser, authorize, NotFoundError, UnauthorizedError } from '@kashoid/common';
import { Ticket } from '../models/ticket';

const router = express.Router();

router.put('/v1/tickets/:id',
currentUser,
authorize,
[
    body('title').notEmpty().withMessage('Title is required'),
    body('price').isFloat({ gt: 0 }).withMessage('Price must be greater than 0'),
],
validateRequest,
async (req: Request, res: Response) => {
    const ticket = await Ticket.findById(req.params.id);

    if (!ticket) {
        throw new NotFoundError();
    }

    if (ticket.userId !== req.currentUser!.id) {
        throw new UnauthorizedError();
    }

    ticket.set({
        title: req.body.title,
        price: req.body.price
    });

    await ticket.save();

    res.status(200).send(ticket);
});

export { router as updateTicketRouter };
