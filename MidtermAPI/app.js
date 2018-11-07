const endpoint = "https://api.giphy.com/v1/gifs/random";
const key = "51SLNTvlfvAfSzYAcfdq7Tlg9qI6SoRB";

const fav = document.getElementsByClassName('fav');
for (let i = 0; i < fav.length; i++) {
    fav[i].addEventListener('keydown', function (event) {
        if (event.which == 13) {
            addGif(event.currentTarget.value, event.currentTarget.id);
        }
    })
}

// random url
function addGif(tag, id) {
    const url = `${endpoint}?tag=${tag}&api_key=${key}&rating=g`;


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
        document.getElementById(id + "-gifs").appendChild(image);
    });
}
