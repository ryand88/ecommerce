const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const massive = require('massive');
//const productsController = require('./products_controller.js');
//const connectionString = "postgres://postgres:1234@localhost/sandbox";

const app = module.exports = express();
app.use( bodyParser.json() );
app.use( cors() );
massive( connectionString ).then( dbInstance => app.set('db', dbInstance) );

const port = 3000;
app.listen( port, () => { console.log(`Server listening on port ${port}.`); } );

app.use(express.static('public'));