import request from 'supertest';
import mongoose from 'mongoose';

import { app } from '../app';
import { Ticket } from '../models/ticket';

describe('Show ticket route', () => {
    it('returns a ticket', async () => {
        const ticket = await Ticket.build({
            title: 'Title',
            price: 10,
            userId: '123456789'
        }).save();

        const response = await request(app)
            .get(`/v1/tickets/${ticket.id}`)
            .send()
            .expect(200);

        expect(response.body.id).toEqual(ticket.id);
    });

    it('returns a 404 when ticket does not exist', async () => {
        const response = await request(app)
            .get(`/v1/tickets/${new mongoose.Types.ObjectId().toHexString()}`)
            .send()
            .expect(404);

        expect(response.body.errors[0].message).toEqual('Not Found');
    });
});
