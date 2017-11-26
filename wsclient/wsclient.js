var WebSocket = require('ws');
var wsclient = function (url,callback) {

    ws = new WebSocket(url);

    ws.onopen = function () {
        console.log("onopen")
    };

    ws.onmessage = function (evt) {
        callback("onmessage",evt)
    };

    ws.onclose = function (evt) {
        callback("onclose",evt)
    };

    ws.onerror = function (evt) {
        callback("onerror",evt)
    };
}
url = "ws://121.40.165.18:8088"
wsclient(url,function (info,evt) {
    console.log(info,evt);
})