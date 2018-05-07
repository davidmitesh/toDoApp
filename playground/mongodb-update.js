const {MongoClient,ObjectID}=require('mongodb');

MongoClient.connect('mongodb://localhost:27017/toDoApp',(err,db)=>{
  if (err)
  {
    return console.log("cant connect to server");
  }
  console.log("connected to server");

db.collection('Users').findOneAndUpdate({
  _id:new ObjectID("5aee739a50973a4c18b97304")
},{
  $set:{
    name:'mitesh'
  },
  $inc:{
    age: 1
  }
},{
  returnOriginal: false
}).then((res)=>{
  console.log(res);
},(err)=>{
  console.log("record cant be updated",err);
});

});
