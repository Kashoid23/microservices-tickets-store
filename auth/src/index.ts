import express from 'express';
import { json } from 'body-parser';

const app = express();
app.use(json());

app.get('/v1/users/current', (req, res) => {
  res.send('Current user');
});

app.listen(3000, () => {
  console.log('Listening on port 3000');
});