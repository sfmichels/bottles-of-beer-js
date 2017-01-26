var word = "bottles";
var oneWord = "bottle";
var count = 99;
while (count > 0) {
  if (count == 1) {
    console.log(count + " " + oneWord + " of beer on the wall");
    console.log(count + " " + oneWord + " of beer,");
  } else {
    console.log(count + " " + word + " of beer on the wall");
    console.log(count + " " + word + " of beer,");
  }
  console.log("Take one down, pass it around,");
  count = count - 1;
  if (count > 1) {
    console.log(count + " " + word + " of beer on the wall.");
  } else if (count == 1) {
    console.log(count + " " + oneWord + " of beer on the wall.");
  } else { 
    console.log("No more " + word + " of beer on the wall.");
  }
}
