const menuIcon = document.querySelector
('.hamburger-menu2'); 
const navbar = document.querySelector ('.navbar2');
menuIcon.addEventListener("click", () => {
    
    navbar.classList.toggle ("change");
});