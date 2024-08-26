const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static('public')); // For serving static files

// Example route
app.get('/api/destinations', (req, res) => {
    res.json([
        { id: 1, name: 'Addis Ababa', description: 'Explore the vibrant capital city of Ethiopia with its rich history and culture.' },
        { id: 2, name: 'Lalibela', description: 'Discover the ancient rock-hewn churches of Lalibela, a UNESCO World Heritage Site.' },
        { id: 3, name: 'Wenchi', description: 'Experience the breathtaking landscapes and the serene Wenchi Crater Lake in Oromia.' }
    ]);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
