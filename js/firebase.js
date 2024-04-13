// Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-analytics.js";
  import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDbx9s9iI4X4yvmO1w1f73OyiIRzoFYmFY",
    authDomain: "sahaya-3165.firebaseapp.com",
    projectId: "sahaya-3165",
    storageBucket: "sahaya-3165.appspot.com",
    messagingSenderId: "79471128063",
    appId: "1:79471128063:web:8f12fc19879f9377b08bca",
    measurementId: "G-JLQT6F6RJS"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  // Reference to your Firebase database
  const database = firebase.database();

  // Event listener for form submission
  document.getElementById("donationForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission
    
    // Get form data
    const formData = {
      name: document.getElementById("name").value,
      // Get other form fields similarly
    };

    // Push form data to Firebase database
    database.ref("donations").push(formData)
      .then(() => {
        console.log("Data sent successfully!");
        // You can add further actions here, like showing a success message
      })
      .catch(error => {
        console.error("Error sending data:", error);
        // Handle error appropriately, e.g., show an error message to the user
      });
  });