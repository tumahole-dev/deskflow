const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

// Routes will be mounted here
app.get('/', (req, res) => {
    res.send('DeskFlow API running');
});

module.exports = app;