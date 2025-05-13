// Get elements
const button = document.getElementById("animateButton");
const preferenceStatus = document.getElementById("preferenceStatus");

// Function to store user preference in localStorage
function storeUserPreference() {
  localStorage.setItem("buttonClicked", "true");
}

// Function to retrieve user preference from localStorage
function retrieveUserPreference() {
  const clicked = localStorage.getItem("buttonClicked");
  if (clicked === "true") {
    preferenceStatus.textContent = "You have clicked the button!";
  } else {
    preferenceStatus.textContent = "You haven't clicked the button yet.";
  }
}

// Function to clear user preference on page reload
function clearUserPreference() {
  localStorage.removeItem("buttonClicked");
}

// Function to trigger animation
function triggerAnimation() {
  button.classList.add("animate"); // Add the animation class
  storeUserPreference(); // Store user preference when button is clicked
  retrieveUserPreference(); // Update the preference status
}

// Event listener to trigger animation on button click
button.addEventListener("click", triggerAnimation);

// Clear preference when the page is reloaded (before showing any status)
window.onload = function () {
  clearUserPreference();
  retrieveUserPreference();
};
