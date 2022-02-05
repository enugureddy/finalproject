const dbController = require("./db-guest")
const emailController = require("./mail-service")

dbController.dbController.connection()

var controller ={
    login :async function(req,res){
        var data = await dbController.loginguest(email, password)

        res.render("guest-viewadds",{title : "guest Login Page",data :data})
    },}

    module.exports = controller