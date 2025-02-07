function sys() {
    // executes alert window
    document.getElementById("jeff").innerHTML = alert('Your Download Has Started')
}
function watch() {
    // Changes background 
    document.body.style.backgroundImage = "url('https://github.com/Vermont02/FOsSoftwareWeb/releases/download/ZIPS/jeff.webp')";
    // Changes text on line 1
    document.getElementById("commes").innerHTML = "YOUR COMPUTER HAS BEEN COMPROMISED";
    document.getElementById("commes").style.color = "Red";
    // Changes text on line 2
    document.getElementById("commesq").innerHTML = "YOUR COMPUTER HAS BEEN COMPROMISED";
    document.getElementById("commesq").style.color = "Red";
    // Changes text on button 1
    document.getElementById("commes1").innerHTML = "YOUR COMPUTER HAS BEEN COMPROMISED";
    document.getElementById("commes1").style.color = "Red";
    // Changes text on button 2
    document.getElementById("commes2").innerHTML = "YOUR COMPUTER HAS BEEN COMPROMISED";
    document.getElementById("commes2").style.color = "Red";
    // Changes text on button 3
    document.getElementById("commes3").innerHTML = "YOUR COMPUTER HAS BEEN COMPROMISED";
    document.getElementById("commes3").style.color = "Red";
    // Changes text on button 4
    document.getElementById("commes4").innerHTML = "YOUR COMPUTER HAS BEEN COMPROMISED";
    document.getElementById("commes4").style.color = "Red";
    // Changes text on button 5
    document.getElementById("commes5").innerHTML = "YOUR COMPUTER HAS BEEN COMPROMISED";
    document.getElementById("commes5").style.color = "Red";
}
// When "s" is pressed will execute function "watch" 
document.addEventListener('keydown', function(event) {
    if (event.key === "s") {

        watch();    
    }
});

const IR = document.getElementById('Cal2')
const IE = document.getElementById('Cal');
let ping = 0;
let pong = 0;
const pingpong = ping * pong;

IE.addEventListener('input', function() {
    ping = this.value;
    console.log(pingpong)
});

// For future use
function data() {
alert('Work In Progress');
let bun = "bun";
let yun = "yun";
console.log(bun, yun);
}

// For future use
document.addEventListener('keydown', function(event) {
    if (event.key === "Tab") {
        
        data();
    }
});





