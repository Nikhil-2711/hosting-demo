const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

const port = 4000;

app.get('/test-host', (req, res) => {
    res.send("Hosted backend tested!!!!!");
});

// Export the app
module.exports = app;
