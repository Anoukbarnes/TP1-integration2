const form = document.getElementById('form');
const firstname = document.getElementById('first-name'); 
const lastname = document.getElementById('last-name');
const email = document.getElementById('email');



form.addEventListener('submit', e => {
    e.preventDefault();
    if (validateInputs()) {
        // Si la validation est réussie, soumettre le formulaire
        form.submit();
    }
});



//Fonction qui va valider notre formulaire 
const validateInputs = () => {
    console.log("début");
    let noError = true;
    const firstnameValue = firstname.value.trim();
    const lastnameValue = firstname.value.trim();
    const emailValue = email.value.trim();


    if (firstnameValue === '') {
        setError(firstname, 'Veuillez entrer votre prénom');
        noError = false;
    } else {
        setSuccess(firstname);
    }

    if (lastnameValue === '') {
        setError(lastname, 'Veuillez entrer votre nom');
        noError = false;
    } else {
        setSuccess(lastname);
    }

    if (!checkEmail(emailValue)) {
        setError(email, 'Veuillez entrer une adresse courriel valide');
        noError = false;
    } else {
        setSuccess(email);
    }

    console.log("fin");

    return noError
}

//Check if email is valid
function checkEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const setError = (input, message) => {
    const inputControl = input.parentElement;
    const errorDisplay = inputControl.querySelector('.errorMessage');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
}

const setSuccess = input => {
    const inputControl = input.parentElement;
    const errorDisplay = inputControl.querySelector('.errorMessage');

    errorDisplay.innerText = '';
    inputControl.classList.remove('error');
    inputControl.classList.add('success');
}

