const form = document.getElementById('form');
const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');
const email = document.getElementById('email');



//Show input error message 
function showError(input, message) {
    const inputControl = input.parentElement;
    inputControl.classList.add('error');
    const errorMessage = inputControl.querySelector('.errorMessage');
    errorMessage.innerText = message;
    console.log(message);
}

//Show success outline
function showSuccess(input) {
    const inputControl = input.parentElement;
    inputControl.classList.remove('error');
    inputControl.classList.add('success');
    const errorMessage = inputControl.querySelector('.errorMessage');
    errorMessage.innerText = '';
}


function checkEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}


//Event Listeners
form.addEventListener('submit', function(e){
    e.preventDefault();

    if(firstName.value === '') {
        showError(firstName, 'Veillez entrer un prénom')
    } else {
        showSuccess(firstName);
    }

    if(lastName.value === '') {
        showError(lastName, 'Veillez entrer un nom')
    } else {
        showSuccess(lastName);
    }


    if (!checkEmail(email.value)) {
        showError(email, 'Veuillez entrer un courriel valide');
    } else {
        showSuccess(email);
    }

});


