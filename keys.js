console.log('this is loaded');
//targeting the secret IDs for spotify from the env file and exporting them so liri.js file can access them.
//Keeps API authentication information hidding by having them stored and accessed from .env 

exports.spotify = {
  id: process.env.SPOTIFY_ID,
  secret: process.env.SPOTIFY_SECRET
};