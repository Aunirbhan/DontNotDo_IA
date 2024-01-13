// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider, signInWithRedirect, getRedirectResult } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAGaBk_Q-Dsq2LiH-5xPMwO1qFdKuXQ1pY",
  authDomain: "iatodolist.firebaseapp.com",
  projectId: "iatodolist",
  storageBucket: "iatodolist.appspot.com",
  messagingSenderId: "450824410690",
  appId: "1:450824410690:web:52459fd81bc0b0a08e3fdb",
  measurementId: "G-P0VCQRTC06"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth();

/**
 * Handles the Google Sign-In process.
 * Redirects the user to Google Sign-In and processes the result.
 */
function handleGoogleSignIn() {
  // Create a GoogleAuthProvider instance
  const provider = new GoogleAuthProvider();

  // Initiate the Google Sign-In redirect
  signInWithRedirect(auth, provider)
    .catch((error) => {
      // Handle errors during the redirect
      console.error("Error during Google Sign-In redirect:", error);
      displayErrorMessage("Sign-In Error", "An error occurred during sign-in. Please try again later.");
    });
}

// Add an event listener to a button or element for triggering Google Sign-In
// Example: document.querySelector("#google-sign-in-button").addEventListener("click", handleGoogleSignIn);

/**
 * Processes the Google Sign-In redirect result.
 */
function processGoogleSignInResult() {
  getRedirectResult(auth)
    .then((result) => {
      // Check if a user is signed in
      if (result.user) {
        // User is signed in. You can access user information here.
        const user = result.user;
        // Redirect or perform actions after successful sign-in
        // Example: window.location.href = "/dashboard";
      } else {
        // No user is signed in, handle this case as needed
      }
    })
    .catch((error) => {
      // Handle errors during the redirect result processing
      console.error("Error during Google Sign-In redirect result processing:", error);
      displayErrorMessage("Sign-In Error", "An error occurred during sign-in. Please try again later.");
    });
}

// Call this function to process the Google Sign-In redirect result when needed
// Example: processGoogleSignInResult();

/**
 * Displays an error message to the user.
 * @param {string} title - The title of the error message.
 * @param {string} message - The error message content.
 */
function displayErrorMessage(title, message) {
  // Replace this with your error display logic, e.g., showing a modal or alert
  console.error(`${title}: ${message}`);
  alert(`${title}\n\n${message}`);
}




























// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import { getAuth } from "firebase/auth";
// import { getAuth, getRedirectResult, GoogleAuthProvider } from "firebase/auth";


// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyAGaBk_Q-Dsq2LiH-5xPMwO1qFdKuXQ1pY",
//   authDomain: "iatodolist.firebaseapp.com",
//   projectId: "iatodolist",
//   storageBucket: "iatodolist.appspot.com",
//   messagingSenderId: "450824410690",
//   appId: "1:450824410690:web:52459fd81bc0b0a08e3fdb",
//   measurementId: "G-P0VCQRTC06"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// // Initialize Firebase Authentication and get a reference to the service
// const auth = getAuth();
// getRedirectResult(auth)
//   .then((result) => {
//     // This gives you a Google Access Token. You can use it to access Google APIs.
//     const credential = GoogleAuthProvider.credentialFromResult(result);
//     const token = credential.accessToken;

//     // The signed-in user info.
//     const user = result.user;
//     // IdP data available using getAdditionalUserInfo(result)
//     // ...
//   }).catch((error) => {
//     // Handle Errors here.
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     // The email of the user's account used.
//     const email = error.customData.email;
//     // The AuthCredential type that was used.
//     const credential = GoogleAuthProvider.credentialFromError(error);
//     // ...
//   });