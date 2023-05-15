import express from 'express';
import mustacheExpress from 'mustache-express';
import { createProxyMiddleware } from 'http-proxy-middleware';

import fs from 'fs';
import { parse } from 'yaml';

const app = express();
app.engine('mustache', mustacheExpress());

app.set('views', './views');
app.set('view engine', 'mustache');

const file = fs.readFileSync('./config.yml', 'utf8');
const config = parse(file);

// on openshift this would just be named urls
const servers = new Map([['blue', 'http://localhost:3001'], ['green', 'http://localhost:3002'], ['red', 'http://localhost:3003']])

Object.values(config).forEach(e => {
  e.fragments.forEach(f => {
    app.use(`/${f.name}`, createProxyMiddleware({ target: servers.get(f.name) }));
  })
});

app.use('/', express.static('./public'));

app.use('/:page?', (req, res) => {
  const { page } = req.params || 'main';

  res.render(page, config[page])
});

app.listen(3000);