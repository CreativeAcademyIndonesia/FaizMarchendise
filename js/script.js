const navbar = document.getElementsByClassName('mynav')[0];
console.log(navbar);
window.addEventListener('scroll', function() {
    if (window.pageYOffset <= 0 ) {
        navbar.style.background = 'transparent';
        navbar.style.boxShadow = '0px 4px 24px rgba(105, 105, 105, 0)'
    } else if (window.pageYOffset > 0) {
        navbar.style.background = '#fff';
        navbar.style.boxShadow = '0px 4px 24px rgba(105, 105, 105, 0.1)'
    }
});