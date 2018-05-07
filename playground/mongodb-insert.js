const {MongoClient}=require('mongodb');

MongoClient.connect('mongodb://localhost:27017/toDoApp',(err,db)=>{
  if (err)
  {
    return console.log("cant connect to server");
  }
  console.log("connected to server");
});

db.collection('toDoApp').insertOne({
  text:"something to do",
  completed:false
},(err,result)=>{
  if (err)
  {
    return console.log("cant write data",err);
  }
  console.log(JSON.stringify(result.ops));
})
db.collection('Users').insertOne({
  name:'mitesh',
  age:20,
  location:'kathmandu'
},(err,result)=>{
  if(err){
    return console.log("cant insert the document",err);
  }
  console.log(result.ops[0]._id.getTimestamp());
})
