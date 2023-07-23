function toggleMenu() {
    var menu = document.querySelector('.menu');
    menu.classList.toggle('show');
}



let slideIndex = 0;
showSlides();

function showSlides() {
    const slides = document.getElementsByClassName("slide");

    // Hide all slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Increment the slide index and reset if needed
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    // Display the current slide
    slides[slideIndex - 1].style.display = "block";

    // Change slide every 3 seconds (adjust as needed)
    setTimeout(showSlides, 3000);
}