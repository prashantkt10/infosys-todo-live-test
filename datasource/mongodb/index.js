const { MongoClient } = require("mongodb");
const mongoClient = new MongoClient("mongodb+srv://mongo:mongo@cluster0.oonh1.mongodb.net");
mongoClient.connect().then(() => {
    console.log('connected to mongo cluster!!');
}).catch((err) => {
    console.log('error while connecting with mongo cluster: ', err.message);
})

module.exports = { mongoClient };