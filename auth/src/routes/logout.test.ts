import request from 'supertest';

import { app } from '../app';

describe('Logout route', () => {
    it('returns a success message and clears the session cookie after logging out', async () => {
        const signupCookie = await signup();

        expect(signupCookie[0]).not.toMatch(/session=;/);

        const response = await request(app)
            .delete('/v1/logout')
            .set('Cookie', signupCookie)
            .send()
            .expect(200);

        const cookie = response.get('Set-Cookie') || [];

        expect(cookie[0]).toMatch(/session=;/);
        expect(response.body).toEqual({ message: 'Logged out successfully' });
    });
});
