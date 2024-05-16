
const searchForm = document.getElementById('searchForm');
const animeInput = document.getElementById('animeInput');
const animeInfo = document.getElementById('animeInfo');



const generateAnimeTemplate = info => {
    const newDiv = document.createElement('div');
    newDiv.classList.add('anime-result');
    const body = `
        <div class="anime-details">
            <img src=${info.img_url} loading="lazy" alt="anime-img" />
            <div class="anime-info">
                <h2><a href=${info.url} target="_blank">${info.title}</a></h2>
                <p><strong>Episodes: </strong>${info.episodes}</p>
                <p> <strong> Rating:</strong>${info.rating}</p>
                <p> <strong>Airing: </strong> ${info.airing} </p>
                <p> <strong> Anime Type: </strong> ${info.type}</p>
                <p > <strong> Description:</strong> </p> <p>${info.description}</p>
               
                
            </div>
        </div>`;

    newDiv.innerHTML = body;
    animeInfo.appendChild(newDiv);
}


searchForm.addEventListener('submit', event => {
    event.preventDefault();
    const query = animeInput.value.trim();
    fetch(`http://localhost:3001/anime?q=${query}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(res => res.json())
        .then(data => {
            // clears container before search
            while (animeInfo.firstChild) {
                animeInfo.removeChild(animeInfo.firstChild);
            }
            data.data.forEach(element => generateAnimeTemplate(element))

        })
        .catch(error => console.error(error))
})


const homeLink = document.getElementById('homeLink');

homeLink.addEventListener('click', function() {
    location.reload(); // Reload the page when clicking on "Anime Search"
});






// --------------------------------------------------------------




