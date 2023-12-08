var listAudio1 = [
    {
        name: "Makafushigi Adventure",
        desc: "Opening",
        file: "https://drive.google.com/uc?id=1wN30ZMBLBWx-vkEDZovGowUWUYkzi2Vu",
        duration: "01:45"
    },
    {
        name: "Romantic Ageru Yo",
        desc: "Ending",
        file: "https://drive.google.com/uc?id=1F7rJVm2BL_xCLf80AcB5bjeLNZlXHEjL",
        duration: "01:37"
    },
    {
        name: "World Martial Arts Tournament",
        desc: "OST",
        file: "https://drive.google.com/uc?id=1VpoS-YXs1R6kupdYNzHUC-bfRvG2cj8z",
        duration: "01:16"
    },
    {
        name: "Mezase Tenka-ichi",
        desc: "OST",
        file: "https://drive.google.com/uc?id=1rxg99w-0NRyZZSCcgSzvOudt-4jdFsnh",
        duration: "03:43"
    }
]
var listAudio2 = [
    {
        name: "Cha-la Head-Cha-La Inshallah",
        desc: "Opening",
        file: "https://drive.google.com/uc?id=1Yn9lhOy7gIBD8iV2z6UGilhi91SqBCxG",
        duration: "03:19"
    },
    {
        name: "We Gotta Power",
        desc: "Opening",
        file: "https://drive.google.com/uc?id=1_ZrTXTIFHDVp8mbD7MNTEnvWmQ_LR7_I",
        duration: "01:47"
    },
    {
        name: "Detekoi Tobikiri ZENKAI Pawā",
        desc: "Ending",
        file: "https://drive.google.com/uc?id=1_ach4W5-w07F_uz-i-jxNVZdwcJdMMTd",
        duration: "01:37"
    },
    {
        name: "We Were Angels",
        desc: "Ending",
        file: "https://drive.google.com/uc?id=13JIMt4gG5WfqYroh-PLnlLHUlvb5oroX",
        duration: "01:38"
    },
    {
        name: "GOHAN SSJ2 THEME",
        desc: "OST",
        file: "https://drive.google.com/uc?id=1Stmwvb8LaPoX5ZH7ZkkL79KgG9oaERuM",
        duration: "04:55"
    },
    {
        name: "KYOUFU NO GINYU TOKUSENTAI",
        desc: "OST",
        file: "https://drive.google.com/uc?id=1CK6f23aRQrXHxQ2HY-UXzfjaoIP1x6xn",
        duration: "01:30"
    }
]
var listAudio3 = [
    {
        name: "Dan Dan Kokoro Hikareteku",
        desc: "Opening",
        file: "https://drive.google.com/uc?id=1QE14poxgwSKaE1CzauFHa2gKFdDANJTk",
        duration: "01:50"
    },
    {
        name: "Don't You See!",
        desc: "Ending",
        file: "https://drive.google.com/uc?id=1JvB1cS_m613O-jJsdbALOsnVf9T35sTe",
        duration: "01:36"
    },
    {
        name: "Genkidama Soundtrack",
        desc: "OST",
        file: "https://drive.google.com/uc?id=1la_Q4mtQ7F3nrUI_tAdDGKF-zG2pzNEC",
        duration: "03:01"
    },
    {
        name: "SSJ4 Soundtrack",
        desc: "OST",
        file: "https://drive.google.com/uc?id=1FUq2u7xNBJwllu_C94Wl9qvQSZab0-gG",
        duration: "02:53"
    }
]
var listAudio4 = [
    {
        name: "Chōzetsu ☆ Dynamic!",
        desc: "Opening",
        file: "https://drive.google.com/uc?id=1FOkDWP4YkXm4GC1msw-EFD0T1lGksYz4",
        duration: "01:24"
    },
    {
        name: "Genkai Toppa × Survivor",
        desc: "OPENING",
        file: "https://drive.google.com/uc?id=1RaMueGwIba8dBiE06lKNHu5C3QwHcEWL",
        duration: "01:25"
    },
    {
        name: "Starring Star",
        desc: "Ending",
        file: "https://drive.google.com/uc?id=1h8rGjCnBtIhhlZULM9pNjCDF9kQ7EbCs",
        duration: "01:00"
    },
    {
        name: "70cm",
        desc: "Ending",
        file: "https://drive.google.com/uc?id=1dmSm98mmNkzZvnIT5hWb9pk6s294roTX",
        duration: "01:01"   
    },
    {
        name: "Black Goku Theme",
        desc: "OST",
        file: "https://drive.google.com/uc?id=1Iqf0CJSp8g0-1AVZvg2623nS3Y-tUYo3",
        duration: "03:25"   
    },
    {
        name: "Ultra Instinct Theme",
        desc: "OST",
        file: "https://drive.google.com/uc?id=18jbfk-QeEyLjJqD2wWNxtfZM5AwJyxru",
        duration: "02:47"   
    }
]

