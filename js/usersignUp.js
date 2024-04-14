 import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
 import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-analytics.js";
 import { getDatabase, set, ref } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-database.js";
 import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";

 // https://firebase.google.com/docs/web/setup#available-libraries
 
 const firebaseConfig = {
   apiKey: "AIzaSyDbx9s9iI4X4yvmO1w1f73OyiIRzoFYmFY",
   authDomain: "sahaya-3165.firebaseapp.com",
   databaseURL: "https://sahaya-3165-default-rtdb.firebaseio.com",
   projectId: "sahaya-3165",
   storageBucket: "sahaya-3165.appspot.com",
   messagingSenderId: "79471128063",
   appId: "1:79471128063:web:8f12fc19879f9377b08bca",
   measurementId: "G-JLQT6F6RJS"
 };

 const app = initializeApp(firebaseConfig);
 const analytics = getAnalytics(app);
 const db = getDatabase();
 const auth = getAuth(app);
 const signUpButton = document.getElementById('signUp');
 const signInButton = document.getElementById('signIn');
 const container = document.getElementById('container');


let EmailInp = document.getElementById('emailInp');
let PassInp = document.getElementById('passwordInp');
let FnameInp = document.getElementById('fnameInp');
let LnameInp = document.getElementById('lnameInp');
let RegisterForm = document.getElementById('registerForm');

let RegisterUser = evt => {
    evt.preventDefault();

    createUserWithEmailAndPassword(auth, EmailInp.value, PassInp.value)
    .then((Credential) =>{
        set(ref(db, 'UserAuthList/' + Credential.user.uid), {
            firstname: FnameInp.value,
            lastname: LnameInp.value,
            email: EmailInp.value // Corrected to lowercase 'email'
        });

        sessionStorage.setItem("user-info", JSON.stringify({
            firstname: FnameInp.value,
            lastname: LnameInp.value,
            email: EmailInp.value
        }));

        sessionStorage.setItem("user-creds", JSON.stringify(Credential.user));
        window.location.href = '/html/index.html';
    })
    .catch((error)=>{
        alert(error.message);
        console.log(error.code);
        console.log(error.message);
    })
}

RegisterForm.addEventListener('submit' , RegisterUser);
