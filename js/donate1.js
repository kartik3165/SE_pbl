function generateRandomCode() {
    // Generate a random number between 100000 and 999999
    let randomCode = Math.floor(Math.random() * 900000) + 100000;
    return randomCode;
}

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-analytics.js";
import { getDatabase , ref , child , get , set } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-database.js";

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

let nameInput = document.getElementById("name");
let emailInput = document.getElementById("email");
let mobileNumber = document.getElementById("phone");
let clothingTypeSelect = document.querySelector(".clothingType");
let quantityInput = document.querySelector(".quantity");
let streetInput = document.getElementById("street");
let cityInput = document.getElementById("city");
let stateInput = document.getElementById("state");
let pincodeInput = document.getElementById("pincode");
let schedulePickupInput = document.getElementById("schedulePickup");
let submit_Btn = document.getElementById('donate-btn');

function AddData() {
    let donationKey = generateRandomCode();

    let requestData = {
        donor_info: {
            Name: nameInput.value,
            Email: emailInput.value,
            Contact: mobileNumber.value
        },
        street: streetInput.value,
        city: cityInput.value,
        state: stateInput.value,
        pincode: pincodeInput.value,
        pickUp_Date: schedulePickupInput.value,
        donations: []  // Placeholder for donations array
    };

    let clothingItems = document.querySelectorAll(".clothing-item");
    clothingItems.forEach(function(item) {
        let clothingType = item.querySelector(".clothingType").value;
        let quantity = item.querySelector(".quantity").value;
        requestData.donations.push({ clothingType: clothingType, quantity: quantity });
    });

    let donationRef = ref(db, 'PickUp Request/' + donationKey);

    set(donationRef, requestData)
        .then(() => {
            alert("Request submitted for pickup");
        })
        .catch((error) => {
            alert("Error submitting request: " + error.message);
            console.error("Error submitting request:", error);
        });
}

submit_Btn.addEventListener('click', AddData);
