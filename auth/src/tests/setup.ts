import { MongoMemoryServer } from 'mongodb-memory-server';
import mongoose from 'mongoose';
import { beforeAll, beforeEach, afterAll } from '@jest/globals';

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
