
const mongodb =require('mongodb');
const MongoClient = mongodb.MongoClient;

const mongoConnect = (callback) => {
  MongoClient.connect('mongodb+srv://Joo1234:Joo1234@cluster1.mydli6e.mongodb.net/?retryWrites=true&w=majority')
  .then(client => {
    console.log('connected!');
    callback(client)
  })
  .catch(err => console.log(err));
};

module.exports = mongoConnect;
