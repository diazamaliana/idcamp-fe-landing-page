// Slideshow Testimony 
var slideNumber = 1;
showSlides(slideNumber);

function plusSlides(n) {
  showSlides(slideNumber += n);
}

function currentSlide(n) {
  showSlides(slideNumber = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("quotes");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideNumber = 1}    
  if (n < 1) {slideNumber = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideNumber-1].style.display = "block";  
  dots[slideNumber-1].className += " active";
}