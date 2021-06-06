const movies = require('../0.JSON/movies.json')
const reviews = require('../0.JSON/reviews.json')
const users = require('../0.JSON/users.json')


const getMovies = (id, cb) => {
    setTimeout(() => {
        const movie = movies.find((movie) => movie.id === id);
        cb(movie);
    }, 1000)
}


const getRreviews = (movieID, cb) => {
    setTimeout(() => {
        const review = reviews.find((review) => review.movie_id === movieID);
        cb(review);
    }, 1000);
}


const getUsers = (name, cb) => {
    setTimeout(() => {
        const user = users.find(user => user.name === name);
        cb(user);
    }, 1000);
}



getMovies(3, (movie) => {
    getRreviews(movie.id, (review) => {
        getUsers(review.reviewer, (user) => {
            console.log(user)
        });
    });
});


