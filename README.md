# LIRI

The Liri-Node App is a node application that runs in terminal/Bash.  It relies on command line inputs to perform certain functions that are entirely dictated by the user inputs.  The command line input at position [2] allows the code to know which function to execute.

# "Bands in Town Search"

This search is executed by typing "concert-this" in the CLI at position [2]. Through the Axios NPM, the Bands in Town API is queried for upcoming concerts for the specified artist.  The command line input beginning at position [3] will tell the app which artist to search for. Using multi-word bands/artists is possible through slicing and joining the CLIs.  The app will return the next 5 shows for the specified artist. Each result contains the venue name, venue location, and date of the show.

/photos/Screenshot1.png
/photos/Screenshot2.png

# "Spotify Search"

This search is executed by typing "spotify-this-song" in the CLI at position [2].  Using the Spotify NPM, the app will query Spotify for the specified song.  The song that is searched for is retrieved from the CLI beginning at position [3].  Again, multi-word searches are possible by utilizing splicing and joining.  The app will return 5 results for the searched song.  Each result contains the artist's name, the name of the song, the name of the album the song appears on, and a link to preview the song.  

/photos/Screenshot3.png
/photos/Screenshot4.png

This portion of the LIRI app has a default selection in the event that there is no CLI at position [3].  Leaving [3] blank will search for The Sign by Ace of Base on Spotify.

/photos/Screenshot5.png
/photos/Screenshot6.png

# "OMDB Search"

This search is executed by typing "movie-this" in the CLI at position [2]. Through the Axios NPM, the OMDB API is queried for a specified movie.  The command line input beginning at position [3] will tell the app which movie to search for. Using multi-word movie titles is possible through slicing and joining the CLIs.  The app will return the best result for the specified movie. The result will contain the movie title, the year it was released, the IMDB rating for the film, the Rotten Tomatoes rating for the film, the country(s) of origin, the language(s) the film is available in, the plot of the movie, and a list of the prominent actors featured in the film.

/photos/Screenshot7.png
/photos/Screenshot8.png

This portion of the LIRI app has a default selection in the event that there is no CLI at position [3].  Leaving [3] blank will search for the film "Mr Nobody".

/photos/Screenshot9.png
/photos/Screenshot10.png

# "'Simon Says' Function"

