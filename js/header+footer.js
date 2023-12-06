let headHtml = document.getElementsByTagName("head");

let link1 = document.createElement( "link" );
link1.href = "../css/header.css";
link1.type = "text/css";
link1.rel = "stylesheet";

let link2 = document.createElement( "link" );
link2.href = "../css/footer.css";
link2.type = "text/css";
link2.rel = "stylesheet";

headHtml[0].appendChild(link1)
headHtml[0].appendChild(link2)

const header = document.getElementsByTagName("header");
const footer = document.getElementsByTagName("footer");

header[0].innerHTML = `
<div id="header">

    <div id="div1">
        <a href="accueil.html">
            <img src="../media/db-removebg-preview.png" alt="dbz" width="13.5%" />
            <h2 id="titre">DB</h2>
            <h2 id="tire">UNIVERSE</h2>

        </a>
    </div>
    <div>
        <ul id="menuCo">
            <li><a href="">Connexion</a></li>
            <li><a href="">Inscription</a></li>
        </ul>
        <img src="../media/pp.png" alt="profil" width="105" height="105" id="profil" />
    </div>
</div>

`

let nav = document.createElement("nav");
nav.innerHTML = `
        <h2><a class="nav__link" href="séries.html">Séries</a></h2>
        <h2><a class="nav__link" href="films.html">Films</a></h2>
        <h2><a class="nav__link" href="fanArt.html">Fan Art</a></h2>
        <h2><a class="nav__link" href="jeux.html">Jeux Vidéos</a></h2>
        <h2><a class="nav__link" href="Boutique.html">Boutique</a></h2>
`
header[0].after(nav)

footer[0].innerHTML = `
        <h2 class="textefooter"><a href="">FAQ</a>
            <a href="../css/cgu.html">CGU</a>
        </h2>
        <div>
            <a href="https://discord.com/invite/Xuu9WUNGQ6" target="_blank"><img src="../media/footer/🦆 icon _discord_.png"
                    alt="liens" width="55" height="40"></a>
            <a href="https://twitter.com/home" target="_blank"><img src="../media/footer/Vector.png" alt="liens"
                    width="50" height="40"></a>
            <a href="https://www.instagram.com/dgbuniverse/" target="_blank"><img id="insta"
                    src="../media/footer/images-removebg-preview.png" alt="liens" width="50" height="50"></a>
        </div>
`
const profil = document.getElementById("profil");
const menuCo = document.getElementById("menuCo");

profil.addEventListener("click", () => {
    if (menuCo.style.display == "flex") {
        menuCo.style.display = "none"
    } else {
        menuCo.style.display = "flex"
    }
})