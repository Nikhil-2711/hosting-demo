const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const http = require('http');

const app = express();
const server = http.createServer(app);

app.use(cors());

const port = 4000;

app.get('/test-host', (req, res) => {
    // Send a response back to the client
    res.send("Hosted backend tested!!!!!");
});

server.listen(port, () => {
    console.log(`Server listening to port ${port}`);
});
