// app.js
// load the express server
var express = require('express');
app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');

// Serve static assets
app.use(express.static('public'));

// app.use(require('./middlewares/users'))
// app.use(require('./controllers'))

// index page
app.get('/', function(req, res) {
    res.render('index');
});

// listen on port 3005 for incoming connections
app.listen(3005, function() {
  console.log('Listening on port 3005')
});
