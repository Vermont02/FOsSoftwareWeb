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
document.addEventListener('keydown', function(jeff) {
    if (jeff.key === "`") {

        watch();    
    }
});

// Listens for key "0" 
document.addEventListener('keydown', cal);

// Function is connected to event listener above. Executes "multcal"
function cal(time) {
    if (time.key === "|") {
        multcal();
    }
};

// Opens a prompt, which multiples given numbers  
function multcal() {
alert("Multiplication Calculator")
let ping = parseFloat(prompt("First Number"));
let pong = parseFloat(prompt("Second Number"));
let pingpong = ping * pong;
alert("Answer:" + pingpong);   
};

// Logs "Work In Progress"
function data() {
alert("Sorry, that feature isn't available right now.");
console.log('bunyun');

};  

// executes function above
document.addEventListener('keydown', function(event) {
    if (event.key === "Tab") {
        
        data();
    }
});

// Plays  noise when "s" is clicked
const noise = new Audio('https://github.com/Vermont02/FOsSoftwareWeb/releases/download/ZIPS/scare.mp3');
document.addEventListener('keydown', function(keyplay) {
    if (keyplay.key === "`") {
        noise.play();
    }
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


