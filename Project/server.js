// Reload the page when the home link is clicked
const express = require('express');
const axios = require('axios');
const cors = require('cors');
const path = require('path');

// Create an instance of the express application
const app = express();

// Enable CORS for the server
app.use(cors());
app.use(express.static(path.join(__dirname, 'public'))); // Serve static files from the "public" directory
app.set('view engine', 'ejs'); // Set the view engine to EJS
app.set('views', path.join(__dirname, 'views')); // Set the views directory

const url = 'https://api.jikan.moe/v4/anime?q='; // Base URL for the anime API

app.get('/', (req, res) => { // Route to render the home page
    res.render('index');
});

app.get('/anime', async (req, res) => { // Route to fetch anime data based on the query parameter
    try {
        // Make a GET request to the anime API with the search query
        const response = await axios.get(url + req.query.q);
        // Map the API response data to a simplified structure
        const anime = response.data.data.map(a => {
            return {
                title: a.title,
                img_url: a.images.jpg.image_url,
                rating: a.rating,
                description: a.synopsis,
                url: a.url,
                type: a.type,
                airing: a.airing,
                episodes: a.episodes,
            };
        });
        // Send the mapped anime data as a response
        res.send({ data: anime });
    } catch (error) {
        res.status(500).send('Error fetching anime data'); // Send an error response if the API request fails
    }
});
// Define the port number for the server
const PORT = 3001;
// Start the server and listen on the specified port
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
