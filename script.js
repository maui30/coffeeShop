hamburger = document.querySelector('#menu-btn');

hamburger.onclick = function () {
    navbar = document.querySelector('.navbar');
    navbar.classList.toggle("active");
}


// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.querySelector("header");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.scrollY >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

// Add a scroll event listener
window.addEventListener("scroll", function() {
  // Check if the user has scrolled past a certain threshold
  if (window.scrollY >= 100) {
    // If they have, call the myFunction() function
    myFunction();
  } else {
    // If they haven't, remove the "sticky" class from the navbar
    navbar.classList.remove("sticky");
  }
});

// Get all the <a> tags in the navbar
var navbarLinks = document.querySelectorAll(".navbar a");

// Add a click event listener to each <a> tag
navbarLinks.forEach(function(link) {
  link.addEventListener("click", function() {
    // Remove the "active" class from all <a> tags
    navbarLinks.forEach(function(link) {
      link.classList.remove("active");
    });
    // Add the "active" class to the clicked <a> tag
    link.classList.add("active");
  });
});