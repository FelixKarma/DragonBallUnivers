// selectall type sub

function pshhhhhhhhhwshwsh0() {
    
    let pseudoInsc = document.getElementById("pseudoInsc").value
    let mailInsc = document.getElementById("mailInsc").value
    let pswInsc = document.getElementById("pswInsc").value
    let conPswInsc = document.getElementById("conPswInsc").value
    console.log(pseudoCo + " " + pswCo);
    if(pseudoInsc && mailInsc && pswInsc && conPswInsc && pswInsc == conPswInsc){
        document.getElementById("test").type= "button"
        localStorage.setItem("pseudoInsc",pseudoInsc)
        localStorage.setItem("pswInsc",pswInsc)
    
        setTimeout(function() {
            document.location.href = "Inscription-Login.html";
        },2400)
    }
    else if(pswInsc != conPswInsc){
        
    }
}
    
function pshhhhhhhhhwshwsh() {
    let pseudoCo = document.getElementById("pseudoCo").value
    let pswCo = document.getElementById("pswCo").value
    let pseudoInsc = localStorage.getItem("pseudoInsc")
    let pswInsc = localStorage.getItem("pswInsc")
    
   
    console.log(pseudoCo + " " + pswCo);
    if((pseudoCo==pseudoInsc && pswCo==pswInsc) ){
    let track = new Audio("../media/dbz_transfo_sound.mp3")
    track.play()
    localStorage.setItem("login",true);
        setTimeout(function() {
            document.location.href = "accueil.html";
        },2400)
   }
   else if(pswCo!=pswInsc){document.getElementById("wrongpsw").style.display="block"}
}
