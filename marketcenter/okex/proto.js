var md5 = require("./md5")
var ping ={'event':'ping'}
var pong ={'event':'pong'}
var timeout = 25 * 1000
var apiKey = "dcb686ef-dff2-4699-932b-c1ae9a8e9963"
var secretKey = "0A9AA2DCB93F5B3D017C876070E3C333"
//var apiKey = "44dcb2ba-ba19-4c1a-93b3-44fd817f735d"
//var secretKey = "8412D84686C09CA6E54CAADFDA4EC7D1"
var url = "wss://real.okex.com:10441/websocket";
var channel_ = {
    'event': 'addChannel',
    'parameters': {
        'api_key': apiKey
    }
}
var oppo_ = {
    "add":"addChannel",
    "remove":"removeChannel"
}
//OKEx合约WebSocket服务连接地址：wss://real.okex.com:10440/websocket/okexapi
//    OKEx现货WebSocket服务连接地址：wss://real.okex.com:10441/websocket
var sub_ = {
    "tick":"ok_sub_spot_btc_usdt_ticker",
    "depth":"ok_sub_spot_btc_usdt_depth",
    "depthY":"ok_sub_spot_btc_usdt_depth_5",
    "deal":"ok_sub_spot_btc_usdt_deals",
    "kline":"ok_sub_spot_btc_usdt_kline_1min"
}

var reqm_ = {
    "login":"login",  //New 登录事件(个人信息推送)
    "order":"ok_spot_order"  ,//New 下单交易
    "cancel_order":"ok_spot_cancel_order", //New 取消订单
    "userinfo":"ok_spot_userinfo",  //New 查询账户信息
    "orderinfo":"ok_spot_orderinfo",  //New 查询订单信息
    "orderX":"ok_sub_spot_X_order",  //New 交易数据
    "balance":"ok_sub_spot_X_balance"  //New 账户信息
}

var order_ = {
    "symbol" : "btc_usdt",
    "type" : "buy",
    "price" : "50",
    "amount" : "0.02"
}

class proto{

    constructor(){
        this.url = url
        this.ping = JSON.stringify(ping)
        this.pong = JSON.stringify(pong)
        this.timeout = timeout
        this.order = order_
        this.reqm = reqm_
        this.oppo = oppo_
    }

    reqsub(oppo,sub){
        channel_.event = oppo_[oppo]
        channel_.channel = sub_[sub]
        console.log(JSON.stringify(channel_))
        return channel_
    }

    req(event,req,param){
        var cel = JSON.parse(JSON.stringify(channel_));
        cel.event = event
        cel.channel = reqm_[req]
        for(var v in param){
            cel.parameters[v] = param[v]
        }
        var str = ""
        for(var vv of Object.keys(cel.parameters).sort()){
            str += vv + "=" + cel.parameters[vv] + "&"
        }
        str += "secret_key=" + secretKey
        console.log(str)
        var re = md5.md5(str).toUpperCase()
        //console.log(re)
        cel.parameters.sign = re;
        var result = JSON.stringify(cel)
        console.log("result: " + result)
        return result
    }

}
module.exports = proto

// var p = new proto()
// var pa = {}
// pa.symbol = "btc_usdt"
// pa.type = "buy"
// pa.price = "50"
// pa.amount = "0.02"
// p.req("login")