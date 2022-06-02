const cors = require('cors');
const express = require('express');
const app = express();
const friendsRouter = require('./routes/friendsRouter');

app.use(cors());
app.use(express.json());

app.use('/friends', friendsRouter);

app.listen(5000, () => {
    console.log('Houston, we have take off on port 5000.')
})