# _UC Berkeley Coursework / Arashi Walker_

#### _LIRI Bot, 8/24/2019_

#### By _Arashi Walker_

## Description


* In this assignment, you will make LIRI. LIRI is like iPhone's SIRI. However, while SIRI is a Speech Interpretation and Recognition Interface, LIRI is a _Language_ Interpretation and Recognition Interface. LIRI will be a command line node app that takes in parameters and gives you back data.

## _LIRI Bot Demo "click image below to play demo"_

[![](http://img.youtube.com/vi/Sq3zbig3Wk0/0.jpg)](http://www.youtube.com/watch?v=Sq3zbig3Wk0 "")

## functions/features

* _LIRI will search Spotify for songs, Bands in Town for concerts, and OMDB for movies._

1. node liri.js concert-this <artist/band name here>
   * This will search the Bands in Town Artist Events API (`"https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp"`) for an artist and render the following information about each event to the terminal:

     * Name of the venue

     * Venue location

     * Date of the Event (use moment to format this as "MM/DD/YYYY")

2. `node liri.js spotify-this-song '<song name here>'`

   * This will show the following information about the song in your terminal/bash window

     * Artist(s)

     * The song's name

     * A preview link of the song from Spotify

     * The album that the song is from

   * If no song is provided then your program will default to "The Sign" by Ace of Base.

3. `node liri.js movie-this '<movie name here>'`

   * This will output the following information to your terminal/bash window:

     ```
       * Title of the movie.
       * Year the movie came out.
       * IMDB Rating of the movie.
       * Rotten Tomatoes Rating of the movie.
       * Country where the movie was produced.
       * Language of the movie.
       * Plot of the movie.
       * Actors in the movie.
     ```

   * If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody.'

4.  `node liri.js do-what-it-says`

   * Using the `fs` Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.

     * It should run `spotify-this-song` for "I Want it That Way," as follows the text in `random.txt`.

     * Edit the text in random.txt to test out the feature for movie-this and concert-this.

### BONUS

* In addition to logging the data to your terminal/bash window, output the data to a .txt file called `log.txt`.

* Make sure you append each command you run to the `log.txt` file. 

## Support and contact details

_Arashi walker - phone (123)123-1234 - email arashiwalker@gmail.com_

## Technologies Used

_Node.js,_ _JavaScript,_ _OMDB-API,_ _Node-Spotify-API,_ _Node-Spotify-API,_ _Moment,_ _DotEnv,_ _Axios,_ _simple-node-logger_


### License

*MIT*

Copyright (c) 2019 **_Arashi Walker_**
