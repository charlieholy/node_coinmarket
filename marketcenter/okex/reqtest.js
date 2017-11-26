var ws_ = require("./wsserver")
var proto_ = require("./proto")
ws = new ws_()
proto = new proto_()
ws.connect()
var f = function () {
    console.log(new Date())
    ws.send(JSON.stringify(proto.gettick()))
}
setTimeout(f,1000);

