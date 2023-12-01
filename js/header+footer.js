const profil = document.getElementById("profil");
const menuCo = document.getElementById("menuCo");

profil.addEventListener("click", ()=>{
    if (menuCo.style.display =="flex") {
        menuCo.style.display ="none"
    } else {
        menuCo.style.display ="flex"
    }
})