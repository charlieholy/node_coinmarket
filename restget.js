//charlie
var https = require("https");
var iconv = require("iconv-lite");
var geturl = 'https://www.okcoin.com/api/v1/ticker.do?symbol=ltc_usd';
https.get(geturl, function (res) {
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