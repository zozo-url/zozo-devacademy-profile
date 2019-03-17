document.addEventListener('DOMContentLoaded', startGame)

// Define your `board` object here!
var board = {
  cells: [{
    row: 0,
    col: 0,
    isMine: false,
    isMarked: false,
    hidden: true
  },
  {
    row: 0,
    col: 1,
    isMine: false,
    isMarked: false,
    hidden: true,
  },
  {
    row: 0,
    col: 2,
    isMine: false,
    isMarked: false,
    hidden: true,
  },
  {
    row: 1,
    col: 0,
    isMine: false,
    isMarked: false,
    hidden: true,
  },
  {
    row: 1,
    col: 1,
    isMine: false,
    isMarked: false,
    hidden: true,
  },
  {
    row: 1,
    col: 2,
    isMine: false,
    isMarked: false,
    hidden: true,
  },
  {
    row: 2,
    col: 0,
    isMine: false,
    isMarked: false,
    hidden: true,
  },
  {
    row: 2,
    col: 1,
    isMine: true,
    isMarked: false,
    hidden: true,
  },
  {
    row: 2,
    col: 2,
    isMine: false,
    isMarked: false,
    hidden: true,
  }]
}

function startGame ( ) {
  for (var i = 0; i < board.cells.length; i++){
    //call countSurroundingMines for each cell in board.cells
    board.cells[i].surroundingMines = countSurroundingMines (board.cells[i]);
  }
  // Don't remove this function call: it makes the game work!
  lib.initBoard()
}

// Define this function to look for a win condition:
//
// 1. Are all of the cells that are NOT mines visible?
// 2. Are all of the mines marked?
function checkForWin () {
//loop through all of board.cells
  var countMines = 0;
  var countMarkedMines = 0;
  for (var i = 0; i < board.cells.length; i++){
    if (board.cells[i].isMine === true) { // Increment # of all mines if there's a mine.
    countMines ++;
    }
    if (board.cells[i].isMine === true && board.cells[i].isMarked === true) { // Increment # of marked mines if there's a mine & it's marked.
      countMarkedMines ++;
    }
    if (board.cells[i].isMine === false  && board.cells[i].hidden === true){ // Return if there's no mine & square is hidden.
      return;
    }
  }
  if (countMines === countMarkedMines){
    lib.displayMessage('You win!');
  }
  else {
    return;
  }
}

document.addEventListener("click", checkForWin);
document.addEventListener("contextmenu", checkForWin);
    //if (board.cells[i].isMine === false && board.cells[i].hidden === true){
    //  return;
    //}
    //if (board.cells[i].isMine === true){
    //  countMines++;
    //}
    //if (board.cells[i].isMine === true && board.cells[i].isMarked === true){
    //  countMarkedMines++;
//check to see if .isMine and .isMarked == true
// if isMine == true but isMarked == false, return aka exit function
// if isMine == true && isMarked == true, but isMine == false && isMarked == false,

  // You can use this function call to declare a winner (once you've
  // detected that they've won, that is!)
  // lib.displayMessage('You win!')
//}

// Define this function to count the number of mines around the cell
// (there could be as many as 8). You don't have to get the surrounding
// cells yourself! Just use `lib.getSurroundingCells`: 
//
//   var surrounding = lib.getSurroundingCells(cell.row, cell.col)
//
// It will return cell objects in an array. You should loop through 
// them, counting the number of times `cell.isMine` is true.
function countSurroundingMines (cell) {
  var surroundingCells = getSurroundingCells(cell.row, cell.col);
  count = 0;
  //console.log(cell + ": surrounding cells: " + surroundingCells);
  //loop through surrounding cells
  for (var i = 0; i < surroundingCells.length; i++){
    if (surroundingCells[i].isMine == true){
      count++;
    }
  }
  return count;
  //if it's a mine, count++
  //once count is correct, return it
}

