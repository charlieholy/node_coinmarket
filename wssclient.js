var WebSocket = require('ws');
var querystring = require("querystring")
var url = "wss://real.okcoin.com:10440/websocket";
var url2 = "wss://real.okcoin.com:10440/websocket/okcoinapi";

var api_key = "44dcb2ba-ba19-4c1a-93b3-44fd817f735d"
var  secretKey = "8412D84686C09CA6E54CAADFDA4EC7D1"
var pa = {
    "api_key": "44dcb2ba-ba19-4c1a-93b3-44fd817f735d"
}
var params = {}
params.api_key = "44dcb2ba-ba19-4c1a-93b3-44fd817f735d"
var  sign = "";
for(var value in params){
    sign += value + '=' + params[value] +'&'
}
console.log("sign: " + sign)



WebSocket.binaryType = 'arraybuffer';

var md5 = function(data) {
    var Buffer = require("buffer").Buffer;
    var buf = new Buffer(data);
    var str = buf.toString("binary");
    var crypto = require("crypto");
    return crypto.createHash("md5WithRSAEncryption").update(str).digest("hex");
}

var resault = md5('api_key=44dcb2ba-ba19-4c1a-93b3-44fd817f735d&secret_key=8412D84686C09CA6E54CAADFDA4EC7D1');
var res1 = resault.toUpperCase();
console.log("resault: " + resault)
var content = {
    'event': 'addChannel',
    'channel': 'ok_spot_userinfo',
    'parameters': {
        'api_key': api_key,
        'sign': res1
    }
}


var contentlogin = {
    'event': 'login',
    'parameters': {
        'api_key': api_key,
        'sign': res1
    }
}



var ws = new WebSocket(url2);

ws.onopen = function () {
    ws.send(JSON.stringify(content));
    //ws.send(JSON.stringify({'pong':'ping'}))
};

ws.onmessage = function (evt) {
    console.log("onmessage: " + evt.data)
};

ws.onclose = function (evt) {
    console.log("WebSocketClosed!");
};

ws.onerror = function (evt) {
    console.log("WebSocketError!");
};