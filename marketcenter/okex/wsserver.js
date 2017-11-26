var wsc_ = require("../../wsclient/wsclient");
var proto_ = require("./proto")
var p_ = new proto_()
var wscli
class wsserver{
    constructor(){
        this.wsc = wsc_
    }

    connect(){
        this.wsc.wsclient(p_.url,function(conn){
            wscli = conn
            wscli.send(p_.ping)
                console.log("conn")
            },function (info,evt) {
                var wsdata = evt.data
                console.log(info,wsdata)
                if(wsdata == p_.pong){
                    setTimeout(function(){wscli.send(p_.ping)},p_.timeout);
                }
            },wsserver.this)
    }

    send(msg) {
        if(wscli){
            wscli.send(msg)
        }
    }
}

module.exports = wsserver
