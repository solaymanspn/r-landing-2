var hamburgerBtn = document.querySelector('.hamburger-btn');

var hamburgerMenu = document.querySelector('.hamburger-menu');

var closeBtn = document.querySelector('.close');

var clsBtn = document.querySelectorAll('.cls');

hamburgerBtn.addEventListener('click', function() {
    hamburgerMenu.classList.add('show');
});

closeBtn.addEventListener('click', function() {
    hamburgerMenu.classList.remove('show');
});

clsBtn.forEach(btn => {
    btn.addEventListener('click', function() {
        hamburgerMenu.classList.remove('show');
    })
})