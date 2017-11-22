var WebSocket = require('ws');
var querystring = require("querystring")
var errorlog = require("./readerror")
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

var resault = md5('api_key=44dcb2ba-ba19-4c1a-93b3-44fd817f735d&secret_key=8412D84686C09CA6E54CAADFDA4EC7D1a');
var res1 = resault.toUpperCase();
console.log("resault: " + resault)
var contentuser = {
    'event': 'addChannel',
    'channel': 'ok_spot_userinfo',
    'parameters': {
        'api_key': api_key,
        'sign': res1
    }
}

var content = {
    'event': 'addChannel',
    'channel': 'ok_sub_spot_btc_usd_ticker',
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
    ws.send(JSON.stringify({'event':'ping'}))
};

ws.onmessage = function (evt) {
    console.log("evt type: " + evt.type + " evt data: " + evt.data)
    var wsdata = evt.data
    if(wsdata.charAt(0) == '['){
        wsdata = wsdata.substr(1,evt.data.length-2);
        console.log("==> [: " + wsdata);
    }
    var msg = JSON.parse(wsdata)

    var info = msg['data']
    if(info){
       // console.log("info: " + info("error_code"))
        //console.log("info: " + errorlog.er[info["error_code"].toString()])
    }

    if(msg['event'] && msg['event'] == 'pong'){
        setTimeout(function () {
            ws.send(JSON.stringify({'event':'ping'}))
        }, 5000 * 3)
    }

};

ws.onclose = function (evt) {
    console.log("WebSocketClosed!");
};

ws.onerror = function (evt) {
    console.log("WebSocketError!");
};