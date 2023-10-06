document.addEventListener("DOMContentLoaded", function () {
    const downArrow = document.querySelector('.down-arrow a');
    const howItWorksLink = document.querySelector('.works-path');
    const section2 = document.querySelector('#section2-js');
  
    // Function to scroll to the target element
    function scrollToElement(element) {
      const scrollOptions = {
        top: element.offsetTop,
        behavior: 'smooth'
      };
      window.scrollTo(scrollOptions);
    }
  
    // Add click event listeners for both the down arrow and "How It Works?" link
    downArrow.addEventListener('click', function(e) {
      e.preventDefault();
      scrollToElement(section2);
    });
  
    howItWorksLink.addEventListener('click', function(e) {
      e.preventDefault();
      scrollToElement(section2);
    });
  });
  