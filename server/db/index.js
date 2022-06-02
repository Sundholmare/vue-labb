const { MongoClient, ServerApiVersion } = require('mongodb');
require('dotenv').config();

const uri = `mongodb+srv://${process.env.MONGO_USER_NAME}:${process.env.MONGO_USER_PASS}@cluster0.jfhdz4h.mongodb.net/?retryWrites=true&w=majority`;

let db;


const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
    if (err) {
        console.log(err)
    }
    const collection = client.db("labb").collection('Friends');
    
    // perform actions on the collection object
    client.close();
});
