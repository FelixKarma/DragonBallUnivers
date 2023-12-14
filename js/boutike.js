function changeimage(element) {
    document.querySelector("#imgfigurine").src = "../media/statue" + element.value + ".jpg"
    switch (element.value) {
        case "Goku":
            document.querySelector("#figurine").href = "https://www.amazon.fr/Banpresto-Dragon-Ball-Figurine-History/dp/B0974Z2V8G/ref=sr_1_57?__mk_fr_FR=ÅMÅŽÕÑ&crid=HO4N6E36VUNK&keywords=figurine+goku&qid=1702379646&s=toys&sprefix=figurine+goku%2Ctoys%2C89&sr=1-57"

            break;
        case "Trunks":
            document.querySelector("#figurine").href = "https://www.amazon.fr/Banpresto-Figurine-Dragon-Saiyan-4983164880779/dp/B0BQ8644X3/ref=sr_1_6?__mk_fr_FR=ÅMÅŽÕÑ&crid=EQWQ5GS6627H&keywords=figurine+trunks&qid=1702379880&s=toys&sprefix=figurine+trunks%2Ctoys%2C91&sr=1-6"

            break

        case "Goten":
            document.querySelector("#figurine").href = "https://www.amazon.fr/Figurine-Action-Collection-Cadeaux-danniversaire/dp/B0BDM7YSND/ref=sr_1_2?__mk_fr_FR=ÅMÅŽÕÑ&crid=31MEIWVD0YQIS&keywords=figurine%2Bgoten&qid=1702379853&s=toys&sprefix=figurine%2Bgoten%2Ctoys%2C72&sr=1-2&th=1"

            break;

        case "Gohan":
            document.querySelector("#figurine").href = "https://www.amazon.fr/Banpresto-Figurine-Dragon-Gohan-4983164880786/dp/B0BQ7SWWMM/ref=sr_1_6_mod_primary_new?__mk_fr_FR=ÅMÅŽÕÑ&crid=13UENUJCHIEDP&keywords=figurine+gohan&qid=1702379799&s=toys&sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D&sprefix=figurine+gohan%2Ctoys%2C69&sr=1-6"

            break;

        case "Vegeta":
            document.querySelector("#figurine").href = "https://www.amazon.fr/Banpresto-Dragon-Super-Vegeta-Statue/dp/B07WGFR9JD/ref=sr_1_7?__mk_fr_FR=ÅMÅŽÕÑ&crid=LPQQZKNTYDZ9&keywords=figurine+vegeta&qid=1702379729&s=toys&sprefix=figurine+veget%2Ctoys%2C85&sr=1-7"

            break;

        default:
            document.querySelector("#figurine").href = "https://www.amazon.fr/Banpresto-Dragon-Ball-Figurine-History/dp/B0974Z2V8G/ref=sr_1_57?__mk_fr_FR=ÅMÅŽÕÑ&crid=HO4N6E36VUNK&keywords=figurine+goku&qid=1702379646&s=toys&sprefix=figurine+goku%2Ctoys%2C89&sr=1-57"
            break;
    }
}







// CARTES
function changeimage1(element) {
    document.querySelector("#imgCartes").src = "../media/carte" + element.value + ".webp"
    switch (element.value) {
        case "Goku":
            document.querySelector("#Carte").href = "https://www.dbscards.fr/cards/bt23-140-gdr-son-goku-ultra-instinct-etat-des-dieux"

            break;
        case "Trunks":
            document.querySelector("#Carte").href = "https://www.dbscards.fr/cards/bt23-081-sr-trunks-ss2-chemin-vers-le-futur"

            break

        case "Goten":
            document.querySelector("#Carte").href = "https://www.dbscards.fr/cards/bt22-069-c-son-goten-ss-montee-en-puissance"

            break;

        case "Gohan":
            document.querySelector("#Carte").href = "https://www.dbscards.fr/cards/bt13-036-sr-son-gohan-ss2-frappe-epoustouflante"

            break;

        case "Vegeta":
            document.querySelector("#Carte").href = "https://www.dbscards.fr/cards/bt21-100-uc-vegeta-ssb-puissance-divine"

            break;

        default:
            document.querySelector("#Carte").href = "https://www.dbscards.fr/cards/bt23-140-gdr-son-goku-ultra-instinct-etat-des-dieux"
            break;
    }
}




