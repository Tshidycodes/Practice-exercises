//Create a function that "claps" 5 times
function clap(n) {
  for (let i = 0; i < n; i++) {
    console.log("clap👋");
  }
}

clap(5);

//clap five times on a row:
function clapOnRow(n) {
  //initialine clapline with an empty string where the claps will be stored
  let clapLine = "";
  //lets say we want 3 claps
  //use for loop FROM 0 to n-1; APPEND "clap👋" to clap line
  for (let i = 0; i < n; i++) {
    clapLine += "👋";
  }
  console.log(clapLine);
}
clapOnRow(5);
