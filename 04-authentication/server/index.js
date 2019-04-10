/* --------------------------------------------------
*  ---- Imports
*  -------------------------------------------------- */
const express    = require('express');
const http       = require('http');
const bodyParser = require('body-parser');
const morgan     = require('morgan');
const mongoose   = require('mongoose');
const cors       = require('cors');

const router = require('./router');

/* --------------------------------------------------
*  ---- Database Setup
*  -------------------------------------------------- */
mongoose.connect('mongodb://localhost:auth/auth', {
  useNewUrlParser: true
});

/* --------------------------------------------------
*  ---- App Setup
*  --------------------------------------------------
*  -- (get express to work the way we want it to)
*  -------------------------------------------------- */
const app = express();

app.use(morgan('combined'));
app.use(cors());
app.use(bodyParser.json({ type: '*/*' }));
router(app);

/* --------------------------------------------------
*  ---- Server Setup
*  --------------------------------------------------
*  -- (get our express application to talk to the
*  -- outside world)
*  -------------------------------------------------- */
const port   = process.env.PORT || 3090;
const server = http.createServer(app);

server.listen(port);
console.log('Server listening on:', port);