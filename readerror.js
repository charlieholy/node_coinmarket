var rf=require("fs");
var file = "error.js"
var data=rf.readFileSync(file,"utf-8");
//console.log(data);
console.log("READ FILE SYNC END");
var arr = data.split("\r\n")
erlog = {}
arr.forEach(function (t) {
    var arr1 = t.split("\t")
    erlog[arr1[0]] = arr1[1]
})
//console.log(erlog)

exports.er = erlog
