hamburger = document.querySelector('#menu-btn');

hamburger.onclick = function () {
    navbar = document.querySelector('.navbar');
    navbar.classList.toggle("active");
}

var loomCompanion = document.getElementById("loom-companion-mv3");
loomCompanion.parentNode.removeChild(loomCompanion);