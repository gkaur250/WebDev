// Initialize the slideIndex to 0 to start with the first slide
var slideIndex = 0;
        showSlides();
        // Call the showSlides function to start the slideshow
        function showSlides() {
            var i;
            var slides = document.getElementsByClassName("mySlides"); // Get all elements with the class "mySlides" (the slides)
            var dots = document.getElementsByClassName("dot"); // Get all elements with the class "dot" (the navigation dots)
            for (i = 0; i < slides.length; i++) { // Hide all the slides initially
                slides[i].style.display = "none";
            }
            slideIndex++;  // Increment the slideIndex to show the next slide
            if (slideIndex > slides.length) {slideIndex = 1}  // If slideIndex exceeds the number of slides, reset it to 1
            for (i = 0; i < dots.length; i++) { // Remove the "active" class from all dots
                dots[i].className = dots[i].className.replace(" active", "");
            }
            slides[slideIndex-1].style.display = "block"; // Display the current slide
            dots[slideIndex-1].className += " active"; // Add the "active" class to the current dot
            setTimeout(showSlides, 3000); // Change image every 3 seconds
        }