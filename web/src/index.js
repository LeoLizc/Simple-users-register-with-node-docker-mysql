// create an express api server
const express = require('express');
const app = express();

// setting up server
app.set('port', (process.env.PORT || 3000));


// setting up middlewares
app.use(express.json());
// use a logger
app.use(require('morgan')('dev'));


// setting up routes
app.use('/api/', require('./routes'));

// start the server
app.listen(app.get('port'), () => {
    console.log('Server started on port ' + app.get('port'));
});