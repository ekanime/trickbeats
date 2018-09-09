var backdrop = document.querySelector('.backdrop');
var toggle = document.querySelector('.toggle-button');
var mobileNav = document.querySelector('.mobile-nav');
var heading = document.querySelector('#brand-name');



toggle.addEventListener('click',function(){
    mobileNav.classList.add('open');
    backdrop.classList.add('open');
});


backdrop.addEventListener('click',function(){
    mobileNav.classList.remove('open');
    backdrop.classList.remove('open');
});

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  function changeColor(){
      colorInput = getRandomColor();
      heading.style.color = colorInput;
  }

  setInterval("changeColor()",500);
  
  