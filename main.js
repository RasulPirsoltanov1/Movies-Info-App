
let movies = [];

async function getDatas() {
    const url = 'https://ott-details.p.rapidapi.com/advancedsearch?start_year=1970&end_year=2020&min_imdb=6&max_imdb=7.8&genre=action&language=english&type=movie&sort=latest&page=1';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '8a0b4388afmsh7ff887cca690cdep151b55jsnbca9dc528df8',
            'X-RapidAPI-Host': 'ott-details.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        result.results.forEach(element => {
            movies.push(element);
        });
        addMovies();
    } catch (error) {
        console.error(error);
    }
}
getDatas();
var main = document.querySelector("#main");
console.log(movies);
function addMovies() {
    movies.forEach((element) => {
        main.innerHTML += `<div class="movie">
        <img alt="${element.title}"
            src="${element.imageurl[0]??"https://img.freepik.com/free-vector/cinema-realistic-poster-with-illuminated-bucket-popcorn-drink-3d-glasses-reel-tickets-blue-background-with-tapes-vector-illustration_1284-77070.jpg"}">
        <div class="movie-info">
            <h3>${element.title}</h3>
            <span class="green">${element.imdbrating}</span>
        </div>
        <div class="overview">
            <h3>${element.title} <small>overview</small> </h3>
            <p>
                ${element.synopsis}
            </p>
        </div>
    </div>`;
    });
}
