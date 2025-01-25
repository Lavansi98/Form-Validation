const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confpassword = document.getElementById('confpassword');

form.addEventListener('submit',e => {
    e.preventDefault();
    checkInput();
})

function checkInput(){
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const confirmPasswordValue = confpassword.value.trim();

    if (usernameValue === ''){
        setError(username, 'Username cannot be blank');
    }
    else{
        setSuccess(username);
    }

    if (emailValue === ''){
        setError(email, 'Email cannot be blank');
    }
    else if (!isEmail(emailValue)){
        setError(email,'Not a valid email')
    }
    else{
        setSuccess(email);
    }

    if (passwordValue === ''){
        setError(password, 'Password cannot be blank');
    }
    else{
        setSuccess(password);
    }

    if (confirmPasswordValue === ''){
        setError(confpassword, 'Password cannot be blank');
    }
    else if(passwordValue !== confirmPasswordValue){
        setError(confpassword,'Password Does Not Match')
    }
    else{
        setSuccess(confpassword);
    }
}

function setError(input, message){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small')
    formControl.className = 'form-control error'
    small.innerText = message;
}

function setSuccess(input){
    const formControl = input.parentElement;
    formControl.className = 'form-control success'
}

function isEmail(email){
    return  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
}