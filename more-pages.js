try {
    // Logs when HTML DOM is fully loaded
    document.addEventListener('DOMContentLoaded', function() {
        console.log('HTML DOM Loaded At...');
        console.log(Date());
    });
    
} catch (error) {
    console.log('error in "more-pages.js":', error)
}