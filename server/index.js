const cors = require('cors');
const express = require('express');
const app = express();
const friendsRouter = require('./routes/friendsRouter');
const { MongoClient } = require('mongodb');

const main = async () => {
    const uri = `mongodb+srv://LordSund:q8qIiXCGI3q3YJDz@cluster0.jfhdz4h.mongodb.net/?retryWrites=true&w=majority`;

    const client = new MongoClient(uri);

    try {
        await client.connect();
    } catch (error) {
        console.error(error);
    } finally {
        await client.close();
    }
}

main().catch(console.error);

app.use(cors());
app.use(express.json());

app.use('/friends', friendsRouter);

app.listen(5000, () => {
    console.log('Houston, we have take off on port 5000.')
})