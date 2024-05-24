const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');
const email = document.getElementById('email');
const txtInfo = document.getElementById('txt-info');

const validateForm = () => {
    let noError = true;
    const firstNameValue = firstName.value.trim();
    const lastNameValue = lastName.value.trim();
    const emailValue = email.value.trim();
    const txtInfoValue = txtInfo.value.trim();

    

    if (firstNameValue === '') {
        setError(firstName, 'Veuillez entrer un prénom');
        noError = false;
    }else {
        setSuccess(firstName);
    }

    if (lastNameValue === '') {
        setError(lastName, 'Veuillez entrer un nom');
        noError = false;
    }else {
        setSuccess(lastName);
    }

    if (txtInfoValue === '') {
        setError(txtInfo, 'Veuillez entrer un message');
        noError = false;
    }else {
        setSuccess(txtInfo);
    }

    if (!checkEmail(emailValue)) {
        setError(email, 'Veuillez entrer un courriel valide');
        noError = false;
    } else {
        setSuccess(email);
    }

    return noError;
}


//Vérification courriel
function checkEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

//Message d'erreur
const setError = (input, message) => {
    const inputControl = input.parentElement;
    const errorDisplay = inputControl.querySelector('.form__input--errorMessage');

    errorDisplay.innerText = message;
    inputControl.classList.add('--error');
    inputControl.classList.remove('--success');
}

//Message de succès
const setSuccess = input => {
    const inputControl = input.parentElement;
    console.log("le input control de Set Success est: " + inputControl);
    const errorDisplay = inputControl.querySelector('.form__input--errorMessage');

    errorDisplay.innerText = '';
    inputControl.classList.remove('--error');
    inputControl.classList.add('--success');
}

