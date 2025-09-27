// Store the selected elements we're going to use
const navbutton = document.querySelector('#ham-button');
const navlinks = document.querySelector('#nav-bar');

// Toghle the show class off and on
navbutton.addEventListener('click', () => {
    navbutton.classList.toggle('show');
    navlinks.classList.toggle('show');
})



