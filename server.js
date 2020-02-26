const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PUBLIC_DIR = path.resolve(__dirname, './public');
const port = process.env.PORT || 8080;

app
  .use(cors())
  .use(express.static(PUBLIC_DIR))
  .use(bodyParser.json())
  .listen(port, () => console.info('app is running on http://localhost:' + port));

module.exports = app;
