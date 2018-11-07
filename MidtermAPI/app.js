const hero = document.getElementById('hero');
const gifs = document.getElementById('gifs');

hero.addEventListener("keydown", function (event) {
    if (event.which == 13) {

        // get search term
        const h = hero.value;
        //        const = shoe.value;

        // create search url

        // search endpoint
        //		const endpoint = "https://api.giphy.com/v1/gifs/search";
        // random endpoint 
        const endpoint = "https://api.giphy.com/v1/gifs/random";
        const key = "51SLNTvlfvAfSzYAcfdq7Tlg9qI6SoRB";

        // search url
        //		const url = `${endpoint}?q=${q}&api_key=${key}`;
        // random url
        const url = `${endpoint}?tag=${h}&api_key=${key}&rating=g`;
        //        const url = `${endpoint}?tag=${s}&api_key=${key}&rating=g`;

        const promise = fetch(url)
            .then(function (response) {
                return response.json();
            })
            .catch(function (error) {
                console.log(error);
            });

        promise.then(function (json) {
            // for loop for search results
            //			for (let i = 0; i < json.data.length; i++) {
            //				const gif = json.data[i];

            // one gif for random results
            const gif = json.data;

            // add image to div
            const image = new Image();
            image.src = gif.images.downsized.url;
            gifs.appendChild(image);
            //			}
        });
    }
});

const shoe = document.getElementById('shoe');
const gifs2 = document.getElementById('gifs2');

shoe.addEventListener("keydown", function (event) {
    if (event.which == 13) {

        // get search term
        const s = shoe.value;
        //        const = shoe.value;

        // create search url

        // search endpoint
        //		const endpoint = "https://api.giphy.com/v1/gifs/search";
        // random endpoint 
        const endpoint = "https://api.giphy.com/v1/gifs/random";
        const key = "51SLNTvlfvAfSzYAcfdq7Tlg9qI6SoRB";

        // search url
        //		const url = `${endpoint}?q=${q}&api_key=${key}`;
        // random url
        const url = `${endpoint}?tag=${s}&api_key=${key}&rating=g`;
        //        const url = `${endpoint}?tag=${s}&api_key=${key}&rating=g`;

        const promise = fetch(url)
            .then(function (response) {
                return response.json();
            })
            .catch(function (error) {
                console.log(error);
            });

        promise.then(function (json) {
            // for loop for search results
            //			for (let i = 0; i < json.data.length; i++) {
            //				const gif = json.data[i];

            // one gif for random results
            const gif = json.data;

            // add image to div
            const image = new Image();
            image.src = gif.images.downsized.url;
            gifs2.appendChild(image);
            //			}
        });
    }
});

const sports = document.getElementById('sports');
const gifs3 = document.getElementById('gifs3');

sports.addEventListener("keydown", function (event) {
    if (event.which == 13) {

        // get search term
        const sp = sports.value;

        // random endpoint 
        const endpoint = "https://api.giphy.com/v1/gifs/random";
        const key = "51SLNTvlfvAfSzYAcfdq7Tlg9qI6SoRB";

        // random url
        const url = `${endpoint}?tag=${sp}&api_key=${key}&rating=g`;

        const promise = fetch(url)
            .then(function (response) {
                return response.json();
            })
            .catch(function (error) {
                console.log(error);
            });

        promise.then(function (json) {

            // one gif for random results
            const gif = json.data;

            // add image to div
            const image = new Image();
            image.src = gif.images.downsized.url;
            gifs3.appendChild(image);

        });
    }
});
