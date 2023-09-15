// Define the password
const password = "smash";

// Check if the user has already entered the password
const hasEnteredPassword = localStorage.getItem("hasEnteredPassword") === "true";

if (!hasEnteredPassword) {
    const enteredPassword = prompt('Enter Password', '');
    if (enteredPassword !== password) {
        // Redirect to the current page for incorrect password
        window.location.href = window.location.href; // Redirect to the current page
    } else {
        // Set the flag in localStorage for correct password
        localStorage.setItem("hasEnteredPassword", "true");
    }
}
