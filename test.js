var str = "123, 124, 234,252";
var arr = str.split(",").map(function (val) {
    return Number(val) + 1;
});
console.log(JSON.stringify(arr));