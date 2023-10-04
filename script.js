// JavaScript for the slideshow
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let i;
    const slides = document.getElementsByClassName("slide");
    
    
    
    // Hide all slides
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    
    // Display the current slide
    slides[slideIndex - 1].style.display = "block";
    document.getElementById("count").innerHTML=slideIndex;
 updateButtons(); // Call a function to update the button states
}

function updateButtons() {
    const slides = document.getElementsByClassName("slide");
    const prevButton = document.getElementById("prev-button");
    const nextButton = document.getElementById("next-button");

      if (slideIndex === 1) {
        prevButton.disabled = true;
        
	} else {
        prevButton.disabled = false;
        
	}

    if (slideIndex === slides.length) {
        nextButton.disabled = true;
		
    } else {
        nextButton.disabled = false;
    }
}


