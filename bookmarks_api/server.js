const express = require('express');
const app = express();
const port = 3003;
const bookmarksController = require('./controllers/bookmarkController.js');
const mongoose = require('mongoose');
const cors = require('cors');

app.use(express.json());

const whitelist = ['http://localhost:3000'];

const corsOptions = {
  origin: (origin, callback) => {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
};

app.use(cors(corsOptions));

app.use('/bookmarks', bookmarksController);

mongoose.connection.on('error', err =>
  console.log(err.message + ' is Mongod not running?')
);
mongoose.connection.on('disconnected', () => console.log('mongo disconnected'));

mongoose.connect('mongodb://localhost:27017/bookmarks', {
  useNewUrlParser: true
});
mongoose.connection.once('open', () => {
  console.log('connected to mongoose...');
});

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
