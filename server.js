const express = require('express');

const apiRoute = require('./routes/api.js');
const indexRoute = require('./routes/index.js');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.use('/api', apiRoute);
app.use(indexRoute);

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});