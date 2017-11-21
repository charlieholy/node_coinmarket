var rf=require("fs");
var file = "error.js"
var data=rf.readFileSync(file,"utf-8");
//console.log(data);
console.log("READ FILE SYNC END");
var arr = data.split("\r\n")
console.log(arr)