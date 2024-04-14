var profile_btn = document.getElementById("profile");
var login_btn = document.getElementById("login");



let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
};

let UserCreds = JSON.parse(sessionStorage.getItem("user-creds"));
let UserInfo = JSON.parse(sessionStorage.getItem("user-info"));

profile_btn.style.display = "none";
login_btn.style.display = "block";

let CheckCreds = () => {
    if (sessionStorage.getItem("user-creds") && sessionStorage.getItem("user-info")) {
        login_btn.style.display = "none";
        profile_btn.style.display = "block";
    }
}

window.addEventListener('load', CheckCreds);





