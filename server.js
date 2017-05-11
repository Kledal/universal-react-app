import React from 'react';
import express from 'express';
import ReactDOMServer from "react-dom/server";

import Component from './src/Component';

const app = express();

app.use(express.static('public'));
app.get('/', (request, response) => {
  const html = ReactDOMServer.renderToString(
    React.createElement(Component)
  );

  response.send(html);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log("http://localhost:" + PORT);
});
