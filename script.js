const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#confirm-password');
const submitButton = document.querySelector('#submit-button');
const errorMessage = document.querySelector('.password-error');

submitButton.addEventListener('click', () =>{
    if(password.value !== confirmPassword.value){
        errorMessage.textContent = '*password do not match';
    }
})