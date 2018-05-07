const {MongoClient,ObjectID}=require('mongodb');
MongoClient.connect('mongodb://localhost:27017/toDoApp',(err,db)=>{
  if (err)
  {
    return console.log("cant connect to server");
  }
  console.log("connected to server");

// db.collection('Users').deleteMany({name:'mitesh'}).then((res)=>{
//   console.log("the selected record is deleted");
// });
db.collection('Users').findOneAndDelete({
  _id:new ObjectID("5aee74081048d136a005e0f9")
}).then((res)=>{
  console.log(JSON.stringify(res,undefined,2));
});





 });
