document.addEventListener("DOMContentLoaded", function () {
    const menuBar = document.querySelector(".menubar-container");
    const menuLinks = document.querySelectorAll(".menu-link");
    const logoImage = document.querySelector(".logo");

    const languageButton = document.querySelector(".language-button");
    const languageList = document.querySelector(".language-list");

    const languageListItems = document.querySelectorAll(".language-list li a"); // Select all language list items

    // Define the scroll threshold (20% of the viewport height)
    const scrollThreshold = window.innerHeight * 0.2;
    let isImageBlack = false;

    // Function to toggle the "scrolled" class based on scroll position
    function toggleScrolledClass() {
        if (window.scrollY > scrollThreshold) {
            menuBar.classList.add("scrolled");
            menuLinks.forEach((link) => {
                link.classList.add("scrolled");
            });

            if (!isImageBlack) {
                logoImage.src = "/assets/algodla_black.png";
                isImageBlack = true;
            }

            // Change background and text color for the language button and list
            languageButton.style.backgroundColor = "#fff";
            languageButton.style.color = "#000";
            languageList.style.backgroundColor = "#fff";
            languageList.style.color = "#000";

            // Change the font color of the language list items to black
            languageListItems.forEach((item) => {
                item.style.color = "#000";
            });
        } else {
            menuBar.classList.remove("scrolled");
            menuLinks.forEach((link) => {
                link.classList.remove("scrolled");
            });

            if (isImageBlack) {
                logoImage.src = "/assets/algodla_white.png";
                isImageBlack = false;
            }

            // Change background and text color back to the initial values
            languageButton.style.backgroundColor = "#353434";
            languageButton.style.color = "#fff";
            languageList.style.backgroundColor = "#353434";
            languageList.style.color = "#fff";

            // Change the font color of the language list items back to the initial values
            languageListItems.forEach((item) => {
                item.style.color = "#fff";
            });
        }

        // Apply the "scrolled" class to nav-lang links
        const navLangLinks = document.querySelectorAll(".nav-lang a");
        navLangLinks.forEach((link) => {
            if (window.scrollY > scrollThreshold) {
                link.classList.add("scrolled");
            } else {
                link.classList.remove("scrolled");
            }
        });
    }

    // Toggle the language dropdown when the "Language" button is clicked
    languageButton.addEventListener("click", function (event) {
        // Prevent the click event from propagating to the document
        event.stopPropagation();
        languageList.style.display = languageList.style.display === "block" ? "none" : "block";
    });

    // Close the language list when clicking anywhere on the document
    document.addEventListener("click", function (event) {
        if (languageList.style.display === "block" && event.target !== languageButton && !languageList.contains(event.target)) {
            languageList.style.display = "none";
        }
    });

    // Add scroll event listener
    window.addEventListener("scroll", toggleScrolledClass);

    // Initial check for the scroll position
    toggleScrolledClass();
});
