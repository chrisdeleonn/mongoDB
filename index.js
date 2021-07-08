const mongoose = require("mongoose");

require("dotenv/config");

mongoose
  .connect(process.env.DB_CONNECTION, {
    useNewUrlParser: true,
  })
  .then(() => console.log("we are connected Houston..."))
  .catch((err) => console.log("you have an error buddy, fix it...", err));

const movieSchema = mongoose.Schema({
  title: { type: String, required: true, unique: true },
  genre: [String],
  year: Number,
  rating: Number,
  date: {
    type: Date,
    default: Date.now(),
  },
});

const Movie = mongoose.model("Movie", movieSchema);

function getAllMovies() {
  Movie.find()
    .then((allMovies) =>
      console.log("here are all the movies as requested", allMovies)
    )
    .catch((err) =>
      console.log("you broke something, assemble the monkeys to fix", err)
    );
}

getAllMovies();

function createMovie() {
  const newMovie = new Movie({
    title: "Ford v Ferrari",
    genre: ["Drama", "Action"],
    year: 2017,
    rating: 5,
  });
  newMovie
    .save()
    .then(() => console.log("movie was saved"))
    .catch((err) => console.log("movie was not added, err"));
}

createMovie();

function getAllMoviesCount() {
  Movie.find()
    .countDocuments()
    .then((count) => console.log("here is the count, pay me", count, "BTC"))
    .catch((err) => console.log(err));
}

getAllMoviesCount();

function getMoviesFiltered() {
  Movie.find()
    .limit(10)
    .sort({ year: 1 })
    .then((movies) => console.log("here are the filter results", movies))
    .catch((err) => console.log(err));
}

getMoviesFiltered();
