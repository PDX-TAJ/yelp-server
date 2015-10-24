var express = require('express');
var app = express();

var yelp = require("yelp").createClient({
  consumer_key: "aIbdeK8YACAqG9jlhms4JA", 
  consumer_secret: "i1aW8RvbkgrpNKFFyZtXWGyyKDo",
  token: "THXeZ1eYmAq4-fq1Rg6Wr-Bfq5jGKtFO",
  token_secret: "-9ObOoCdqARisEs__qS_osqO_2Y"
});


var yelpData;
app.get('/', function (req, res) {
  var term = req.param("term")
  yelp.search({term: term, location: "Portland"}, function(error, data) {
  yelpData = data;
  });
  res.send(yelpData);
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
