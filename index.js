const mongoose = require("mongoose");

require("dotenv/config");

mongoose
  .connect(process.env.DB_CONNECTION, {
    useNewUrlParser: true,
  })
  .then(() => console.log("we are connected Houston..."))
  .catch((err) => console.log("you have an error buddy, fix it...", err));

const movieSchema = mongoose.Schema({
  title: String,
  genre: [String],
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
