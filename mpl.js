// Debugger 
try {
    // Password prompt
    document.addEventListener('DOMContentLoaded', function() {
        /* Words that are connected to things that do things 
        (this is supposed to be readable aint it?) */
        const password = document.getElementById('lock');
        const warning = document.getElementById('warning');
        const pin = "Vermont02"
        const B = "wait-98"

        // Listens for press of key "Enter" on password field
        password.addEventListener('keydown', function(ent) {
            if (ent.key === "Enter") {
                // If password is correct
                if (password.value === pin) {
                    warning.textContent = "Correct";
                    warning.style.color = 'green';
                    window.location.href = "https://www.fossoftware.kesug.com/more-pages.html";
                    return 0;
                // If not   
                } else {
                    console.log('Cmon keep on typing...\n');
                    warning.textContent = "Invalid Password"
                    warning.style.color = 'red';    
                }
                // We don't talk about this one.
                if (password.value === B) {
                    warning.textContient = "Wait for 98";
                    warning.style.color = 'green';
                    window.location.href = "https://www.fossoftware.kesug.com/term.html";
                } 
                // If nothing is typed
                if (password.value === "") {
                    warning.textContent = "Please enter a password"
                    warning.style.color = 'red'
                }
        
            }

        });
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
    
} catch (error) {
    console.error("Something went wrong 'mpl.js':", error);
}
