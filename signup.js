// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyBEirEqvXiSKvcB9Iia7-LXM_xfwyuUdNg",
    authDomain: "learning-614e4.firebaseapp.com",
    projectId: "learning-614e4",
    storageBucket: "learning-614e4.appspot.com",
    messagingSenderId: "905319129476",
    appId: "1:905319129476:web:38debf02bdd09100847dd1"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.database();
const storage = firebase.storage();

// Form submission
document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const fullname = document.getElementById("fullname").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const profilePic = document.getElementById("profilePic").files[0]; // File input

    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return; 
    }

    // Store image in Firebase storage and get URL
    const storageRef = firebase.storage().ref('profile_pics/' + fullname + '.jpg');
    const uploadTask = storageRef.put(profilePic);

    uploadTask.on('state_changed', 
      (snapshot) => {
        // Track progress if needed
      }, 
      (error) => {
        console.error("Error uploading profile picture:", error);
        alert("Failed to upload profile picture. Please try again.");
      }, 
      () => {
        uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
            // Store user info in the database, including the profile picture URL
            db.ref('users/' + fullname).set({
                fullname: fullname,
                email: email,
                password: password,
                profilePicURL: downloadURL
            })
            .then(() => {
                alert("Registration Successful");
                document.getElementById("signupForm").reset();
                window.location.href = "signin.html"; // Redirect to sign-in page
            })
            .catch((error) => {
                console.error("Error registering user:", error);
                alert("Registration failed. Please try again.");
            });
        });
      }
    );
});

// Back button functionality
document.getElementById('backButton').addEventListener('click', function() {
    window.history.back();
});
