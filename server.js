const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/signup', (req, res) => {
    const { username, password } = req.body;
    
    // Save username and password to database
    
    res.send('Signup successful');
});

app.post('/post', (req, res) => {
    const { postContent } = req.body;
    
    // Save post content to database
    
    res.send('Post successful');
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});