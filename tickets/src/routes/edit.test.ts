import request from 'supertest';
import mongoose from 'mongoose';

import { app } from '../app';
import { Ticket } from '../models/ticket';

describe('Edit ticket route', () => {
    it('returns a ticket after update', async () => {
        const userId = new mongoose.Types.ObjectId().toHexString();
        const ticket = await Ticket.build({
            title: 'Title',
            price: 10,
            userId: userId
        }).save();
        const response = await request(app)
            .put(`/v1/tickets/${ticket.id}`)
            .set('Cookie', mockedCookie(userId))
            .send({
                title: 'Updated title',
                price: 20
            })
            .expect(200);

        expect(response.body).toEqual({
            title: 'Updated title',
            price: 20,
            userId: ticket.userId,
            id: ticket.id
        })
    });

        it('returns a 400 when titte or price is invalid', async () => {
        const userId = new mongoose.Types.ObjectId().toHexString();
        const ticket = await Ticket.build({
            title: 'Title',
            price: 10,
            userId: userId
        }).save();
        const response = await request(app)
            .put(`/v1/tickets/${ticket.id}`)
            .set('Cookie', mockedCookie(userId))
            .send({
                title: '',
                price: 0
            })
            .expect(400);

        expect(response.body.errors).toEqual([
            {
                "field": "title",
                "message": "Title is required"
            },
            {
                "field": "price",
                "message": "Price must be greater than 0"
            }
        ]);
    });

    it('returns a 401 when trying to update a ticket not owned by the user', async () => {
        const ticket = await Ticket.build({
            title: 'Title',
            price: 10,
            userId: '698ca2b3f7a103b2d8239c7c' // ticket owned by another user
        }).save();
        const response = await request(app)
            .put(`/v1/tickets/${ticket.id}`)
            .set('Cookie', mockedCookie())
            .send({
                title: 'Updated title',
                price: 20
            })
            .expect(401);

        expect(response.body.errors[0].message).toEqual('Unauthorized');
    });

    it('returns a 401 when not authenticated', async () => {
        const response = await request(app)
            .put(`/v1/tickets/${new mongoose.Types.ObjectId().toHexString()}`)
            .send({
                title: 'Updated title',
                price: 20
            })
            .expect(401);

        expect(response.body.errors[0].message).toEqual('Unauthorized');
    });

    it('returns a 404 when ticket does not exist', async () => {
        const response = await request(app)
            .put(`/v1/tickets/${new mongoose.Types.ObjectId().toHexString()}`)
            .set('Cookie', mockedCookie())
            .send({
                title: 'Updated title',
                price: 20
            })
            .expect(404);

        expect(response.body.errors[0].message).toEqual('Not Found');
    });
});
