import request from 'supertest';

import { app } from '../app';

describe('Login route', () => {
    it('returns an error when an invalid email is supplied', async () => {
        const response = await request(app)
            .post('/v1/login')
            .send({
                email: 'email@example.com',
                password: 'password'
            })
            .expect(400);

        expect(response.body.errors[0].message).toEqual('Invalid email or password');
    });

    it('returns an error when an incorrect password is supplied', async () => {
        const email = 'test@example.com';
        const password = 'password';

        await request(app)
            .post('/v1/users')
            .send({ email, password })
            .expect(201);

        const response = await request(app)
            .post('/v1/login')
            .send({
                email,
                password: 'wrongpassword'
            })
            .expect(400);

        expect(response.body.errors[0].message).toEqual('Invalid email or password');
    });

    it('returns a user when given valid credentials', async () => {
        const email = 'test@example.com';
        const password = 'password';

        await request(app)
            .post('/v1/users')
            .send({ email, password })
            .expect(201);

        const response = await request(app)
            .post('/v1/login')
            .send({
                email,
                password
            })
            .expect(200);

        expect(response.get('Set-Cookie')).toBeDefined();
        expect(response.body).toEqual({
            email: email,
            id: expect.any(String)
        });
    });
});
