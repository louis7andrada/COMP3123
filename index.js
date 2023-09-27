const express = require('express');
const app = express();
const port = 3000;

// Route for GET request: /hello
app.get('/hello', (req, res) => {
    res.send('Hello Express JS');
});

// Route for GET request: /user with Querystring
app.get('/user', (req, res) => {
    const firstname = req.query.firstname || 'Pritesh';
    const lastname = req.query.lastname || 'Patel';
    res.json({ firstname, lastname });
});

// Middleware to parse JSON payloads
app.use(express.json());

// Route for POST request: /user
app.post('/user/:firstname/:lastname', (req, res) => {
    const { firstname, lastname } = req.params;
    res.json({ firstname, lastname });
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
