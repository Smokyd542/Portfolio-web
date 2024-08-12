const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click",()=>{
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n=>n.addEventListener
("click",()=>{
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))


var tablinks=document.getElementsByClassName("tab-links");
var tabcontents=document.getElementsByClassName("tab-contents");
function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}


window.addEventListener("scroll",function (){
    let nav = document.querySelector(".navbar");
    nav.classList.toggle("sticky", window.scrollY > 0);
})



//fade-in
document.addEventListener('scroll', function() {
            const elements = document.querySelectorAll('.fade-in');
            elements.forEach(el => {
                const rect = el.getBoundingClientRect();
                if (rect.top < window.innerHeight) {
                    el.style.opacity = 1;
                }
            });
        });

//blur-out on scroll
 document.addEventListener('scroll', function() {
            const elements = document.querySelectorAll('.blur-out');
            elements.forEach(el => {
                const rect = el.getBoundingClientRect();
                if (rect.top > window.innerHeight || rect.bottom < 0) {
                    el.style.filter = 'blur(5px)';
                    el.style.opacity = 0;
                } else {
                    el.style.filter = 'blur(0)';
                    el.style.opacity = 1;
                }
            });
        });




