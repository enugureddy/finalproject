const controller = require("./controller-guest")

module.exports=function(guest){
    guest.route("/").get(controller.login)
}