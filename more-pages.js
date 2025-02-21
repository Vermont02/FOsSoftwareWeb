try {
    // Variables go here
    const correctsound = new Audio ('https://github.com/Vermont02/FOsSoftwareWeb/releases/download/ZIPS/Microsoft.Windows.7.Startup.Sound.mp3')

    // Logs when HTML DOM is fully loaded
    document.addEventListener('DOMContentLoaded', function() {
        console.log('HTML DOM Loaded At...');
        console.log(Date());
        correctsound.play();
    });

    function mobileDetect() {
        return /iPhone|iPad|Mobi|Android/i.test(navigator.userAgent);
    }

    function unsup() {
        if (mobileDetect()) {
            alert('This site is unsupported on your device.');
        } 
        unsup();
    }
    
    unsup();

dragElement(document.getElementById("wind"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
  
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {

    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.e;
    e.preventDefault();

    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
 
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.e;
    e.preventDefault();

    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;

    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {

    document.onmouseup = null;
    document.onmousemove = null;
  }
}

} catch (wrongdoing) {
    console.log('error in "more-pages.js":', wrongdoing)
}