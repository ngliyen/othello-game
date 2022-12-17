

const BLACK = 1;
const WHITE = -1;
const EMPTY = 0;
const BOARDSIZE = 8;
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
    var board = document.getElementById("board");
    var boardBody = "";
    for (var i = 0; i < this.board.length; i++) {
       for (var j = 0; j < this.board[0].length; j++) {
         boardBody += this.board[i][j];
       }
       boardBody += "<br>";
    }
    board.innerHTML = boardBody;
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
