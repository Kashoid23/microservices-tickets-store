import request from 'supertest';

import { app } from '../app';

describe('New ticket route', () => {
    it('returns a 401 when not authenticated', async () => {
        const response = await request(app)
            .post('/v1/tickets')
            .send({});

        expect(response.status).toEqual(401);
    });

    it('returns a 201 when authenticated', async () => {
        const response = await request(app)
            .post('/v1/tickets')
            .set('Cookie', mockedCookie())
            .send({
                title: 'Title',
                price: 10
            });

        expect(response.status).toEqual(201);
    });

    it('returns a 400 when titte is invalid', async () => {
        const response = await request(app)
            .post('/v1/tickets')
            .set('Cookie', mockedCookie())
            .send({
                title: '',
                price: 10
            })
            .expect(400);

         expect(response.body.errors[0].message).toEqual('Title is required');
    });

    it('returns a 400 when price is invalid', async () => {
        const response = await request(app)
            .post('/v1/tickets')
            .set('Cookie', mockedCookie())
            .send({
                title: 'Title',
                price: 0
            })
            .expect(400);

        expect(response.body.errors[0].message).toEqual('Price must be greater than 0');
    });
});
