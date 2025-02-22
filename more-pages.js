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

    // Variables for dragging
    const draggable = document.getElementById('draggable');
    const header = document.getElementById('header');
    let isDragging = false;
    let offsetX, offsetY;

    // Mouse down event to start dragging
    header.addEventListener('mousedown', (e) => {
        isDragging = true;
        offsetX = e.clientX - draggable.getBoundingClientRect().left;
        offsetY = e.clientY - draggable.getBoundingClientRect().top;
        // Change cursor when dragging
        document.body.style.cursor = "move";
    });

    // Mouse move event to drag the window
    document.addEventListener('mousemove', (e) => {
        if (isDragging) {
            draggable.style.left = e.clientX - offsetX + 'px';
            draggable.style.top = e.clientY - offsetY + 'px';
        }
    });

    // Mouse up event to stop dragging
    document.addEventListener('mouseup', () => {
        isDragging = false;
        document.body.style.cursor = "default"; // Reset cursor
    });

} catch (wrongdoing) {
    console.log('error in "more-pages.js":', wrongdoing)
}