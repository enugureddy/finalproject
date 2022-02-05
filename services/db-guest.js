const mongodb = require('mongodb')
const mongoClient = require('mongodb').MongoClient
var url = "mongodb://localhost:27017"
var db;
function loginguest(){

    var collection =db.collection("member")
    
    var userData=collection.findMany()
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
            console.log("DB Connected from Student")
        })
    },}

    module.exports = {dbController,loginguest}