const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const morgan = require('morgan');
const cors = require('cors');

//load environment variables
dotenv.config({ path: './config.env' });
port = process.env.PORT || 3000;

// connect to database

// get router files
const UserRouter = require('./routers/userRouter');

// create app
const app = express();

// enable cors
app.use(cors());

// enable body parser json
app.use(express.json());

// enable body parser urlencoded payloads
app.use(express.urlencoded({ extended: false }));

// cookie parser

// development logging
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// load routers
app.use('/api/v1/assets', express.static(path.join(__dirname, 'assets')));
app.use('/api/v1/users', UserRouter);

// error handling

// app listening
app.listen(port, () => {
  console.log('Server is listening on port ' + port);
});
