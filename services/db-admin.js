const mongodb = require('mongodb')
const mongoClient = require('mongodb').MongoClient
var url = "mongodb://localhost:27017"
var db;

function loginadmin(email,password){

    var collection =db.collection("admin")
    var filter={
        "email":email,
        "password":password
    }
    var userData=collection.findOne(filter)
    return userData;
}

var dbController = {
    connection : function(){
        mongoClient.connect(url, function(err, database){
            if(err)
            {
                console.log("Err in database server connection")
                return
            }
            db = database.db("faster")
            console.log("DB Connected from admin")
        })
    },
    viewmembers : function(res){
        var collection = db.collection("member")
        collection.find().toArray(function(err,result){
            if(err){
                console.log("Err in view")
                return
            }
            res.render("admin-viewmember", {title: "view page", data : result})
        })
    },
    viewmemberadds : function(id,res){
        var collection = db.collection("add")
       // var vid = mongodb.ObjectId(id)
        var filter = {
            "id" : id
        }
        collection.find(filter).toArray(function(err,result){
            if(err){
                console.log("Err in view")
                return
            }
            res.render("admin-viewadds", {title: "view tasks", addData : result})
        })
    },

}

    module.exports = {dbController,loginadmin}