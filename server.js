// server.js
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

// Enable CORS for all routes
app.use(cors());

// Serve static files from the 'public' folder
app.use(express.static('public'));

// Route to list PDF files
app.get('/pdfs', (req, res) => {
    res.json([
        { name: req.name, url: req.url }
    ]);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
