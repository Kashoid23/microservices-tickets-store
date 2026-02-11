import request from 'supertest';

import { app } from '../app';
import { Ticket } from '../models/ticket';

describe('Index ticket route', () => {
    it('returns all tickets', async () => {
        const ticket = await Ticket.build({
            title: 'Title',
            price: 10,
            userId: '123456789'
        }).save();

        const response = await request(app)
            .get('/v1/tickets')
            .send()
            .expect(200);

        expect(response.body).toEqual(
            [
                {
                    id: ticket.id,
                    title: ticket.title,
                    price: ticket.price,
                    userId: ticket.userId,
                }
            ]
        );
    });

    it('returns an empty array when no tickets exist', async () => {
        const response = await request(app)
            .get('/v1/tickets')
            .send()
            .expect(200);

        expect(response.body).toEqual([]);
    });
});