// MANGAS
function changeimage2(element) {
    document.querySelector("#imgmangas").src = "../media/manga" + element.value + ".jpg"
    switch (element.value) {
        case "Dragon Ball":
            document.querySelector("#manga").href = "https://www.amazon.fr/s?k=manga+dragon+ball&__mk_fr_FR=ÅMÅŽÕÑ&crid=2D5CPFX10PI6Y&sprefix=manga+dragon+ball+%2Caps%2C272&ref=nb_sb_noss_2"

            break;
        case "Dragon Ball Z":
            document.querySelector("#manga").href = "https://www.amazon.fr/s?k=manga+dragon+ball+z&crid=1MYZ7Q8MHF9F3&sprefix=manga+dragon+ball%2Caps%2C78&ref=nb_sb_ss_ts-doa-p_1_17"

            break

        case "Dragon Ball GT":
            document.querySelector("#manga").href = "https://www.amazon.fr/s?k=manga+dragon+ball+GT&__mk_fr_FR=ÅMÅŽÕÑ&crid=U9YZN7V7UVFH&sprefix=manga+dragon+ball+gt%2Caps%2C93&ref=nb_sb_noss_1"

            break;

        case "Dragon Ball Super":
            document.querySelector("#manga").href = "https://www.amazon.fr/s?k=manga+dragon+ball+super&__mk_fr_FR=ÅMÅŽÕÑ&crid=2BATCHEQDW930&sprefix=manga+dragon+ball+super%2Caps%2C102&ref=nb_sb_noss_1"

            break;

        default:
            document.querySelector("#manga").href = "https://www.amazon.fr/s?k=manga+dragon+ball&__mk_fr_FR=ÅMÅŽÕÑ&crid=2D5CPFX10PI6Y&sprefix=manga+dragon+ball+%2Caps%2C272&ref=nb_sb_noss_2"
            break;
    }
}




// VETEMENTS
function changeimage3(element) {
    document.querySelector("#imgvetements").src = "../media/vetement" + element.value + ".jpg"
    switch (element.value) {
        case "Goku":
            document.querySelector("#vetement").href = "https://www.amazon.fr/FREEGUN-Boxer-unitaire-Dragon-Multicolore/dp/B0BS3ZYRRR/ref=sr_1_13?__mk_fr_FR=ÅMÅŽÕÑ&crid=1XWRUIEWW92F8&keywords=calecon%2Bgoku&qid=1702388788&sprefix=calecon%2Bgoku%2Caps%2C83&sr=8-13&th=1"

            break;
        case "Trunks":
            document.querySelector("#vetement").href = "https://www.amazon.fr/ABYstyle-Dragon-Tshirt-Trunks-Homme/dp/B01MTNGXKS/ref=sr_1_4?__mk_fr_FR=ÅMÅŽÕÑ&crid=2FF4FHA8MHBNL&keywords=tee%2Bshirt%2Bdbz%2Btrunks&qid=1702389656&sprefix=tee%2Bshirt%2Bdbz%2Btrunks%2Caps%2C69&sr=8-4&th=1"

            break

        case "Goten":
            document.querySelector("#vetement").href = "https://www.amazon.fr/Baby-Geek-Saiyan-père-Fils/dp/B07JMGMYS2/ref=sr_1_2?__mk_fr_FR=ÅMÅŽÕÑ&crid=2KYVLRED17J1E&keywords=vetement%2Bdbz%2Bgoten&qid=1702389591&sprefix=vetement%2Bdbz%2Bgoten%2Caps%2C57&sr=8-2&th=1"

            break;

        case "Gohan":
            document.querySelector("#vetement").href = "https://www.amazon.fr/MOTOFUTURE-Chaussons-antidérapants-lextérieur-Saiyan-Son/dp/B0BRC298KJ/ref=sr_1_5?__mk_fr_FR=ÅMÅŽÕÑ&crid=OC6QCUGR2FA5&keywords=chaussures%2Bgohan&qid=1702389445&sprefix=chaussures%2Bgohan%2Caps%2C72&sr=8-5&th=1"

            break;

        case "Vegeta":
            document.querySelector("#vetement").href = "https://www.amazon.fr/Majin-Goku-Dragon-Casquette-Baseball/dp/B09T3K5K1X/ref=sr_1_12?__mk_fr_FR=ÅMÅŽÕÑ&crid=DF39HCHNXZ6K&keywords=casquette+vegeta&qid=1702389387&sprefix=casuette+vegeta%2Caps%2C74&sr=8-12"

            break;

        default:
            document.querySelector("#vetement").href = "https://www.amazon.fr/FREEGUN-Boxer-unitaire-Dragon-Multicolore/dp/B0BS3ZYRRR/ref=sr_1_13?__mk_fr_FR=ÅMÅŽÕÑ&crid=1XWRUIEWW92F8&keywords=calecon%2Bgoku&qid=1702388788&sprefix=calecon%2Bgoku%2Caps%2C83&sr=8-13&th=1"
            break;
    }
}




