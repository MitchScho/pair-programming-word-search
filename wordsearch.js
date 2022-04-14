//Pair programming Ana Garcia @anaaag & Mitchell Schofield @MitchScho

const wordSearch = (letters, word) => {
  // Create a new array
  const newArray = [];

  //Structure array first
  for (let row = 0; row < letters.length; row++) {
    for (let col = 0; col < letters[row].length; col++) {
      newArray.push([]);
    }
    break;
  }

  // Loop through col first
  for (let col = 0; col < newArray.length; col++) {
    // Then loops through rows
    for (let row = 0; row < letters.length; row++) {
      newArray[col].push(letters[row][col]);
    }
  }
    
  const horizontalJoin = letters.map((ls) => ls.join(""));
  // console.log("Horizontal",horizontalJoin);
  for (l of horizontalJoin) {
    if (l.includes(word)) return true;
  }
  
  const verticalJoin = newArray.map((ls) => ls.join(""));
  // console.log("Vertical",verticalJoin);
  for (l of verticalJoin) {
    if (l.includes(word)) return true;
  }
  return false; 
};
  
module.exports = wordSearch;
