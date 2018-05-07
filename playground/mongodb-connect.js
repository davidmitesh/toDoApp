// const MongoClient=require('mongodb').MongoClient;
const {MongoClient}=require('mongodb');
MongoClient.connect('mongodb://localhost:27017/toDoApp',(err,db)=>{
  if (err)
  {
    return console.log("cant connect to server");
  }
  console.log("connected to server");


  
