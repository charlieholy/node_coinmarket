let WebSocket = require('ws');
const socket = new WebSocket('wss://stream.binance.com:9443/ws/btcusdt@kline_1m'); //如果symbol = 'btccny'或者'ltccny' 请使用wss://api.huobi.com/ws


socket.onopen = function (event) {
    console.log('WebSocket connect at time: ' + new Date());
};

socket.onmessage = function (event) {
    let raw_data = event.data;
    console.log(raw_data);
};

socket.onclose = function(event) {
    console.log('WebSocket close at time: ' + new Date());
};