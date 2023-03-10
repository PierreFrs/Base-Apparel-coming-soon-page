const submit = document.getElementById('submit');
const error = document.querySelector('.error-msg');
const email = document.getElementById('email');
const errorIcon = document.querySelector('.error-icon')

submit.addEventListener('click', (e) => {
    e.preventDefault();
    const re =  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (email.value === '') {
        errorIcon.style.display = 'inline-block';
        error.innerHTML = 'Oops! Please add your email';
    } else if (!re.test(email.value)) {
        errorIcon.style.display = 'inline-block';
        error.innerHTML = 'Oops! Please check your email';
    } else {
        errorIcon.style.display = 'none';
        error.innerHTML = '';
    }
})