let playListItems;
var indexAudio = 0;
let listAudio;
listAudioChoose("listAudio")

function createTrackItem(index, name, desc, duration) {
    var trackItem = document.createElement('div');
    trackItem.setAttribute("class", "playlist-track-ctn");
    trackItem.setAttribute("id", "ptc-" + index);
    trackItem.setAttribute("data-index", index);
    document.querySelector(".playlist-ctn").appendChild(trackItem);
    var trackInfoItem = document.createElement('div');
    trackInfoItem.setAttribute("class", "playlist-info-track");
    trackInfoItem.innerHTML = name;
    trackInfoItem.setAttribute("id", "p-img-" + index);
    document.querySelector("#ptc-" + index).appendChild(trackInfoItem);
    var trackDescItem = document.createElement('span');
    trackDescItem.innerHTML = desc;
    document.querySelector("#p-img-" + index).appendChild(trackDescItem);
    var trackDurationItem = document.createElement('div');
    trackDurationItem.setAttribute("class", "playlist-duration");
    trackDurationItem.innerHTML = duration
    document.querySelector("#ptc-" + index).appendChild(trackDurationItem);
    document.querySelector("#ptc-0").classList.add("active-track");
}

function listAudioChoose(list) {
    let tracksActive = document.getElementsByClassName("orange");
    switch (list) {
        case "listAudio":
            listAudio=listAudio1;
            tracksActive[0].classList.add("trackActive");
            tracksActive[1].classList.remove("trackActive");
            tracksActive[2].classList.remove("trackActive");
            tracksActive[3].classList.remove("trackActive");
            break;
        case "listAudio2":
            listAudio=listAudio2;
            tracksActive[0].classList.remove("trackActive");
            tracksActive[1].classList.add("trackActive");
            tracksActive[2].classList.remove("trackActive");
            tracksActive[3].classList.remove("trackActive");
            break;
        case "listAudio3":
            listAudio=listAudio3;
            tracksActive[0].classList.remove("trackActive");
            tracksActive[1].classList.remove("trackActive");
            tracksActive[2].classList.add("trackActive");
            tracksActive[3].classList.remove("trackActive");
            break;
        case "listAudio4":
            listAudio=listAudio4;
            tracksActive[0].classList.remove("trackActive");
            tracksActive[1].classList.remove("trackActive");
            tracksActive[2].classList.remove("trackActive");
            tracksActive[3].classList.add("trackActive");
            break;
    
        default:
            listAudio=listAudio1;
            tracksActive[0].classList.add("trackActive");
            tracksActive[1].classList.remove("trackActive");
            tracksActive[2].classList.remove("trackActive");
            tracksActive[3].classList.remove("trackActive");
            break;
    }

    document.querySelector(".playlist-ctn").innerHTML= "";
    for (var i = 0; i < listAudio.length; i++) {
        createTrackItem(i, listAudio[i].name, listAudio[i].desc, listAudio[i].duration);
    }
    if (indexAudio != 0) {
        indexAudio = 0;
    } 
    next()
    previous()
    playListItems = document.querySelectorAll(".playlist-track-ctn");
    pLI()
}


function loadNewTrack(index) {
    var player = document.querySelector('#source-audio')
    player.src = listAudio[index].file
    document.querySelector('.player-title').innerHTML = listAudio[index].name
    var descTitle = document.createElement('span');
    descTitle.innerHTML = listAudio[index].desc;
    document.querySelector('.player-title').appendChild(descTitle);
    this.currentAudio = document.getElementById("myAudio");
    this.currentAudio.load()
    this.toggleAudio()
    this.updateStylePlaylist(this.indexAudio, index)
    this.indexAudio = index;
}

