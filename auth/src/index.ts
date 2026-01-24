import express from 'express';
import { json } from 'body-parser';

import { userRouter } from './routes/users';
import { sessionRouter } from './routes/sessions';

const app = express();
app.use(json());

app.use(userRouter);
app.use(sessionRouter);

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
