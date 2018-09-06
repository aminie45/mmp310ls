const elem = document.createElement('h1');
elem.textContent = "Hello World";
document.body.appendChild(elem);

const submitButton = document.getElementById('submit');
const nameInput = document.getElementById('name');
const bioInput = document.getElementById('bio');
const boroughSelect = document.getElementById('borough');


submitButton.onclick = function(event) {
    const message = document.createElement ("p");
    message.textContent = "Hello, "
                            + nameInput.value
                            + " from "
                            + boroughSelect.value 
                            + " welcome to my website.";
    document.body.appendChild (message);
    



// this is the example during class before i used the example code when i reached home.
    
// submitButton.onclick = function(event) {
//    const name = nameInput.value;
//    const bio = bioInput.value;
//    const borough = boroughSelect.value;
//    const message = document.createElement('p');
//    message.textContent = 'Hello'
    
};