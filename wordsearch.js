const wordSearch = (letters, word) => {
    
  if (letters.length === 0) return false;
    
  const horizontalJoin = letters.map(ls => ls.join(''));
  const verticalJoin = new Array(letters[0].length).fill(0).map(() => new Array(letters.length).fill(0));
  for (let i = 0; i < letters.length; i++) {
    for (let j = 0; j < letters[i].length; j++) {
      verticalJoin[j][i] = letters[i][j];
    }
  }
  const flippedArray = verticalJoin.map((el) => el.join(''));
  for (let l of horizontalJoin) {
    if (l.includes(word)) return true;
  }
  for (let w of flippedArray) {
    if (w.includes(word)) return true;
  }
  return false;
};
module.exports = wordSearch;




