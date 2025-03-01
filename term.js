let input = document.getElementById('terminput');
let output = document.getElementById('termoutput');

input.addEventListener('keydown', function(e) {
  if (e.key === "Enter") {
      commands();
  }
});

function commands() {
  if (input.value === "--help" || input.value === "--h") {
     hcom();
  } else {
  err();
  }
};

function err() {
  let disp = input.value;
  let notf = "command not found";   

  output.value += "FOs-Software:~ User$ " + disp + '\n' + notf + '\n';

  input.value = "";
};

function hcom() {
  let mes = input.value;
  let helM = "help goes here";

  output.value += "FOs-Software:~ User$ " + mes + '\n' + helM + '\n';

  input.value = "";
};
