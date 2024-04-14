let UserCreds = JSON.parse(sessionStorage.getItem("user-creds"));
let UserInfo = JSON.parse(sessionStorage.getItem("user-info"));

let Name = document.getElementById('fname');
let SignOutbtn = document.getElementById('primary');

Name.innerText = UserCreds.email;
SignOut.innerText = UserInfo.firstname + " " + UserInfo.lastname;

let SignOut = () => {
    sessionStorage.removeItem("user-creds");
    sessionStorage.removeItem("UserInfo");
    window.location.href ='/html/index.html'
}

SignOutbtn.addEventListener('click', SignOut);