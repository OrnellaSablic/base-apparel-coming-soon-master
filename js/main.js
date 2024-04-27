
const form = document.getElementById('form');
const inputEmail = document.getElementById('email');
const error = document.getElementById('error');
const iconError = document.getElementById('icon-error');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const email = inputEmail.value.trim();

     if (email === "") {
         inputEmail.classList.add('error');
         error.textContent = 'Email field cannot be empty';
         error.style.color = "rgb(232, 40, 40)";
         iconError.style = "display: block"
         return      
    }
    else if(!/^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/.test(email)){
        inputEmail.classList.add('error');
        error.textContent ='Please provide a valid email'
        error.style.color = "rgb(232, 40, 40)";
        iconError.style = "display: block"
        return
    }else {
        error.textContent = "";
        inputEmail.classList.remove('error');
        error.style = "display:none"
        inputEmail.value = ""
        message.textContent = "¡Email was sent!"
        iconError.style = "display: none"
       
    }
})