function pLI() {
    
    for (let i = 0; i < playListItems.length; i++) {
        playListItems[i].addEventListener("click", getClickedElement.bind(this));
    }
}
function getClickedElement(event) {
    for (let i = 0; i < playListItems.length; i++) {
        if (playListItems[i] == event.target) {
            var clickedIndex = event.target.getAttribute("data-index")
            if (clickedIndex == this.indexAudio) {
                this.toggleAudio()
            } else {
                loadNewTrack(clickedIndex);
            }
        }
    }
}
document.querySelector('#source-audio').src = listAudio[indexAudio].file
document.querySelector('.player-title').innerHTML = listAudio[indexAudio].name
var descTitle = document.createElement('span');
descTitle.innerHTML = listAudio[indexAudio].desc;
document.querySelector('.player-title').appendChild(descTitle);
var currentAudio = document.getElementById("myAudio");
currentAudio.load()
currentAudio.onloadedmetadata = function () {
    document.getElementsByClassName('duration')[0].innerHTML = this.getMinutes(this.currentAudio.duration)
}.bind(this);
var interval1;
function toggleAudio() {
    if (this.currentAudio.paused) {
        document.querySelector('#icon-play').style.display = 'none';
        document.querySelector('#icon-pause').style.display = 'block';
        document.querySelector('#ptc-' + this.indexAudio).classList.add("active-track");
        this.currentAudio.play();
    } else {
        document.querySelector('#icon-play').style.display = 'block';
        document.querySelector('#icon-pause').style.display = 'none';
        this.currentAudio.pause();
    }
}
function pauseAudio() {
    this.currentAudio.pause();
    clearInterval(interval1);
}
var timer = document.getElementsByClassName('timer')[0]
var barProgress = document.getElementById("myBar");
var width = 0;
function onTimeUpdate() {
    var t = this.currentAudio.currentTime
    timer.innerHTML = this.getMinutes(t);
    this.setBarProgress();
    if ((this.currentAudio.ended) && (this.indexAudio < listAudio.length - 1)) {
        var index = parseInt(this.indexAudio) + 1
        this.loadNewTrack(index)
    }
}
function setBarProgress() {
    var progress = (this.currentAudio.currentTime / this.currentAudio.duration) * 100;
    document.getElementById("myBar").style.width = progress + "%";
}
function getMinutes(t) {
    var min = parseInt(parseInt(t) / 60);
    var sec = parseInt(t % 60);
    if (sec < 10) {
        sec = "0" + sec
    }
    if (min < 10) {
        min = "0" + min
    }
    return min + ":" + sec
}
var progressbar = document.querySelector('#myProgress')
progressbar.addEventListener("click", seek.bind(this));
function seek(event) {
    var percent = event.offsetX / progressbar.offsetWidth;
    this.currentAudio.currentTime = percent * this.currentAudio.duration;
    barProgress.style.width = percent * 100 + "%";
}
function forward() {
    this.currentAudio.currentTime = this.currentAudio.currentTime + 5
    this.setBarProgress();
}
function rewind() {
    this.currentAudio.currentTime = this.currentAudio.currentTime - 5
    this.setBarProgress();
}
function next() {
    if (this.indexAudio < listAudio.length - 1) {
        var oldIndex = this.indexAudio
        this.indexAudio++;
        updateStylePlaylist(oldIndex, this.indexAudio)
        this.loadNewTrack(this.indexAudio);
    }
}
function previous() {
    if (this.indexAudio > 0) {
        var oldIndex = this.indexAudio
        this.indexAudio--;
        updateStylePlaylist(oldIndex, this.indexAudio)
        this.loadNewTrack(this.indexAudio);
    }
}
function updateStylePlaylist(oldIndex, newIndex) {
    document.querySelector('#ptc-' + oldIndex).classList.remove("active-track");
    document.querySelector('#ptc-' + newIndex).classList.add("active-track");
}
function toggleMute() {
    var btnMute = document.querySelector('#toggleMute');
    var volUp = document.querySelector('#icon-vol-up');
    var volMute = document.querySelector('#icon-vol-mute');
    if (this.currentAudio.muted == false) {
        this.currentAudio.muted = true
        volUp.style.display = "none"
        volMute.style.display = "block"
    } else {
        this.currentAudio.muted = false
        volMute.style.display = "none"
        volUp.style.display = "block"
    }
}