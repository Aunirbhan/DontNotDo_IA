// Import Firebase modules
import { initializeApp } from 'https://cdn.skypack.dev/@firebase/app';
import { getAuth, GoogleAuthProvider, signInWithRedirect, getRedirectResult, onAuthStateChanged, signOut } from 'https://cdn.skypack.dev/@firebase/auth';
import { getDatabase, ref, set, get, child, update, remove } from 'https://www.gstatic.com/firebasejs/9.6.10/firebase-database.js';

// Firebase configuration
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
const auth = getAuth(app);

// Function to handle Google sign-in
function handleGoogleSignIn() {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider);
}

// Function to handle sign-out
function handleSignOut() {
    signOut(auth).then(() => {
        console.log("User signed out successfully");
        window.location.href = "signin.html";
    }).catch((error) => {
        console.error("Sign out error:", error);
    });
}

// Handling the auth state change
onAuthStateChanged(auth, (user) => {
    if (user) {
        console.log("User is signed in:", user.displayName);
        document.getElementsByClassName(user-welcome)
        // Optionally redirect to index.html if you're not there already
        if (window.location.pathname !== '/index.html') {
            window.location.href = "index.html";
        }
    } else {
        console.log("No user is signed in.");
        // Redirect to sign-in page if not on it
        if (window.location.pathname !== '/signin.html') {
            window.location.href = "signin.html";
        }
    }
});

// Handling Google Sign-In redirect result
function processGoogleSignInResult() {
    getRedirectResult(auth)
        .then((result) => {
            if (result.user) {
                console.log("Sign-in successful, user:", result.user.displayName);
                window.location.href = "index.html";
            }
        })
        .catch((error) => {
            console.error("Error during Google Sign-In redirect result processing:", error);
        });
}

// Call processGoogleSignInResult to handle any sign-in redirect
processGoogleSignInResult();

// Expose the sign-in and sign-out functions to be called from HTML
window.handleGoogleSignIn = handleGoogleSignIn;
window.handleSignOut = handleSignOut;
