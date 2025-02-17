try {
    // Variables go here
    const correctsound = new Audio ('https://github.com/Vermont02/FOsSoftwareWeb/releases/download/ZIPS/Microsoft.Windows.7.Startup.Sound.mp3')

    // Logs when HTML DOM is fully loaded
    document.addEventListener('DOMContentLoaded', function() {
        console.log('HTML DOM Loaded At...');
        console.log(Date());
        correctsound.play();
    });

    function windowsize() {
        const min = 600;
        if (window.innerWidth < min) {
            alert('The window is to small. Some content may not be displayed correctly. The window will now be resized.');
            window.resizeTo(1920, 1080)
        }
    }

    window.addEventListener('resize', windowsize);

    windowsize();

} catch (wrongdoing) {
    console.log('error in "more-pages.js":', wrongdoing)
}