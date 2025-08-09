const express = require('express');
const app = express();
const path = require('path');
const PORT = 8080;

// Basic route

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
