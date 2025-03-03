let input = document.getElementById('terminput');
let output = document.getElementById('termoutput');
let user = "FOs-Software:~ User$ ";

input.addEventListener('keydown', function(e) {
  if (e.key === "Enter") {
      commands();
  }
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
};

function hcom() {
  let disp = input.value;
  let notf = "--help (-h)\nPrints this message.\n\n--time\nPrints current time.\n\n--loc [URL]\nRedirects user to selected URL.\n\n--home (--fosstart)\nSends user to FOs home page.\n\n--ldir\nShows List of pages on FOs website.\n\n";

  output.value += user + disp + '\n' + notf + '\n';

  input.value = "";
};

function noncom() {
  let disp = input.value;
  
  output.value += user + disp + '\n';

  input.value = "";
}; 

function timecom() {
  let disp = input.value;
  let notf = new Date().toLocaleString();

  output.value += user + '\n' + notf + '\n';

  input.value = "";
};

function loccom() {
  let disp = input.value.split(" ")[1];
  let notf = "";

  if (disp) {
  
    let notf = "Redirecting..."
  
    window.open(disp, "_Blank");

    output.value += user + disp + '\n' + notf + '\n';

  } else {

      output.value += user + disp + '\n' + "error: no URL specified" + '\n';
  }

  input.value = "";

};

function homecom() {
  let disp = input.value;
  let notf = "Redirecting to home page..."

  output.value += user + disp + '\n' + notf + '\n';

  window.open("https://www.fossoftware.kesug.com", "_Blank");

  input.value = "";
};

function ldircom() {
  let disp = input.value;
  let notf = "#########\n\nfossoftware\n|\n|\n|___/mpl.html\n    |\n    |\n    |___more-pages.html\n    |\n    |\n    |___term.html\n\n##########"

  output.value += `${user}${disp}\n${notf}\n`

  input.value = "";
};
