/* global firebase */

// Initialize Firebase
var firebaseConfig = {
    apiKey: "AIzaSyCJI-ao6idNe4H4y_DcY7buMlTYlziJw4s",
  authDomain: "reviv-93958.firebaseapp.com",
  projectId: "reviv-93958",
  storageBucket: "reviv-93958.appspot.com",
  messagingSenderId: "164852211648",
  appId: "1:164852211648:web:4e478337872e7006b3f225",
  measurementId: "G-ETTEV0MFRT"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  // Reference to the Firestore database
  var db = firebase.firestore();
  
  // Function to handle form submission
  function handleSubmit(event) {
    event.preventDefault(); // Prevent default form submission behavior
  
    // Get form data
    var formData = {
      email: document.getElementById("email").value,
      message: document.getElementById("textarea").value
    };
  
    // Add form data to Firestore
    db.collection("formData")
      .add(formData)
      .then(function (docRef) {
        console.log("Form data stored successfully with ID: ", docRef.id);
        // You can add any success message or redirection logic here
      })
      .catch(function (error) {
        console.error("Error adding form data: ", error);
      });
  }
  
  // Attach form submission event listener
  document.getElementById("contactForm").addEventListener("submit", handleSubmit);
  