const controller = require("./controller-admin")

module.exports=function(admin){
    admin.route("/").get(controller.login)
    admin.route("/loginverify").post(controller.loginverify)
    admin.route("/viewmembers").get(controller.viewmembers) 
    admin.route('/viewmemberadds/:id').get(controller.viewmemberadds)
    admin.route('/logout').get(controller.logout)
   // admin.route("/admin-register").get(controller.register)
}