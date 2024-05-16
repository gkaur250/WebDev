# Anime Search Website

## Description
This is a web application that allows users to search for anime titles and view detailed information about the seasons, episodes, descriptions, and additional insights. It uses Express.js on the backend and EJS for templating.

## Getting Started

### Prerequisites
Make sure you have the following installed on your system:
- Node.js
- npm (Node Package Manager)

### Installation
1. Clone the repository to your local machine.
    ```bash
    git clone (insert link)
    ```

2. Navigate to the project directory.
    ```bash
    cd anime-search-app
    ```

3. Install the necessary dependencies.
    ```bash
    npm install
    ```

### Running the Server
1. Open terminal in VSCode.
2. Start the server by typing the following command:
   ```bash
    npm run dev
    ```
   
   This command should be defined in your `package.json` file like this:
    ```json
    "scripts": {
        "dev": "nodemon server.js"
    }
    ```

    Alternatively, you can start the server using Node.js directly.
    ```bash
    node server.js
    ```

### Viewing the Application
1. Open the `index.html` file in your preferred web browser.
2. You can now interact with the site and use the search bar to find information about different anime titles.

## Project Structure
- `index.html`: The main HTML file for the application.
- `server.js`: The main server file where the Express.js server is set up.
- `style.css`: The CSS file for styling the application.
- `search.js`: The JavaScript file for handling the search functionality on the client side.
- `slideshow.js`: The JavaScript file for handling the slideshow functionality on the client side.


## Dependencies
- Express.js: A web application framework for Node.js.
- Axios: A promise-based HTTP client for the browser and Node.js.
- EJS: A simple templating language that lets you generate HTML markup with plain JavaScript. 
- Cors: A middleware for enabling CORS (Cross-Origin Resource Sharing).

## Notes
- Make sure your API server is running on `http://localhost:3001`.
- Ensure your images are located in the correct directory as specified in the `index.ejs` file.


## Acknowledgments/ API that I am using
- [Jikan API](https://docs.api.jikan.moe/) for providing the anime data.
