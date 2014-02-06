
var http    = require('http')
    express = require('express'),
       load = require('express-load'),
        app = express();

app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');

app.engine('html', require('ejs').renderFile);

app.use(express.favicon());
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());

app.use(express.static(__dirname + '/public'));

load('controllers')
    .then('routes')
    .into(app);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
