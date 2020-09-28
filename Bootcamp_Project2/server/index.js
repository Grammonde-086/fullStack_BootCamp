const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

//Middleware
app.use(bodyParser.json());
app.use(cors());

const taskslist = require('./routes/api/taskslist');

app.use('/api/taskslist', taskslist);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server Started on port ${port}`));