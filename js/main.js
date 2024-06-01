let navbar = document.querySelector(`.navbar`)

window.addEventListener("scroll", () =>{
    if(window.scrollY > 100){
        navbar.classList.add("shadow");
    } else{
        navbar.classList.remove("shadow")
    }
}
)