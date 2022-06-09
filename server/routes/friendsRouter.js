const express = require('express');
const { MongoClient, ServerApiVersion } = require('mongodb');
const {ObjectId} = require('mongodb')
const router = express.Router();
require('dotenv').config();

const uri = `mongodb+srv://${process.env.MONGO_USER_NAME}:${process.env.MONGO_USER_PASS}@cluster0.jfhdz4h.mongodb.net/?retryWrites=true&w=majority`;

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true});
const db = client.db('labb');

client.connect(err => {
    if (err) {
        console.log(err)
    }
    console.log('Connected to DB.')
});


router.post('/add', async (req, res) => {
    try {
        const collection = db.collection('Friends');

        const target = req.body;

        collection.insertOne(target, (err, response) => {
            if (err) {
                console.log(err)
            } else {
                console.log(response)
            }
        })
        res.json(`${target.firstName} inserted OK.`)
    } catch (error) {
        console.log(error.message);
    }
})

router.get('/', async (req, res) => {
    try {
        const friends = db.collection('Friends');
        const allFriends = await friends.find({}).toArray((err, result) => {
            if(err){
                console.log(err)
            }
            res.json(result);
        })

    } catch (error) {
        console.log(error)
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const collection = db.collection('Friends');
        
        collection.deleteOne({_id: ObjectId(req.params.id)})

        res.json('Document deleted successfully.');
    } catch (error) {
        console.log(error)
    }
})


module.exports = router;