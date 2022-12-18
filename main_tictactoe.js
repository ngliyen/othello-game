var board = new TicTacToeBoard();

//board.board[1][1] = BLACK;
//board.board[0][1] = BLACK;
//board.board[0][1] = BLACK;
//board.make_move(new TicTacToeMove(1,1));
//board.make_move(new TicTacToeMove(0,0));
//board.make_move(new TicTacToeMove(0,1));
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
    board.make_move(new TicTacToeMove(squareX, squareY));
    board.print();
  }
}

canvas.addEventListener("mousedown", handleMouseDown, false);

function ai_make_move() {
  board.make_move(get_best_move(board, 3, 20));
  board.print();
}
