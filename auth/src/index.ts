import express from 'express';
import { json } from 'body-parser';

import { userRouter } from './routes/users';
import { sessionRouter } from './routes/sessions';
import { errorHandler } from './middlewares/error-handler';
import { NotFoundError } from './errors/not-found-error';

const app = express();
app.use(json());

app.use(userRouter);
app.use(sessionRouter);

app.use((req, res) => {
  throw new NotFoundError();
});

app.use(errorHandler);

app.listen(3000, () => {
    console.log('Listening on port 3000');
});
