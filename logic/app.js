const submitButton = document.getElementById ('submit');
const storyP = document.getElementById ('story');

const nounInput = document.getElementById ('noun');
const nounError = document.getElementById ('noun-error');

const verbInput = document.getElementById ('verb');
const verbError = document.getElementById ('verb-error');

const adjectiveInput = document.getElementById ('adjective');
const adjectiveError = document.getElementById ('adjective-error');

const placeInput = document.getElementById ('place');
const placeError = document.getElementById ('place-error');

submitButton.onclick = function() {
    
    // check to make sure user input a noun
    
    if (!nounInput.value) {
        nounError.textContent = "Please enter a NOUN";
    } else if (!verbInput.value) {
        verbError.textContent = "Please enter a VERB";
    } else if (!adjectiveInput.value) {
        adjectiveError.textContent = "Please enter a ADJECTIVE";
    } else if (!placeInput.value) {
        placeError.textContent = "Please enter a PLACE";
    } else {
        const story = "Once there was a " 
    + nounInput.value + 
          " named Jerry." + " He loves to " 
    + verbInput.value + 
          " really fast in the summer. His fav place to do this is " 
    + placeInput.value + ". this was too " 
    + adjectiveInput.value + 
          " for me so i didn't go with him.";
    
    storyP.textContent = story;
        }
};