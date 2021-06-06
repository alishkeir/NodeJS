const movies = require('../0.JSON/movies.json')
const reviews = require('../0.JSON/reviews.json')
const users = require('../0.JSON/users.json')


const getMovies = (id) => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            const movie = movies.find((movie) => movie.id === id);
            if (movie) {
                res(movie)
            }
            else {
                rej("Movie Not Found")
            }
        }, 1000)


    });

}


const getRreviews = (movieID) => {

    return new Promise((res, rej) => {
        setTimeout(() => {
            const review = reviews.find((review) => review.movie_id === movieID);
            if (review) {
                res(review)
            }
            else {
                rej("Review Not Found")
            }
        }, 1000)


    });
}


const getUsers = (name) => {

    return new Promise((res, rej) => {
        setTimeout(() => {
            const user = users.find(user => user.name === name);
            if (user) {
                res(user)
            }
            else {
                rej("Reviewer Not Found")
            }
        }, 1000)


    });


}



// getMovies(1).then((movie) => {
//     console.log(movie);
//     getRreviews(movie.id).then((review) => {
//         console.log(review);
//         getUsers(review.reviewer).then((reviewer) => console.log(reviewer)).catch(err => console.log(err))
//     }).catch(err => console.log(err));
// }).catch(err => console.log(err));


getMovies(1)
    .then((movie) => {
        console.log(movie)
        return getRreviews(movie.id)
    })
    .then((review) => {
        console.log(review)
        return getUsers(review.reviewer);
    })
    .then(user => console.log(user))
    .catch(err => console.log(err));
