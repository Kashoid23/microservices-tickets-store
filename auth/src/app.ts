import express from 'express';
import { json } from 'body-parser';
import cookieSession from 'cookie-session';

import { userRouter } from './routes/users';
import { loginRouter } from './routes/login';
import { logoutRouter } from './routes/logout';
import { errorHandler } from './middlewares/error-handler';
import { NotFoundError } from './errors/not-found-error';

const app = express();
app.set('trust proxy', true);
app.use(json());
app.use(cookieSession({
    signed: false,
    secure: process.env.NODE_ENV !== 'test'
}));

app.use(userRouter);
app.use(loginRouter);
app.use(logoutRouter);

app.use((req, res) => {
  throw new NotFoundError();
});

app.use(errorHandler);

export { app };
