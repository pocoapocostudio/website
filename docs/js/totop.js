// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Chrome, Safari and Opera
    document.documentElement.scrollTop = 0; // For IE and Firefox
}

var lastScrollTop = 0;

window.addEventListener("scroll", function(){  
   var st = window.pageYOffset || document.documentElement.scrollTop;  
   if (st > lastScrollTop){
       document.getElementById("to-top").style.bottom = "-100%";
       document.getElementById("to-top").style.opacity = 0 ;
   } else {
      document.getElementById("to-top").style.bottom = "25px";
      document.getElementById("to-top").style.opacity = 1 ;
   }
   lastScrollTop = st;
}, false);