// Get references to our elements
const shareButton = document.getElementById("share-button");
const menuContainer = document.querySelector(".button-container__menu");

// Initial check to make sure the menu is hidden
menuContainer.style.display = "none";

// Add click event listener to the share button
shareButton.addEventListener("click", function () {
  // Toggle menu visibility
if (menuContainer.style.display === "block") {
    menuContainer.style.display = "none";
    // Reset button style
    shareButton.classList.remove("active");
} else {
    menuContainer.style.display = "block";
    // Change button style when active
    shareButton.classList.add("active");
}
});
