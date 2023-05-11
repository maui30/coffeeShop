hamburger = document.querySelector('#menu-btn');

hamburger.onclick = function () {
    let navbar = document.querySelector('.navbar');
    navbar.classList.toggle("active");
}

let navbarS = document.querySelector("header");

let sticky = navbarS.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.scrollY >= sticky) {
    navbarS.classList.add("sticky")
  } else {
    navbarS.classList.remove("sticky");
  }
}

window.addEventListener("scroll", function() {
  // Check if the user has scrolled past a certain threshold
  if (window.scrollY >= 100) {
    myFunction();
  } else {
    navbarS.classList.remove("sticky");
  }
});

let navbarLinks = document.querySelectorAll(".navbar a");

let menuHomeBtn = document.querySelector(".content a");

// Add a click event listener to each <a> tag
navbarLinks.forEach(function(link) {
  link.addEventListener("click", function() {
    // Remove the "active" class from all <a> tags
    navbarLinks.forEach(function(link) {
      link.classList.remove("active");
    });
    link.classList.add("active");
  });
});

menuHomeBtn.addEventListener("click", function() {
  navbarLinks.forEach(function(link) {
    link.classList.remove("active");
  });
  // Add the "active" class to the "Menu" link in the navbar
  document.querySelector(".navbar a[href='#menu']").classList.add("active");
});