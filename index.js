const express = require('express');
const connectDB = require('./db');
const app = express();
const users = require('./routes/user');
const PORT = 3000;

// Use the users route
app.use('/api', users);
app.use('/api', require('./routes/user'));

//body parser
app.use(express.json());

//connect to database
connectDB();


app.get('/', (req, res) => {
    console.log("inside the page route handler");
    res.send('Hello World!');
})

app.listen(PORT, () => {
    console.log("app started on port " + PORT)
})