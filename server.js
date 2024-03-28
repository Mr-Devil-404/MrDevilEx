app.post('/post', (req, res) => {
    const { postContent } = req.body;
    
    // Save post content to database
    
    // Redirect to a new page with the posted content
    res.redirect(/posted?content=${postContent});
});

app.get('/posted', (req, res) => {
    const postedContent = req.query.content;
    res.send(<h1>Posted Content:</h1><p>${postedContent}</p>);
});