const express = require('express');
const path = require('path');
const app = express();

// Use environment variable for PORT or default to 3000
const PORT = process.env.PORT || 3000;

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Ensure index.html is served by default
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// 404 Route (Handle non-existent pages)
app.use((req, res) => {
    res.status(404).send('404: Page Not Found');
});

// Error-handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack); // Log the error stack trace
    res.status(500).json({ error: 'Something went wrong!' }); // Send a JSON error response
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running at http://127.0.0.1:${PORT}`);
}); 