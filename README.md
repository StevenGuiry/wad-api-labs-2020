# Assignment 2 - Web API.

### Steven Guiry - Computer Forensics & Security (20053842)

## Features.
 
 ### Unregistered User
 + Login/Sign status must be activated in order to view movie views.
 + Login with username/password if registered.
 + Register if yet to set up account.

 ### Registered User
 + Three movie viewing pages, default/home page, upcoming movies page and top rated movies page.
 + Can add movies from home page and top rated to favourites page.
 + Can add movies from upcoming page to watchlist.
 + Select a movie to view details such as information about movie, the cast, reviews and the trailer.
 + Can write a review on movies in your watchlist/favourites page.
 + Can search the lists by title or filter to certain genres.
 + Logging added which lists any server request to the console.

## Installation Requirements

Clone this repository using the following link:

```bat
git clone https://github.com/StevenGuiry/wad-asgn2.git
```

Install the Node Package Manager:

```bat
npm install
```

Start the server:

```bat
npm start
```

## API Configuration
Create an .env file with the following along with your TMDB API key. 

```bat
NODE_ENV=development
PORT=8080
HOST=
mongoDB=YourMongoURL
seedDb=true
secret=YourJWTSecret
```


## API Design
Give an overview of your web API design, perhaps similar to the following: 

|  |  GET | POST | PUT | DELETE
| -- | -- | -- | -- | -- 
| /api/movies |Gets a list of movies | N/A | N/A | N/A
| /api/movies/{movieid} | Get a specific Movie | N/A | N/A | N/A
| /api/movies/{movieid}/reviews | Get all reviews for movie | N/A | N/A | N/A  
| /api/users | Gets all users | Add a user | N/A | N/A
| /api/genres | Gets all genres | N/A | N/A | N/A
| /api/movies/{movieid}/credits | Gets credits for specific movie | N/A | N/A | N/A
| /api/movies/{movieid}/videos | Gets trailer for specific movie | N/A | N/A | N/A
| /api/upcoming | Gets list of upcoming movies | N/A | N/A | N/A
| /api/toprated | Gets list of top rated movies | N/A | N/A | N/A


## Security and Authentication
+ All movie views are protected from unauthorized users. To become authorized simply register an account. 

## Integrating with React App

Below is an example of how the react app was integrated

~~~Javascript
export const getCredits = id => {
    return fetch(
        `/api/movies/${id}/credits`, {
            headers: {
                'Authorization': window.localStorage.getItem('token')
            }
    }
    )
        .then(res => res.json());
};

~~~

## Extra features

Added a simple Morgan logger which writes requests made to the API to the console when the server is running. The Morgan dependency needs to be installed and restarted using:

```bat
npm i morgan
npm start
```
The following is all the code needed to enable the logger:

~~~Javascript
const morgan = require("morgan");
app.use(morgan('tiny'));

~~~

and the output is sent to the console as such:
![][morgan]
>Morgan example


----------------------------------------------
[morgan]: ./public/morgan.png