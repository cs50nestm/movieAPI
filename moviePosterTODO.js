let submitButton = document.querySelector('#submit');
let movieSelected = document.querySelector('#movieName');
let addResult = document.querySelector('#result');

submitButton.addEventListener('click', e => {
    // clear the result div
    addResult.innerHTML = "";

    // get input from movieSelected and save in a variable named movie
    // TODO

    // check if nothing enterred into movie input box (movie == null) if so alert user
    // TODO
    if ...

    else {
        let base_url = "https://api.themoviedb.org/3/search/movie?";
        let api_key = "api_key=8cd641fe58ace9a3561002f6a4a0a852";

        // add movie to query string
        let query = "&query=" + (add movie variable);

        let url = base_url + api_key + query;

        getPosters(url);
    }
})

// async function
async function getPosters(url) {
  // await response of fetch call
  let response = await fetch(url);
  // only proceed once promise is resolved
  let data = await response.json();

  // only proceed once second promise is resolved

  // complete for loop to iterate through data.results
  // TODO
  for (...) {
    let poster =   data.results[i].poster_path;
    if (poster != null) {
        let code = "<br><img src = http://image.tmdb.org/t/p/w300/" + poster + ">"
        addResult.innerHTML += code;
    }
  }
}

