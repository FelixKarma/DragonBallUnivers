// selectall type sub

function pshhhhhhhhhwshwsh0() {
    
    let pseudoInsc = document.getElementById("pseudoInsc").value
    let mailInsc = document.getElementById("mailInsc").value
    let pswInsc = document.getElementById("pswInsc").value
    let conPswInsc = document.getElementById("conPswInsc").value
    console.log(pseudoCo + " " + pswCo);
    if(pseudoInsc && mailInsc && pswInsc && conPswInsc && pswInsc == conPswInsc){
        document.getElementById("test").type= "button"
    
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
    
    console.log(pseudoCo + " " + pswCo);
    if((pseudoCo && pswCo) ){
    let track = new Audio("../media/dbz_transfo_sound.mp3")
    track.play()
    
        setTimeout(function() {
            document.location.href = "accueil.html";
        },2400)
    }
}