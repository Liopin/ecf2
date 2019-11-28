const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = 5000

const mongodbUrl = "mongodb+srv://Liopin:612252lio@cluster0-c1wqs.mongodb.net/test?retryWrites=true&w=majority";

mongoose.connect(mongodbUrl, {
    dbName: "cluster0",
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("mongodb connected ...");
}).catch((err) => {
    console.log(err);
});

app.use(express.json());

app.use(cors());
app.use('/api/subscribers', require('./routes/subscribers'));


app.listen(port, () => {console.log('Server running');
});