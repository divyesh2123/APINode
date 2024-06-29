const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const port = 5001

const app = express();

app.use(bodyParser.json());

app.use(cors())

app.get('/', async (req, res) => {
    res.send('Welcome to my world...')
});

const server = app.listen(port, () => {
    const protocol = (process.env.HTTPS === true || process.env.NODE_ENV === 'production') ? 'https' : 'http';
    const { address, port } = server.address();
    const host = address === '::' ? '127.0.0.1' : address;
    console.log(`Server listening at ${protocol}://${host}:${port}/`);
});
