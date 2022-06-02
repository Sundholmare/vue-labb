const express = require('express');
const { MongoClient, ServerApiVersion } = require('mongodb');
const router = express.Router();
require('dotenv').config();

const uri = `mongodb+srv://${process.env.MONGO_USER_NAME}:${process.env.MONGO_USER_PASS}@cluster0.jfhdz4h.mongodb.net/?retryWrites=true&w=majority`;

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
    if (err) {
        console.log(err)
    }
    const collection = client.db("labb").collection('Friends');

});


router.post('/add', async (req, res) => {
    try {
        const collection = client.db('labb').collection('Friends');

        const target = req.body;

        collection.insertOne(target, (err, response) => {
            if (err) {
                console.log(err)
            } else {
                console.log(response)
            }
        })
        res.json(`${target} inserted OK.`)
    } catch (error) {
        console.log(error.message);
    }
})

router.get('/all', async (req, res) => {
    const allFriends = client.db('labb').collection('Friends').find({});

    console.log('------------HERE----------', allFriends);
    res.json(allFriends);
})


module.exports = router;