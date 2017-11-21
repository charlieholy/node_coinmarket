var util = require('util'),
    url = require('url'),
    https = require('https');
querystring = require("querystring")
api_key = '44dcb2ba-ba19-4c1a-93b3-44fd817f735d';
secretKey = '8412D84686C09CA6E54CAADFDA4EC7D1';


params = {}
params['api_key'] = api_key;

var md5 = function(data) {
    var Buffer = require("buffer").Buffer;
    var buf = new Buffer(data);
    var str = buf.toString("binary");
    var crypto = require("crypto");
    return crypto.createHash("md5WithRSAEncryption").update(str).digest("hex");
}

var resault = md5('api_key=44dcb2ba-ba19-4c1a-93b3-44fd817f735d&secret_key=8412D84686C09CA6E54CAADFDA4EC7D1');

console.log('resault: ' + resault.toUpperCase());

var post_data = querystring.stringify({
    'api_key' : api_key,
    'sign' : resault.toUpperCase()
});

console.log('post_data: ' + post_data)

var post_options = {
    host: 'www.okcoin.com',
    port: '443',
    path: '/api/v1/userinfo.do',
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