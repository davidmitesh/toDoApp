const {MongoClient}=require('mongodb');
MongoClient.connect('mongodb://localhost:27017/toDoApp',(err,db)=>{
  if (err)
  {
    return console.log("cant connect to server");
  }
  console.log("connected to server");

  db.collection('Users').find({name:'mitesh'})
  .toArray().then((res)=>{
    console.log(JSON.stringify(res,undefined,2))
  },(err)=>{
    console.log('unable to fetch data');
  });
    db.collection('Users').find({name:'mitesh'})
  .count().then((res)=>{
    console.log(`number of records is :${res}`);
  },(err)=>{
    console.log("cant count records");
  });
  db.close();
});
