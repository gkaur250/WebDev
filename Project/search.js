// Get the search form element by its ID
const searchForm = document.getElementById('searchForm');
// Get the anime input element by its ID
const animeInput = document.getElementById('animeInput');
// Get the element where anime information will be displayed
const animeInfo = document.getElementById('animeInfo');


// Function to create and display the anime template with the fetched info
const generateAnimeTemplate = info => {
    // Create a new div element
    const newDiv = document.createElement('div');
     // Add a class to the new div
    newDiv.classList.add('anime-result');
    // Define the HTML structure for the anime details
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
    // Set the inner HTML of the new div to the body content
    newDiv.innerHTML = body;
    // Append the new div to the animeInfo element
    animeInfo.appendChild(newDiv);
}

// Add an event listener for the submit event on the search form
searchForm.addEventListener('submit', event => {
    // Prevent the default form submission behavior
    event.preventDefault();
     // Get the trimmed value of the anime input field
    const query = animeInput.value.trim();
    // Make a GET request to the server with the search query
    fetch(`http://localhost:3001/anime?q=${query}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
        // Convert the response to JSON
        .then(res => res.json())
        .then(data => {
            // clears container before search
            while (animeInfo.firstChild) {
                animeInfo.removeChild(animeInfo.firstChild);
            }
            // Generate and display the anime templates for the fetched data
            data.data.forEach(element => generateAnimeTemplate(element))

        })
        // Log any errors to the console
        .catch(error => console.error(error))
})

// Get the home link element by its ID
const homeLink = document.getElementById('homeLink');
// Add an event listener for the click event on the home link
homeLink.addEventListener('click', function() {
    location.reload(); // Reload the page when clicking on "Anime Search"
});






// --------------------------------------------------------------




