var board = new OthelloBoard();

console.log(board);
board.print();

var canvas = document.getElementById("board");

function handleMouseDown(e){
  e.preventDefault();

  var mouseX=parseInt(e.clientX);
  var mouseY=parseInt(e.clientY);
  //console.log(mouseX + " " + mouseY);

  var squareX = Math.floor((mouseX-8) / SQUARESIZE);
  var squareY = Math.floor((mouseY-80) / SQUARESIZE); 
  //console.log(squareX + " " + squareY);
  
  if (squareX >= 0 && squareX < BOARDSIZE && squareY >= 0 && squareY < BOARDSIZE) {
    // TODO: SIMULATE MAKING A MOVE
    board.board[squareX][squareY] = board.curplayer;
    board.print();
  }
}

canvas.addEventListener("mousedown", handleMouseDown, false);

