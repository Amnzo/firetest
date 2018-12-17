var express = require('express'),
app = express();

app.use(express.static(__dirname+'/dist/firetest'));

var server = app.listen(process.env.PORT || 8080);