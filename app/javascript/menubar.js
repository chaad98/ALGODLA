document.addEventListener("DOMContentLoaded", function () {
    const menuBar = document.querySelector(".menubar-container");
    const menuLinks = document.querySelectorAll(".menu-link"); // Select all menu links
    const logoImage = document.querySelector(".logo"); // Select the logo image element
    
    // Define the scroll threshold (20% of the viewport height)
    const scrollThreshold = window.innerHeight * 0.2;

    // Flag to track if the image has been changed
    let isImageBlack = false;

    // Function to toggle the "scrolled" class based on scroll position
    function toggleScrolledClass() {
        if (window.scrollY > scrollThreshold) {
            menuBar.classList.add("scrolled");
            // Apply the "scrolled" class to menu links
            menuLinks.forEach((link) => {
                link.classList.add("scrolled");
            });

            // Check if the image needs to be changed
            if (!isImageBlack) {
                logoImage.src = "/assets/algodla_black.png";
                isImageBlack = true;
            }
        } else {
            menuBar.classList.remove("scrolled");
            // Remove the "scrolled" class from menu links
            menuLinks.forEach((link) => {
                link.classList.remove("scrolled");
            });

            // Check if the image needs to be changed back to white
            if (isImageBlack) {
                logoImage.src = "/assets/algodla_white.png";
                isImageBlack = false;
            }
        }
    }

    // Add scroll event listener
    window.addEventListener("scroll", toggleScrolledClass);

    // Initial check for the scroll position
    toggleScrolledClass();
});
