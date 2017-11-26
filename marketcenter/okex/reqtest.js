var ws_ = require("./wsserver")
var proto_ = require("./proto")
ws = new ws_()
proto = new proto_()
ws.connect()
var f = function () {
    console.log(new Date())
    //ws.send(JSON.stringify(proto.reqsub("add","tick")))
    //ws.send(JSON.stringify(proto.reqsub("add","depth")))
    //ws.send(JSON.stringify(proto.reqsub("add","depthY")))
    //ws.send(JSON.stringify(proto.reqsub("add","deal")))
    //ws.send(JSON.stringify(proto.reqsub("add","kline")))
}
var freq = function () {
    var login = proto.req("login")
    var userinfo = proto.req(proto.oppo.add,"userinfo")
    var order = proto.req(proto.oppo.add,"order",proto.order)
    //var userinfo = JSON.stringify(proto.req(proto.oppo.add,"userinfo"))
    //var userinfo = JSON.stringify(proto.req(proto.oppo.add,"userinfo"))
    ws.send(login)
    ws.send(userinfo)
    ws.send(order)
}
var f2 = function () {
    console.log(new Date())
    //ws.send(JSON.stringify(proto.reqsub("remove","tick")))
    //ws.send(JSON.stringify(proto.reqsub("remove","depth")))
    //ws.send(JSON.stringify(proto.reqsub("remove","depthY")))
    //ws.send(JSON.stringify(proto.reqsub("remove","deal")))
    //ws.send(JSON.stringify(proto.reqsub("remove","kline")))
}
setTimeout(f,1000);
setTimeout(f2,2000);
setTimeout(freq,2000);

