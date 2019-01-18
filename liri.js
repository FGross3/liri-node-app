const axios = require('axios');
const moment = require('moment');
// require("dotenv").config();
// var keys = require("./keys.js");
// var spotify = new Spotify(keys.spotify);

const api = process.argv[2];
const search = process.argv.slice(3).join(" ");

function performSearch(api){
    switch (api) {
        case 'concert-this' : bandsInTown(search)
            break;
        case 'spotify-this-song' : spotify(search)
            break;
        case 'movie-this' : omdb(search);
            break;
        case 'do-what-it-says' : noInput(search)
            break;
    }
}


function bandsInTown(search){
    axios.get("https://rest.bandsintown.com/artists/" + search + "/events?app_id=codingbootcamp")
    .then(function(response) { 
        console.log("\nNext 5 shows for " + search + ":")   
        for (let i = 0; i < 5; i++) {
            const datetime = response.data[i].datetime;
            const concertResults = 
                "\n--------------------------------------------------------------------" +
                "\nVenue Name: " + response.data[i].venue.name + 
                "\nVenue Location: " + response.data[i].venue.city +
                "\nDate: " + moment(datetime).format("MM/DD/YYYY");
            console.log(concertResults);
        }
    })
    .catch(function (error) {
        console.log(error);
    });
};

function spotify(search){
    console.log("spotify")
};

function omdb(search){
    console.log("omdb")
};

function noInput(search){
    console.log("random.txt")
};

performSearch(api);


