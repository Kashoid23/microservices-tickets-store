import express from 'express';
import { json } from 'body-parser';
import cookieSession from 'cookie-session';
import { errorHandler, NotFoundError } from '@kashoid/common';

const app = express();
app.set('trust proxy', true);
app.use(json());
app.use(cookieSession({
    signed: false,
    secure: process.env.NODE_ENV === 'production',
}));

app.use((req, res) => {
  throw new NotFoundError();
});

app.use(errorHandler);

export { app };
