/* Usar www.spritecow.com para facilitar trabajo con sprites */

var sounds = {
    punch: new Audio('http://zeq2.com/SVN/Media/Sounds/Old/melee%206.wav'),
    hit: new Audio('http://zeq2.com/SVN/Media/Sounds/Goku/kishot3.ogg'),
    charge: new Audio('https://manzdev.github.io/cursos-assets/js/charging.mp3'),
    music: new Audio('http://www.finalsayan.com/media/cdmusicali/BGMCDCollection/Dragon%20Ball%20Z%20Complete%20BGM%20Collection/CD1/01%20-%20CHA-LA%20HEAD-CHA-LA%20(TV%20Size).mp3'),
    scream: new Audio('https://manzdev.github.io/cursos-assets/js/goku-transform.mp3'),
    boost: new Audio('https://manzdev.github.io/cursos-assets/js/boost.mp3')
  }
  sounds.punch.loop = true;
  sounds.hit.loop = true;
  // fix gapless HTML5 bug (~= sounds.charge.loop = true )
  sounds.charge.ontimeupdate = function(){
    var buffer = .53
    if(this.currentTime > this.duration - buffer)
      this.currentTime = 0
  }
  sounds.music.volume = 0.2;
  sounds.music.play();
  
  var goku = document.querySelector('.goku');
  
  var charging = null;
  
  var charge = function() {
    var power = document.querySelector('#power');
    if (charging) {
      power.value += 15;
      charging = setTimeout(charge, 300);
    }
    if ((power.value > 99) && (!goku.classList.contains('saiyan'))) {
      goku.classList.add('fullenergy');
      sounds.scream.play();
      setTimeout(function() {
        sounds.boost.play();
        goku.classList.remove('fullenergy')
        goku.classList.add('saiyan')
      }, 2000);
    }
  }
  
  // Initial coords
  goku.style.left = 230 + 'px'
  goku.style.top = 50 + 'px'
  
  // Support to old Chrome/Chromium
  function toNumber(n) {
    return parseInt((n == 'auto'? 0 : n));
  }
  
  // Devuelve la posición de Goku (objeto con top y left). Usamos una función del navegador para
  // devolverlo con valor numérico y simplificar el trabajo con los valores.
  function getGokuPos() {
    var obj = {
      left: toNumber(getComputedStyle(goku).left),
      top: toNumber(getComputedStyle(goku).top)
    }
    return obj;
  }
  
  // Escuchamos los eventos de teclado (añadir)
  window.addEventListener('keydown', function(e) {
    
    if (e.keyCode == 37) {
      goku.classList.add('goLeft')
      if (getGokuPos().left > 0 )
        goku.style.left = getGokuPos().left - 10 + 'px';    
    }
    else if (e.keyCode == 39) {
      goku.classList.add('goRight')
      if (getGokuPos().left < 950)
        goku.style.left = getGokuPos().left + 10 + 'px';
    }
    else if (e.keyCode == 32) {
      goku.classList.add('energy');
      e.preventDefault(); // avoid default space action (scroll page)
      sounds.charge.play();
      if (!charging)
        charging = setTimeout(charge, 2000);
    }
    else if (e.keyCode == 17) {
      goku.classList.add('punch')
      sounds.punch.play();
      sounds.hit.play();
    }
    
  });
  
  // Escuchamos los eventos de teclado (eliminar, al soltar)
  window.addEventListener('keyup', function(e) {
    
    if (e.keyCode == 37)
      goku.classList.remove('goLeft')
    else if (e.keyCode == 39)
      goku.classList.remove('goRight')
    else if (e.keyCode == 32) {
      goku.classList.remove('energy')
      sounds.charge.pause();
      clearTimeout(charging);
      charging = null;
    }
    else if (e.keyCode == 17) {
      goku.classList.remove('punch')  
      sounds.punch.pause()
      sounds.hit.pause()
    }
    
  });