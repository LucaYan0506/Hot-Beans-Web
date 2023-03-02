const body = document.querySelector('body');
const nav = document.querySelector('nav');



window.addEventListener('scroll', (e) => {
    if (body.scrollTop == 0){
        nav.className = "home";
    }
    else{
        nav.className = "normal";
    }
    
})