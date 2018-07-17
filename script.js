window.onscroll = function() {scrollFunction()};

scrollFunction = () => {
    if (document.body.scrollTop > 5 || document.documentElement.scrollTop > 5) {
        document.getElementById("myBtn2").style.display = "none";
    } else {
        document.getElementById("myBtn2").style.display="block"
    }
}

pageScroll = () => {
    window.scrollBy({
        top: 540, // could be negative value
        left: 0, 
        behavior: 'smooth'
    })
}