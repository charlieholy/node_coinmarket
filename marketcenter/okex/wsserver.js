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
                console.log("conn")
            },function (info,evt) {
                var wsdata = evt.data
                console.log(info,wsdata)
            })
    }

    send(msg) {
        if(wscli){
            wscli.send(msg)
        }
    }
}

module.exports = wsserver
