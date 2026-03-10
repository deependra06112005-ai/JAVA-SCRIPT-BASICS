const express = require('express');
const app = express();

app.use(express.json())

app.get('/api/paints', (req, res) => {
    res.json({message : "Welcome to the Paint Shop API"});
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});