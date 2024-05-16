const express = require('express');
const axios = require('axios');
const cors = require('cors');
const path = require('path');

const app = express();

app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

const url = 'https://api.jikan.moe/v4/anime?q=';

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/anime', async (req, res) => {
    try {
        const response = await axios.get(url + req.query.q);
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
        res.send({ data: anime });
    } catch (error) {
        res.status(500).send('Error fetching anime data');
    }
});

const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