// GOODIES
function changeimage4(element) {
    document.querySelector("#imggoodies").src = "../media/goodie" + element.value + ".jpg"
    switch (element.value) {
        case "Goku":
            document.querySelector("#goodie").href = "https://www.amazon.fr/FaceToWind-Enfants-Lumière-Télécommande-Tactile/dp/B07JC38MRZ/ref=sr_1_14?__mk_fr_FR=ÅMÅŽÕÑ&crid=216XJLN0Q9MXC&keywords=goodies+goku&qid=1702389921&sprefix=goodies+goku%2Caps%2C92&sr=8-14"

            break;
        case "Trunks":
            document.querySelector("#goodie").href = "https://www.amazon.fr/Funko-59523-Pop-Keychain-Dragon/dp/B097YQP1ZW/ref=sr_1_6?__mk_fr_FR=ÅMÅŽÕÑ&crid=1AM1UG1IGA1AO&keywords=goodies+dbz+trunks&qid=1702390690&sprefix=goodies+dbz+trunks%2Caps%2C77&sr=8-6"

            break

        case "Goten":
            document.querySelector("#goodie").href = "https://www.amazon.fr/Funko-Figurines-Pop-Vinyl-Collectible/dp/B07MZQ3CZX/ref=sr_1_4?__mk_fr_FR=ÅMÅŽÕÑ&crid=38L5OEOQZACMO&keywords=goodies+dbz+goten&qid=1702390586&sprefix=goodies+dbz+goten%2Caps%2C67&sr=8-4"

            break;

        case "Gohan":
            document.querySelector("#goodie").href = "https://www.amazon.fr/ABYstyle-Dragon-Ball-Acryl-Gohan/dp/B08G1HX5FN/ref=sr_1_27_mod_primary_new?__mk_fr_FR=ÅMÅŽÕÑ&crid=AQYEM2I1G2LX&keywords=goodies+dbz+gohan&qid=1702390196&sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D&sprefix=goodies+dbz+gohan%2Caps%2C60&sr=8-27"

            break;

        case "Vegeta":
            document.querySelector("#goodie").href = "https://www.amazon.fr/GB-Eye-Vegeta-Dragon-Multicolore/dp/B015ST2276/ref=sr_1_12?__mk_fr_FR=ÅMÅŽÕÑ&crid=3TYM7ZYHY6GTM&keywords=goodies+dbz+vegeta&qid=1702390135&sprefix=goodies+dbz+vegeta%2Caps%2C67&sr=8-12"

            break;

        default:
            document.querySelector("#goodie").href = "https://www.amazon.fr/FaceToWind-Enfants-Lumière-Télécommande-Tactile/dp/B07JC38MRZ/ref=sr_1_14?__mk_fr_FR=ÅMÅŽÕÑ&crid=216XJLN0Q9MXC&keywords=goodies+goku&qid=1702389921&sprefix=goodies+goku%2Caps%2C92&sr=8-14"
            break;
    }
}




// POSTERS
function changeimage5(element) {
    document.querySelector("#imgposters").src = "../media/poster" + element.value + ".jpg"
    switch (element.value) {
        case "Goku":
            document.querySelector("#poster").href = "https://printler.com/fr/affiche/147811/?size=21x30&gclid=CjwKCAiApuCrBhAuEiwA8VJ6Jk0yJCwORzQncy6JTrJ_MZkopW-mjEOfUC7FOQL4U5gTMmjkSNcAnRoC7IoQAvD_BwE"

            break;

        case "Goku Et Vegeta":
            document.querySelector("#poster").href = "https://printler.com/fr/affiche/126141/?size=21x30&gclid=CjwKCAiApuCrBhAuEiwA8VJ6JmqRVfoBtdKlh7AdNpG1wTSQB3OM62X7yr5QJfntthvb62GkRyKTOhoCyN0QAvD_BwE"

            break;

        case "Trunks":
            document.querySelector("#poster").href = "https://printler.com/fr/affiche/135007/"

            break

        case "Goten":
            document.querySelector("#poster").href = "https://printler.com/fr/affiche/154550/"

            break;

        case "Gohan":
            document.querySelector("#poster").href = "https://printler.com/fr/affiche/138290/"

            break;

        case "Vegeta":
            document.querySelector("#poster").href = "https://printler.com/fr/affiche/127574/?size=21x30&gclid=CjwKCAiApuCrBhAuEiwA8VJ6Jl0xCRtF6cpfAKiAsuh_4fjjnGIoh3wpWx98E3zNmhugqztC1sF0hRoC1V0QAvD_BwE"

            break;

        default:
            document.querySelector("#poster").href = "https://printler.com/fr/affiche/147811/?size=21x30&gclid=CjwKCAiApuCrBhAuEiwA8VJ6Jk0yJCwORzQncy6JTrJ_MZkopW-mjEOfUC7FOQL4U5gTMmjkSNcAnRoC7IoQAvD_BwE"
            break;
    }
}

//Bouton Mute

function volume(){
    let volume = document.getElementById("volume")
    let myAudio = document.getElementById("myAudio")
    console.log(volume.src);
    // let track = new Audio("../media/Télé shopping theme - la version longue.mp3")
    if(volume.src.includes("volume_mute.png")){
        document.querySelector("#volume").src = "../media/volume_play.png"
        myAudio.play()
    } else{
        document.querySelector("#volume").src = "../media/volume_mute.png"
        myAudio.pause();
    }                            
}