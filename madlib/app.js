const submitButton = document.getElementById ('submit');
const storyP = document.getElementById ('story');

const nounInput = document.getElementById ('noun');
const verbInput = document.getElementById ('verb');
const adjectiveInput = document.getElementById ('adjective');
const placeInput = document.getElementById ('place');

submitButton.onclick = function() {
    const noun = nounInput.value;
    const verb = verbInput.value;
    const adjective = adjectiveInput.value;
    const place = placeInput.value;
    const story = "Once there was a " 
    + noun + 
          " named Jerry." + " He loves to " 
    + verb + 
          " really fast in the summer. His fav place to do this is " 
    + place + ". this was too " 
    + adjective + 
          " for me so i didn't go with him.";
    
    storyP.textContent = story;
};

