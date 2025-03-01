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
  let notf = "--help [-h]\nPrints this message.\n\n--time\nPrints current time.\n\n--loc [URL]\nRedirects user to selected URL\n\n";

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

  output.value += user + disp + '\n' + notf + '\n';

  if (disp) {
  
    let notf = "Redirecting..."
  
    window.open(disp);

    output.value += user + disp + '\n' + notf + '\n';
  } else {

      output.value += user + disp + '\n' + notf + '\n' + "error: no URL specified";
  }

  input.value = "";
};
