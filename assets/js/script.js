const wrapper = document.querySelector(".auth-wrapper");
const loginLink = document.querySelector(".auth-login-link");
const registerLink = document.querySelector(".auth-register-link");

loginLink.addEventListener('click', ()=> {
    wrapper.classList.remove('active');
});

registerLink.addEventListener('click', ()=> {
    wrapper.classList.add('active');
});