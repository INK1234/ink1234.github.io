// Firebase
// Import the functions you need from the SDKs you need
// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// import firebase from "firebase";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCHpPVO4GClWrCRKTMscZYU22nwYY9UZsI",
  authDomain: "sb-website-4a07e.firebaseapp.com",
  databaseURL: "https://sb-website-4a07e-default-rtdb.firebaseio.com/",
  projectId: "sb-website-4a07e",
  storageBucket: "sb-website-4a07e.appspot.com",
  messagingSenderId: "487339483940",
  appId: "1:487339483940:web:c01b30a635a197d79049b1"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
firebase.initializeApp(firebaseConfig);

// Reference contactInfo collection
let contactInfo = firebase.database().ref("infos");

// Contact Form
document.querySelector(".contact-form").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  let name = document.querySelector(".name").value;
  let email = document.querySelector(".email").value;
  let message = document.querySelector(".message").value;

  console.log(name, email, message);

  saveContactInfo(name, email, message);

  document.querySelector(".contact-form").reset();

  alert("Thank you for you feedback!");
}

// Save data to firebase
function saveContactInfo(name, email, message) {
  let newContactInfo = contactInfo.push();

  newContactInfo.set({
    name: name,
    email: email,
    message: message
  });
}


// *************** NAVBAR ******************
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}
