// Require necessary NPM packages
const express = require('express');
const app = express();
require("dotenv").config();
const path =require('path')

const mongoose = require('mongoose');
const cors = require('cors');

const PORT = process.env.PORT ||5000;
//Don't forget to install cors (npm i cors)


//Make sure to add to your whitelist any website or APIs that connect to your backend.


var whitelist = [`http://localhost:${PORT}`,`https://project3sell.herokuapp.com`];

var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1|| !origin) {
      callback(null, true);
    } else {
      var message =
        "The CORS policy for this application does not allow access from origin " +
        origin;
      callback(new Error(message), false);
    }
  },
};

app.use(cors(corsOptions));
// Require Route Files
const sellerRouter = require('./routes/seller');
// Instantiate Express Application Object


/*** Routes ***/

// Mount imported Routers
app.use('/api/seller',sellerRouter);
app.use(express.json());

// Require DB Configuration File
const db_url = require('./db');

// Establish Database Connection
mongoose.connect(process.env.mongoDbUrl, { useNewUrlParser: true });
mongoose.connection.once('open', () => {
  console.log('Connected to Mongo');
});




// app.get('/', (req, res) => {
//   console.log('get /');
//   res.json('result');
// });

/*** Middleware ***/

// Add `bodyParser` middleware which will parse JSON requests
// into JS objects before they reach the route files.
//



const reactPort = 5000;
// Set CORS headers on response from this API using the `cors` NPM package.
// app.use(
//   cors({ origin: process.env.CLIENT_ORIGIN || `http://localhost:${reactPort}` })
// );




/*** Routes ***/
// Define PORT for the API to run on

app.use(express.static(path.join(__dirname, "build")));

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});


// Start the server to listen for requests on a given port
app.listen(PORT, () => {
  console.log(`sellerItem => http://localhost:${PORT}`);
});

/*
  C.R.U.D - Actions Table

  Create          CREATE
  Read
    Read All      INDEX
    Read By ID    SHOW
  Update          UPDATE
  Delete          DESTROY
*/
