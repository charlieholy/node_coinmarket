var wsc_ = require("../../wsclient/wsclient");
var proto_ = require("./proto")
var wspush
var p_ = new proto_()
wsc_.wsclient(p_.url,function(conn){
        wspush = conn
        console.log("conn")
        wspush.send(JSON.stringify(p_.gettick()))
    },function (info,evt) {
        var wsdata = evt.data
        console.log(info,wsdata)
    }
)

