const path = require('path');
const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

const publichPath = path.join(__dirname, "./../public");

app.use(express.static(publichPath));

app.listen(port ,() => console.log(`Server running on port ${port}`) );