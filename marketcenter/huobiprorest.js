var moment = require('moment');
var https = require("https");
var iconv = require("iconv-lite");
var crypto = require('crypto');  //加载crypto库
var geturl = 'https://api.huobi.pro';
api_key = "f8b08249-376d622b-8ff8e987-b87aa"
api_secret = "e531e575-89df1d9a-745fbf2d-389ca"
version = 2
mac = "HmacSHA256"
var timestamp = moment().utc().format("YYYY-MM-DDTHH:mm:ss");
ss = encodeURIComponent(timestamp)

s = "AccessKeyId=" + api_key +
    "&SignatureMethod=" + mac +
    "&SignatureVersion=" + version +
    "&Timestamp=" + ss;

s2 = "GET\n" +
    "api.huobi.pro\n" +
    "/v1/users/user\n" + s;


Signture = require('crypto')
    .createHmac('sha256', api_secret)
    .update(s2)
    .digest()
    .toString('base64');
ensign = encodeURIComponent(Signture)
test1 = s + "&Signature=" + ensign
head = geturl + "/v1/users/user?" + test1
console.log("head: " + head)

https.get(head, function (res) {
    var datas = [];
    var size = 0;
    res.on('data', function (data) {
        datas.push(data);
        size += data.length;
        //process.stdout.write(data);
    });
    res.on("end", function () {
        var buff = Buffer.concat(datas, size);
        var result = iconv.decode(buff, "utf8");//转码//var result = buff.toString();//不需要转编码,直接tostring
        console.log(result);
    });
}).on("error", function (err) {
    Logger.error(err.stack)
    callback.apply(null);
});