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

} catch (wrongdoing) {
    console.log('error in "more-pages.js":', wrongdoing)
}