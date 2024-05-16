const links = new Set();
const allowedChars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'; // Allowed characters for base 36 encoding

function generate() {
if(document.getElementById("input").value ==""){
  document.getElementById("Output").value="Write the link in the input box";
}
else{
  
  while (links.size < 5000) {
    let identifier = "";
    for (let j = 0; j < 48; j++) {
      identifier += allowedChars[Math.floor(Math.random() * allowedChars.length)]; // Choose a random character from allowed set
    }
    links.add(document.getElementById("input").value + identifier);
  }

  document.getElementById('Output').value = [...links].join("\n");
  console.log([...links].join("\n"));
}}

