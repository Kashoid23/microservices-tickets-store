import mongoose from 'mongoose';
import { DatabaseConnectionError } from '@kashoid/common';

import { app } from './app';

const start = async () => {
    if (!process.env.MONGODB_URI) {
        throw new Error('MONGODB_URI must be defined');
    }

    try {
        await mongoose.connect(process.env.MONGODB_URI);
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
