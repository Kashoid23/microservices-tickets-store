import mongoose from 'mongoose';

import { app } from './app';
import { DatabaseConnectionError } from './errors/database-connection-error';

const start = async () => {
    try {
        await mongoose.connect('mongodb://auth-mongo-service:27017/auth');
        console.log('Connected to MongoDB');
    } catch (error) {
        console.log(error);
        throw new DatabaseConnectionError();
    }

    app.listen(3000, () => {
        console.log('Listening on port 3000');
    });
};

start();
