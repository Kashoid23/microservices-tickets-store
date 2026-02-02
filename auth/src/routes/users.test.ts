import request from 'supertest';

import { app } from '../app';

describe('Current user route', () => {
    it('returns null if not authenticated', async () => {
        const response = await request(app)
            .get('/v1/users/current')
            .send()
            .expect(200);

        expect(response.body.currentUser).toBeNull();
    });

    it('returns current user if authenticated', async () => {
        const email = 'test@example.com';
        const password = 'password';

        const signupResponse = await request(app)
            .post('/v1/users')
            .send({ email, password })
            .expect(201);

        const cookie = signupResponse.get('Set-Cookie') || [];

        const response = await request(app)
            .get('/v1/users/current')
            .set('Cookie', cookie)
            .send()
            .expect(200);

        expect(response.body.currentUser.email).toEqual(email);
    });
});

describe('User create route', () => {
    it('creates a new user with valid inputs', async () => {
        const email = 'test@example.com';

        const response = await request(app)
            .post('/v1/users')
            .send({ email, password: 'password' })
            .expect(201);

        expect(response.get('Set-Cookie')).toBeDefined();
        expect(response.body).toEqual({
            email: email,
            id: expect.any(String)
        });
    });

    it('returns an error when email is missing', async () => {
        const response = await request(app)
            .post('/v1/users')
            .send({ password: 'password' })
            .expect(400);

        expect(response.body.errors[0].message).toEqual('Email must be valid');
    });

    it('returns an error when email is invalid', async () => {
        const response = await request(app)
            .post('/v1/users')
            .send({ email: 'invalid-email', password: 'password' })
            .expect(400);
        
        expect(response.body.errors[0].message).toEqual('Email must be valid');
    });

    it('returns an error when password is missing', async () => {
        const response = await request(app)
            .post('/v1/users')
            .send({ email: 'test@example.com' })
            .expect(400);

        expect(response.body.errors[0].message).toEqual('Password must be between 4 and 20 characters');
    });

    it('returns an error when password is too short', async () => {
        const response = await request(app)
            .post('/v1/users')
            .send({ email: 'test@example.com', password: '123' })
            .expect(400);

        expect(response.body.errors[0].message).toEqual('Password must be between 4 and 20 characters');
    });

    it('returns an error when password is too long', async () => {
        const longPassword = 'a'.repeat(21);

        const response = await request(app)
            .post('/v1/users')
            .send({ email: 'test@example.com', password: longPassword })
            .expect(400);

        expect(response.body.errors[0].message).toEqual('Password must be between 4 and 20 characters');
    });

    it('returns an error when email already exists', async () => {
        const email = 'test@example.com';
        const password = 'password';

        await request(app)
            .post('/v1/users')
            .send({ email, password })
            .expect(201);

        const response = await request(app)
            .post('/v1/users')
            .send({ email, password })
            .expect(400);

        expect(response.body.errors[0].message).toEqual('Email already exists');
    });
});
