var https = require("https");
var proto = require("./proto")
var p = new proto();
//var url = p.getUrl(p.cmd["user"],p.method["get"])
var url = p.getUrl(p.cmd["acount"],p.method["get"])

//var re = p.head + p.url + p.cmd["user"] + "?" + param
console.log("url " + url)

https.get(url, function (res) {
    var datas = [];
    var size = 0;
    res.on('data', function (data) {
        datas.push(data);
        size += data.length;
    });
    res.on("end", function () {
        var buff = Buffer.concat(datas, size);
        //var result = iconv.decode(buff, "utf8");//转码//var result = buff.toString();//不需要转编码,直接tostring
        var result = buff.toString()
        console.log(result);
    });
}).on("error", function (err) {
    Logger.error(err.stack)
    callback.apply(null);
});