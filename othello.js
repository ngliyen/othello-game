

const BLACK = 1;
const WHITE = -1;
const EMPTY = 0;
var BOARDSIZE = 8;
var SQUARESIZE = 30;
class OthelloBoard {
  constructor() {
    this.board = new Array(BOARDSIZE);
    for (var i = 0; i< BOARDSIZE; ++i) {
      this.board[i] = new Array(BOARDSIZE)
      for (var j = 0; j< BOARDSIZE; ++j) {
        this.board[i][j] = EMPTY;
      }
    }
    this.curplayer = BLACK;
    this.board[BOARDSIZE/2][BOARDSIZE/2] = BLACK;
    this.board[BOARDSIZE/2-1][BOARDSIZE/2-1] = BLACK;
    this.board[BOARDSIZE/2-1][BOARDSIZE/2] = WHITE;
    this.board[BOARDSIZE/2][BOARDSIZE/2-1] = WHITE;
  }

  print() {
    var canvas = document.getElementById("board");
    var ctx = canvas.getContext('2d');
    ctx.fillStyle = 'green';

    for (var i = 0; i < this.board.length; i++) {
       for (var j = 0; j < this.board[0].length; j++) {
         ctx.clearRect(i*SQUARESIZE, j*SQUARESIZE, SQUARESIZE, SQUARESIZE);
         ctx.strokeRect(i*SQUARESIZE, j*SQUARESIZE, SQUARESIZE, SQUARESIZE);
         if (this.board[i][j] == BLACK){
           ctx.fillStyle = 'black';
           ctx.fillRect(i*SQUARESIZE + 5, j*SQUARESIZE + 5, SQUARESIZE - 10, SQUARESIZE - 10);
         }
         if (this.board[i][j] == WHITE){
           ctx.fillStyle = 'grey';
           ctx.fillRect(i*SQUARESIZE + 5, j*SQUARESIZE + 5, SQUARESIZE - 10, SQUARESIZE - 10);
         }
       }
    }
  }

  gen_moves() {
  }

  make_move() {
  }

  get_curplayer() {
    return this.curplayer;
  }

  final_score(player) {
    console.assert(player == BLACK || player == WHITE)
    count = 0;
    for (var i = 0; i< 8; ++i) {
      for (var j = 0; j< 8; ++j) {
        count += this.board[i][j]==player
        count -= this.board[i][j]==-player
      }
    }
    return count;
  }
}
