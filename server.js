
var express = require('express'),
    flash = require('connect-flash'),
    body_parser = require('body-parser'),
    cookie_parser = require('cookie-parser'),
    cookie_session = require('cookie-session'),
    async = require('async'),
    app = express();


/**
 */
app.use(flash());
app.use(body_parser());
app.use(cookie_parser());

app.set('views', __dirname + '/views');
app.use('/static', express.static(__dirname + '/static'));

app.use(cookie_session({
  secret: '2f6f99e7102059d7acb40bbe4fa8cf547ea18f96'
}));


/**
 */
app.get('/', function (req, res) {

  res.redirect('/inbox');
});


/**
 */
app.get('/inbox', function (req, res) {

  res.render('index.hbs', {
  });
});


/**
 */
app.get('/components', function (req, res) {

  res.render('components.hbs', {
  });
});

/**
 */
app.listen(3000);
