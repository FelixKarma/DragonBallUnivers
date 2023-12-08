let headHtml = document.getElementsByTagName("head");

let link1 = document.createElement( "link" );
link1.href = "../css/header.css";
link1.type = "text/css";
link1.rel = "stylesheet";

let link2 = document.createElement( "link" );
link2.href = "../css/footer.css";
link2.type = "text/css";
link2.rel = "stylesheet";

let link3 = document.createElement( "link" );
link3.href = "https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css";
link3.crossOrigin = "anonymous";
link3.rel = "stylesheet";
link3.integrity = "sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN";

headHtml[0].appendChild(link1)
headHtml[0].appendChild(link2)
headHtml[0].appendChild(link3)

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
            <li><a href="Inscription-Login.html">Connexion</a></li>
            <li><a href="Inscription-Login.html">Inscription</a></li>
        </ul>
        <img src="../media/pp.png" alt="profil" width="105" height="105" id="profil" />
    </div>
</div>

`

let nav = document.createElement("nav");
nav.innerHTML = `
        <h2><a class="nav__link" href="serie.html">Séries</a></h2>
        <h2><a class="nav__link" href="films.html">Films</a></h2>
        <h2><a class="nav__link" href="manga.html">Manga</a></h2>
        <h2><a class="nav__link" href="jeux.html">Jeux Vidal</a></h2>
        <h2><a class="nav__link" href="fanArt.html">Fan Art</a></h2>
        <h2><a class="nav__link" href="OST.html">Soundtracks</a></h2>
        <h2><a class="nav__link" href="Boutique.html">Boutique</a></h2>
`
header[0].after(nav)

footer[0].innerHTML = `
        <h2 class="textefooter"><a href="../html/FAQ.html">FAQ</a>
            <a href="../html/cgu.html">CGU</a>
        </h2>
        <div>
            <a href="https://discord.com/invite/Xuu9WUNGQ6" target="_blank"><img src="../media/footer/🦆 icon _discord_.png"
                    alt="liens" width="55" height="40"></a>
            <a href="https://twitter.com/home" target="_blank"><img src="../media/footer/Vector.png" alt="liens"
                    width="50" height="40"></a>
            <a href="https://www.instagram.com/dgbuniverse/" target="_blank"><img id="insta"
                    src="../media/footer/images-removebg-preview.png" alt="liens" width="50" height="50"></a>
        </div>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
            integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL"
            crossorigin="anonymous"></script>
`

let linkBJS = document.createElement("script")
linkBJS.src = "https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
linkBJS.integrity = "sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL"
linkBJS.crossOrigin = "anonymous"
footer[0].after(linkBJS)


const profil = document.getElementById("profil");
const menuCo = document.getElementById("menuCo");

profil.addEventListener("click", () => {
    if (menuCo.style.display == "flex") {
        menuCo.style.display = "none"
    } else {
        menuCo.style.display = "flex"
    }
})