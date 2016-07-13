// server.js
// load the things we need
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
    res.render('pages/index');
});

app.listen(3005, function() {
  console.log('Listening on port 3005')
});
