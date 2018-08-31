var backdrop = document.querySelector('.backdrop');
var toggle = document.querySelector('.toggle-button');
var mobileNav = document.querySelector('.mobile-nav');



toggle.addEventListener('click',function(){
    mobileNav.classList.add('open');
    backdrop.classList.add('open');
});


backdrop.addEventListener('click',function(){
    mobileNav.classList.remove('open');
    backdrop.classList.remove('open');
});