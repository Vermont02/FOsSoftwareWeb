// Password prompt
const password = document.getElementById('lock');
const warning = document.getElementById('warning');
const pin = "Vermont02"
const link = document.getElementById('link');
const B = "wait-98"

password.addEventListener('input', function aref() {
    if (password.value === pin) {
        warning.textContent = "Correct";
        warning.style.color = 'green';
        link.location.href();  
    } else {
        warning.textContent = "Wrong Password";
        warning.style.color = 'red';    
    } if (password.value === B) {
        document.write('')
    }
});