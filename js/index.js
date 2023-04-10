
const hamburger = document.querySelector(".hamburger"); // let's select humberger
const navList = document.querySelector(".nav-list"); // let's select nav list

if (hamburger) {
    hamburger.addEventListener("click",()=>{
        navList.classList.toggle("open");
    })
}



