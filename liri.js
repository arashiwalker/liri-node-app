require("dotenv").config();
var fs = require("fs");
var request = require("request");
var keys = require("./keys.js");
var axios = require("axios");
var moment = require("moment");
var spotify = require("node-spotify-api");
var spotify = new spotify(keys.spotify);
var now = new Date();
var SimpleNodeLogger = require("simple-node-logger"),
    opts = {
        logFilePath:'log.txt',
        timestampFormat:' '
    },
log = SimpleNodeLogger.createSimpleLogger( opts );
var action = process.argv[2];
var userInput = process.argv[3];
run();

function run(){
switch (action) {
    case "concert-this":
        concertThis();
        break;
    case "spotify-this-song":
        spotifyThisSong();
        break;
    case "movie-this":
        movieThis();
        break;
    case "do-what-it-says":
        BBoys();
        break;
};
};

function concertThis() {
    if( !userInput ){
        userInput = "Cardi B"
   };
    var queryUrl = "https://rest.bandsintown.com/artists/" + userInput + "/events?app_id=codingbootcamp";
    request(queryUrl, function (err, response, data) {
            log.info("Name of the Venue: " + JSON.parse(data)[0].venue.name);
            log.info("Name of the Location: " + JSON.parse(data)[1].venue.country);
            log.info("Date of the Event: " + JSON.parse(data)[0].datetime);
            log.info("========================================");         
    });
};

function spotifyThisSong() {
    if( !userInput ){
        userInput = "the sign by ace of base"
   };
    spotify.search({ type: 'track', query: userInput }, function(err, data) {
        var data = data.tracks.items
        log.info("The Artist is: " + data[0].artists[0].name);
        log.info("The song title is: " + data[0].name);
        log.info("Preview Link: " + data[0].preview_url);
        log.info("The album title is: " +data[0].album.name);  
        log.info("========================================");          
    });
 };

function movieThis() {
    if( !userInput ){
        userInput = "Mr. Nobody."
   };
    var queryUrl = "http://www.omdbapi.com/?t=" + userInput + "&y=&plot=short&apikey=trilogy";
    request(queryUrl, function (err, response, body) {
            log.info("Title of the movie: " + JSON.parse(body).Title);
            log.info("Year the movie came out: " + JSON.parse(body).Year);
            log.info("IMDB Rating of the movie: " + JSON.parse(body).imdbRating);
            log.info("Rotten Tomatoes Rating of the movie: " + JSON.parse(body).Ratings[2].Value);
            log.info("Country where the movie was produced: " + JSON.parse(body).Country);
            log.info("Language of the movie: " + JSON.parse(body).Language);
            log.info("Plot of the movie: " + JSON.parse(body).Plot);
            log.info("Actors in the movie: " + JSON.parse(body).Actors);
            log.info("========================================");  
    });
};

function BBoys() {
    fs.readFile("random.txt", "utf8", function (err, data) {
        data = data.split(",");
        action = data[0];
        userInput = data[1];
        log.info("========================================");  
        run();
    });
};