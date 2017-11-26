var channel_ = require("./channel")
var chatype = "addChannel"
var tick = "ok_sub_spot_btc_usd_ticker"
var url = "wss://real.okcoin.com:10440/websocket";


class proto{

    constructor(){
        this.url = url
    }

    gettick(){
        channel_.channel.event = chatype
        channel_.channel.channel = tick
        return channel_.channel
    }

}
module.exports = proto