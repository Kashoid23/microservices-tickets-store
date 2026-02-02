import { MongoMemoryServer } from 'mongodb-memory-server';
import mongoose from 'mongoose';
import { beforeAll, beforeEach, afterAll } from '@jest/globals';
import request from 'supertest';

import { app } from '../app';

declare global {
    function signup(email?: string, password?: string): Promise<string[]>;
}

let mongo: MongoMemoryServer;

beforeAll(async () => {
    process.env.JWT_SIGN = 'test_jwt_signing_key';

    mongo = await MongoMemoryServer.create();
    const mongoUri = mongo.getUri();

    await mongoose.connect(mongoUri, {});
});

beforeEach(async () => {
    if (mongoose.connection.db) {
        const collections = await mongoose.connection.db.collections();
 
        for (let collection of collections) {
            await collection.deleteMany({});
        }
    }
});

afterAll(async () => {
    if (mongo) {
        await mongo.stop();
    }

    await mongoose.connection.close();
});

global.signup = async (email?: string, password?: string) => {
    const userEmail = email || 'test@example.com';
    const userPassword = password || 'password';

    const response = await request(app)
        .post('/v1/users')
        .send({
            email: userEmail,
            password: userPassword
        })
        .expect(201);

    const cookie = response.get('Set-Cookie') || [];

    return cookie;
};
