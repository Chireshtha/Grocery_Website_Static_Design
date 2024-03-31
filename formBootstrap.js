const form = document.querySelector('#form');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const exampleCheck1 = document.querySelector('#exampleCheck1');

form.addEventListener('submit', (e) => {
    if (!validateInputs()) {
        e.preventDefault();
    }
})

function validateInputs() {
    const emailVal = email.value.trim();
    const passwordVal = password.value.trim();
    const exampleCheck1Val = exampleCheck1.value.trim();
    let success = true


    if (emailVal === '') {
        success = false;
        setError(email, 'Username is required')
    }
    else if (!validateEmail(emailVal)) {
        success = false;
        setError(email, 'Invalid Username')
    }
    else {
        setSuccess(email)
    }

    if (passwordVal === '') {
        success = false;
        setError(password, 'Password is required')
    }
    else if (passwordVal.length > 8) {
        success = false;
        setError(password, 'Password should be atleast 8 characters long')
    }
    else {
        setSuccess(password)
    }
    if (!this.exampleCheck1Val.checked) {
        success = false;
        setError(exampleCheck1, 'Check all the fields')
    }
    else {
        setSuccess(exampleCheck1)
    }
    return success;
}

function setError(element, message) {
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error');

    errorElement.innerText = message;
    inputGroup.classList.add('error')
    inputGroup.classList.remove('success')
}

function setError(element) {
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error');

    errorElement.innerText = '';
    inputGroup.classList.add('success')
    inputGroup.classList.remove('error')
}
const validateEmail = (email) => {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
};