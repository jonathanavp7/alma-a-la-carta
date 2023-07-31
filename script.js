var nav = document.querySelector("nav");

window.addEventListener("scroll", function(){
    if(window.pageYOffset > 100){
        nav.classList.add("bg-purple-2", "shadow");
    } else {
        nav.classList.remove("bg-purple-2", "shadow");
    }
});