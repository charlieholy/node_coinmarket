var moment = require('moment');
var param = require('./params');
var crypto = require('crypto')
https = "https://"
url = "api.huobi.pro"
cmd = {
    "user" : "/v1/users/user",
    "acount" : "/v1/account/accounts"
}
class proto{
    constructor(){
        this.params = param
        this.cmd = cmd
        this.url= url
        this.head = https
    }

    getparams(cmd){
        var pa = ""
        var pams = this.params.prototype
        for(var v of Object.keys(pams).sort()){
            if(v == "Timestamp"){
                pams[v] = moment().utc().format("YYYY-MM-DDTHH:mm:ss")
            }
            var value =  encodeURIComponent(pams[v])
            pa += (v + "=" + value  + '&')
        }
        pa =  pa.substring(0,pa.length-1)
        var sign = this.getSign(this.params.api_secret,cmd,pa)
        pa += "&Signature=" + sign;
        console.log("sign: " + pa)
        return pa

    }

    getSign(secret,cmd,content){
        var signcontent = "GET\n" +
            url+ "\n" +
            cmd + "\n" + content;
        var signture = crypto
            .createHmac('sha256', secret)
            .update(signcontent)
            .digest()
            .toString('base64');
        return encodeURIComponent(signture)
    }
}
//
// p = new proto();
// p.getparams(cmd1)

module.exports = proto