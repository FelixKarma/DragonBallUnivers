// selectall type sub

function pshhhhhhhhhwshwsh() {
    let pseudoCo = document.getElementById("pseudoCo").value
    let pswCo = document.getElementById("pswCo").value
    
    let pseudoInsc = document.getElementById("pseudoInsc").value
    let mailInsc = document.getElementById("mailInsc").value
    let pswInsc = document.getElementById("pswInsc").value
    let conPswInsc = document.getElementById("conPswInsc").value
    console.log(pseudoCo + " " + pswCo);
    if((pseudoCo && pswCo) || (pseudoInsc && mailInsc && pswInsc && conPswInsc)){
    let track = new Audio("../media/dbz_transfo_sound.mp3")
    track.play()
    
        setTimeout(function() {
            document.location.href = "accueil.html";
        },2400)
    }
}
    