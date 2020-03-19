
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let resultArray = new Array();
  for (let i=0; i<matrix.length; i++) {
    if (i!=0 && i%2!=0) {
      matrix[i].reverse();
    }
    for (let j=0; j<matrix[i].length; j++) {
      resultArray.push(matrix[i,j]);
    }
  }
  return resultArray;
}
