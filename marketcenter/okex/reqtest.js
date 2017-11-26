var ws_ = require("./wsserver")
var proto_ = require("./proto")
ws = new ws_()
proto = new proto_()
ws.connect()
var f = function () {
    console.log(new Date())
    ws.send(JSON.stringify(proto.gettick("add","tick")))
    ws.send(JSON.stringify(proto.gettick("add","depth")))
    ws.send(JSON.stringify(proto.gettick("add","depthY")))
    ws.send(JSON.stringify(proto.gettick("add","deal")))
    ws.send(JSON.stringify(proto.gettick("add","kline")))
}
var f2 = function () {
    console.log(new Date())
    //ws.send(JSON.stringify(proto.gettick("remove","tick")))
    //ws.send(JSON.stringify(proto.gettick("remove","depth")))
    //ws.send(JSON.stringify(proto.gettick("remove","depthY")))
    //ws.send(JSON.stringify(proto.gettick("remove","deal")))
    //ws.send(JSON.stringify(proto.gettick("remove","kline")))
}
setTimeout(f,1000);
setTimeout(f2,2000);

