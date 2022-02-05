const dbController = require("./db-admin")
//const emailController = require("./mail-service")

dbController.dbController.connection()

var controller ={
    login : function(req,res){
        res.render("admin-login",{title : "admin Login Page",data : null})
    },
    loginverify : async function(req,res){
        var email = req.body.email
        var password = req.body.password

        var data = await dbController.loginadmin(email, password)
        if (data != null)
        {   
            res.redirect("/admin/viewmembers")
           // res.render("admin-viewmember", {title : "admin Home Page", data : data})
        }
        else
        {
            res.render("admin-login", {title : "admin Login Page"})
        }
    },
    viewmembers : function(req,res){
        dbController.dbController.viewmembers(res)
    },
    viewmemberadds : function(req,res){
        var id = req.params.id
        dbController.dbController.viewmemberadds(id,res)
    },

    logout : function(req, res){
        req.session.destroy( function(err){
            console.log("session destroyed")
        })  
        res.render("admin-login", {title : "Member Login Page"})
    },}

    module.exports = controller