// @flow

import express from 'express';

import getString from './test';

const app = express();

app.get('/', (req, res) => {
  res.send(getString());
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Example app listening on port 3000!');
});
