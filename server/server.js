const express = require('express')
const path = require('path')
const app = express()

// Serve static content in directory 'files'
app.use(express.static(path.join(__dirname, 'files')));
app.use('/images', express.static(path.join(__dirname, '../Images')))

// Configure a 'get' endpoint for data..
app.get('/movies', function (req, res) {
  const movies = [
        {
            Title: "The Thing",
            Released: "1982-06-25",
            Runtime: 109,
            Genres: ["Horror", "Mystery", "Sci-Fi"],
            Directors: ["John Carpenter"],
            Writers: ["Bill Lancaster", "John W. Campbell Jr."],
            Actors: ["Kurt Russell", "Wilford Brimley", "Keith David"],
            Plot: "A research team in Antarctica is hunted by a shape-shifting alien that assumes the appearance of its victims.",
            Poster: "/images/thething.webp",
            Metascore: 57,
            imdbRating: 8.2
        },
        {
            Title: "Psycho",
            Released: "1960-09-08",
            Runtime: 109,
            Genres: ["Horror", "Mystery", "Thriller"],
            Directors: ["Alfred Hitchcock"],
            Writers: ["Joseph Stefano", "Robert Bloch"],
            Actors: ["Anthony Perkins", "Janet Leigh", "Vera Miles"],
            Plot: "A Phoenix secretary embezzles money from her employer's client, goes on the run, and checks into a remote motel run by a young man under the domination of his mother.",
            Poster: "/images/psycho.jpg",
            Metascore: 97,
            imdbRating: 8.5
        },
        {
            Title: "Jaws",
            Released: "1975-06-20",
            Runtime: 124,
            Genres: ["Adventure", "Mystery", "Thriller"],
            Directors: ["Steven Spielberg"],
            Writers: ["Peter Benchley", "Carl Gottlieb"],
            Actors: ["Roy Scheider", "Robert Shaw", "Richard Dreyfuss"],
            Plot: "When a massive killer shark unleashes chaos on a beach community, a sheriff, a marine biologist, and an old seafarer hunt the beast down.",
            Poster: "/images/jaws.webp",
            Metascore: 87,
            imdbRating: 8.1
        }
    ];

    res.json(movies);
})

app.listen(3000)

console.log("Server now listening on http://localhost:3000/")

