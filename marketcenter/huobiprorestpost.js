var util = require('util'),
    url = require('url'),
    https = require('https');
querystring = require("querystring")
api_key = "f8b08249-376d622b-8ff8e987-b87aa"
api_secret = "e531e575-89df1d9a-745fbf2d-389ca"


var post_data = querystring.stringify({
    'account-id': 640087,
    'amount': '0.02',
    'price': '1020.21',
    'symbol': 'btcusdt',
    'type': 'buy-limit',
    'source': 'api'
});

console.log('post_data: ' + post_data)

var post_options = {
    host: 'api.huobi.pro',
    port: '443',
    path: '/v1/order/orders',
    'method': 'Post',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
    }
};

var post_req = https.request(post_options, function(res) {
    res.setEncoding('utf8');
    res.on('data', function (chunk) {
        console.log('Response: ' + chunk);
        onetimetoken_data = JSON.parse(chunk);
        console.log('Response2: ' + onetimetoken_data);
    });

});
post_req.write(post_data);
post_req.end();