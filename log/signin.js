let togglePassword = document.getElementById('togglePassword');
const password = document.getElementById('password');

togglePassword.onclick = function () {
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);

    if (togglePassword.classList.contains('fa-eye-slash')) {
        togglePassword.classList.remove('fa-eye-slash');
        togglePassword.classList.add('fa-eye');
    } else {
        togglePassword.classList.remove('fa-eye');
        togglePassword.classList.add('fa-eye-slash');
    }
};


let ConfirmtogglePassword = document.getElementById('ConfirmtogglePassword');
const cpassword = document.getElementById('cpassword');

ConfirmtogglePassword.onclick = function () {
    const type = cpassword.getAttribute('type') === 'password' ? 'text' : 'password';
    cpassword.setAttribute('type', type);

    if (ConfirmtogglePassword.classList.contains('fa-eye-slash')) {
        ConfirmtogglePassword.classList.remove('fa-eye-slash');
        ConfirmtogglePassword.classList.add('fa-eye');
    } else {
        ConfirmtogglePassword.classList.remove('fa-eye');
        ConfirmtogglePassword.classList.add('fa-eye-slash');
    }
};


subm=document.getElementById("submit");
subm.onclick = function(){
    if (password != cpassword)
    {
        window.alert("Password and Confirm Password are differnt");
    }
    else{
        window.alert("Passwords are same,moving forward");

    }
}