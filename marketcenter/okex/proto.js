var channel_ = require("./channel")
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
var url = "wss://real.okex.com:10441/websocket";
class proto{

    constructor(){
        this.url = url
    }

    gettick(oppo,sub){
        channel_.channel.event = oppo_[oppo]
        channel_.channel.channel = sub_[sub]
        console.log(JSON.stringify(channel_.channel))
        return channel_.channel
    }

}
module.exports = proto