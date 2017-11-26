var util = require('util');
var https = require('https');
var proto = require('./proto')
var p = new proto();

var post_data ={
    'account-id': 640087,
    'amount': '0.02',
    'price': '1020.21',
    'symbol': 'btcusdt',
    'type': 'buy-limit',
    'source': 'api'
};

LANG = 'zh-CN'
DEFAULT_POST_HEADERS = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Accept-Language': LANG
}

var post_options = {
    host: 'api.huobi.pro',
    port: '443',
    path: p.cmd["order"] + "?" + p.getparams(p.cmd["order"],p.method["post"]),
    'method': 'Post',
    headers: DEFAULT_POST_HEADERS,
    'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.71 Safari/537.36'
};

console.log("postpath: " + post_options.path)

var post_req = https.request(post_options, function(res) {
    res.setEncoding('utf8');
    res.on('data', function (chunk) {
        console.log('Response: ' + chunk);
        onetimetoken_data = JSON.parse(chunk);
        console.log('status: ' + onetimetoken_data["status"]);
        console.log('data: ' + onetimetoken_data["data"]);
    });

});
post_req.write( JSON.stringify(post_data));
post_req.end();