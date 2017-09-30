// @flow

import express from 'express';

import getString from './internalmodule';

const app = express();

app.get('/', (req, res) => {
  res.send(getString());
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('This app is a web server listening on port 3000!');
});
