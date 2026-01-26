import express from 'express';
import { json } from 'body-parser';
import mongoose from 'mongoose';

import { userRouter } from './routes/users';
import { sessionRouter } from './routes/sessions';
import { errorHandler } from './middlewares/error-handler';
import { NotFoundError } from './errors/not-found-error';
import { DatabaseConnectionError } from './errors/database-connection-error';

const app = express();
app.use(json());

app.use(userRouter);
app.use(sessionRouter);

app.use((req, res) => {
  throw new NotFoundError();
});

app.use(errorHandler);

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
