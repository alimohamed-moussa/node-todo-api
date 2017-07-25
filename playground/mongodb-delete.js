//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err){
    return console.log('Unable to connect to MongoDB server');
  }
    console.log('Connected to MongoDB server');

  //deletemany
  // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
  //   console.log(result);
  // });
  //deleteOne
  // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
  //   console.log(result);
  // });
  //findOneandDelete
  // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
  //   console.log(result);
  // });
//  db.collection('Users').deleteMany({name: 'Ali'});

  db.collection('Users').findOneAndDelete({_id: new ObjectID("59772c09241a1ee7e916ddea")}).then((result) => {
    console.log(JSON.stringify(result, undefined, 2));
  });
  //db.close();
});
