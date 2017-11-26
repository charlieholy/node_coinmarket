var buffer = require("buffer")
var crypto = require("crypto")
exports.md5 = function () {
    var Buffer = buffer.Buffer;
    var buf = new Buffer(data);
    var str = buf.toString("binary");
    return crypto.createHash("md5WithRSAEncryption").update(str).digest("hex");
}