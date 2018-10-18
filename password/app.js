const genBtn = document.getElementById('generate');
const displayPassword = document.getElementById('password-display');

// user clicks button 
genBtn.onclick = generatePassword;

// generate a password
const alphabet = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*<>?/\|,.~`[{}]-_";

function generatePassword() {

    // create password
    let password = "";

    for (let i = 0; i < 10; i++) {
        const n = Math.floor(Math.random() * alphabet.length);

        // randomize uppercase vs lowercase
        password += alphabet[n];
    }

    // display password
    displayPassword.textContent = password;
}

//function generateResponse() {
//
//    if (textInput.value) {
//        const answer = answers[Math.floor(Math.random() * answers.length)];
//
//        response.textContent = answer;
//    } else {
//        alert("You have to ask a question");
//    }