let timelog = document.getElementById('timelog');
let input = document.getElementById('terminput');
let output = document.getElementById('termoutput');
let user = "FOs-Software:~ User$ ";

input.addEventListener('keydown', function(e) {
  if (e.key === "Enter") {
      commands();
  }
});

document.addEventListener('DOMContentLoaded', function() {
  timedisp();
});

function commands() {
  if (input.value === "--help" || input.value === "--h") {
     hcom();
  } else if (input.value === "") {
    noncom();
  } else if (input.value === "--time") {
    timecom();
  } else if (input.value.startsWith("--loc")) {
    loccom();
  } else if (input.value === "--home" || input.value === "--fosstart") {
    homecom();
  } else if (input.value === "--ldir") {
    ldircom();
  } else if (input.value.startsWith("--downld")) {
    downldcom();
  } else {
  err();
  }
};

function err() {
  let disp = input.value;
  let notf = "command not found";   
  
  notf.color = "red";

  output.value += user + disp + '\n' + notf + '\n';

  input.value = "";

  scrollB();
};

function hcom() {
  let disp = input.value;
  let notf = "--help (-h)\nPrints this message.\n\n--time\nPrints current time.\n\n--loc [URL]\nRedirects user to selected URL.\n\n--home (--fosstart)\nSends user to FOs home page.\n\n--ldir\nShows List of pages on FOs website.\n\n";

  output.value += user + disp + '\n' + notf + '\n';

  input.value = "";

  scrollB();
};

function scrollB() {
  output.scrollTop = output.scrollHeight;
}


function timedisp() {
  let timedisplay = new Date().toLocaleString();
  timelog.value = `Last login:${timedisplay}`
}; 

function noncom() {
  let disp = input.value;
  
  output.value += user + disp + '\n';

  input.value = "";

  scrollB();
}; 

function timecom() {
  let disp = input.value;
  let notf = new Date().toLocaleString();

  output.value += user + disp + '\n' + notf + '\n';
  input.value = "";

  scrollB();
};

function loccom() {
  let disp = input.value.split(" ")[1];
  let notf = "";
  let message = input.value; 


  if (disp) {
  
    let notf = "Redirecting..."
  
    window.open(disp, "_Blank");

    output.value += user + message + '\n' + notf + '\n';

  } else {

      output.value += user + message + '\n' + "error: no URL specified" + '\n';
  }

  input.value = "";

  scrollB();
};

function homecom() {
  let disp = input.value;
  let notf = "Redirecting to home page..."

  output.value += user + disp + '\n' + notf + '\n';

  window.open("https://www.fossoftware.kesug.com", "_Blank");

  input.value = "";

  scrollB();
};

function ldircom() {
  let disp = input.value;
  let notf = "#########\n\nfossoftware\n|\n|\n|___/mpl.html\n    |\n    |\n    |___/more-pages.html\n    |\n    |\n    |___/term.html\n\n##########"

  output.value += `${user}${disp}\n${notf}\n`;

  input.value = "";

  scrollB();
};

function downldcom() {
  let disp = input.value.split(" ")[1];
  let message = input.value;

  if (disp) {
    let nameOfFile = disp.split("/").pop();

    getFileURL(disp, nameOfFile);
    output.value += `${user}${message}\nDownload started...\n`;
  } else {
    output.value += `${user}${message}\nerror: No URL specified\n`;
  } 
  input.value = "";

  scrollB();
};

function getFileURL(URL, nameOfFile) {
  const Dlink = document.createElement('a');
  Dlink.href = URL;
  Dlink.download = nameOfFile;
  Dlink.click();
};
