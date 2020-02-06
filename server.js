//require dependencies
const logger = require('morgan');
const express = require('ecpress');

//create an Express application
const app = express();

//configure the app port
const port = process.env.PORT || 3000;
app.set('port', port);

//load middlewawres
app.use(logger('dev'));

//start the server and listen on the preconfigured port
app.listen(port, () => {
   console.log(`app strat on port : ${port}.`);
})