// Debugger 
try {
    // Password prompt
    document.addEventListener('DOMContentLoaded', function() {
        /* Words that are connected to things that do things 
        (this is supposed to be readable aint it?) */
        const password = document.getElementById('lock');
        const warning = document.getElementById('warning');
        const pin = "Vermont02"
        const link = document.getElementById('link');
        const B = "wait-98"

        // Listens for press of key "Enter" on password field
        password.addEventListener('keydown', function(ent) {
            if (ent.key === "Enter") {
                // If password is correct
                if (password.value === pin) {
                    warning.textContent = "Correct";
                    warning.style.color = 'green';
                    link.href = "";
                // If not   
                } else {
                    console.log('Cmon keep on typing...\n');
                    warning.style.color = 'red';    
                } 
                // We don't talk about this
                if (password.value === B) {
                    console.log('coming soon...')
                } 
    
            }

        });
    });
} catch (error) {
    console.error("Something went wrong 'mpl.js':", error);
}