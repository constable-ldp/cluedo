var sports = ['football', 'tennis', 'rugby'];



// sports.push('curling');

// sports.pop();
// sports.pop();



// sports.unshift('badminton');

// console.log(sports);

// var removedSport = sports.splice(1,6);
// console.log(removedSport);
// console.log(sports);

// for (let currentSport of sports) {
//     if (currentSport == 'football2') {
//         console.log('Yay')
//     } 
// }

let movie = {
    title: 'It\'s a Wonderful Life',
    year: 1946,
    language: 'Spanish'
};



movie.cast = ['James Stewart', 'Donna Reed'];

movie.language = 'English';

movie.cast.push('Luke Constable');

movie.rating = {
    critic: 94,
    audience: 95
};

// delete movie.year;

// console.log(movie.rating.critic);
// console.log(movie['rating']['audience']);

for (let key in movie) {
    var value = movie[key];
    console.log(`The ${key} is ${value}`)
}

console.log(movie);