let UserCreds = JSON.parse(sessionStorage.getItem("user-creds"));
let UserInfo = JSON.parse(sessionStorage.getItem("user-info"));

let Name = document.getElementById('name');
let Email = document.getElementById('email');
let SignOutBtn = document.getElementById('sign-out-btn');

Name.innerText = UserInfo.firstname;
Email.innerText = UserInfo.email;

let SignOut = () => {
    sessionStorage.removeItem("user-creds");
    sessionStorage.removeItem("user-info"); 
    window.location.href = '/html/index.html';
}

SignOutBtn.addEventListener('click', SignOut);
