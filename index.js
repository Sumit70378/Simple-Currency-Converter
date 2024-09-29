const express = require('express');
const path = require('path');
const app = express();

// Serve static files (CSS, JS, Images) from the "public" folder
app.use(express.static(path.join(__dirname, 'public')));

// Serve the HTML file
app.get('', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(5000, () => {
    console.log("Server is running on port 5000");
});
