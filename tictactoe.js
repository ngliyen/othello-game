

const BLACK = 1;
const WHITE = -1;
const EMPTY = 0;
var BOARDSIZE = 3;
var SQUARESIZE = 30;
class TicTacToeMove {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}
class TicTacToeBoard {
  constructor() {
    this.board = new Array(BOARDSIZE);
    for (var i = 0; i< BOARDSIZE; ++i) {
      this.board[i] = new Array(BOARDSIZE)
      for (var j = 0; j< BOARDSIZE; ++j) {
        this.board[i][j] = EMPTY;
      }
    }
    this.curplayer = BLACK;
    this.game_ended = EMPTY;
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

  clone() {
    var ret = new TicTacToeBoard();
    ret.curplayer = this.curplayer;
    ret.game_ended = this.game_ended;
    for (var i = 0; i< 3; ++i) {
      for (var j = 0; j< 3; ++j) {
        ret.board[i][j] = this.board[i][j];
      }
    }
    return ret;
  }

  gen_moves() {
    let ret = new Array();
    if (this.game_ended != EMPTY) {
      return ret;
    }
    for (var i = 0; i < this.board.length; i++) {
       for (var j = 0; j < this.board[0].length; j++) {
         if (this.board[i][j] == EMPTY) {
           ret.push(new TicTacToeMove(i,j));
         }
       }
    }
    return ret;
  }

  has_line() {
    for (var i = 0; i < 3; ++i) {
      if (this.board[0][i] != EMPTY && this.board[0][i] == this.board[1][i] && this.board[1][i] == this.board[2][i]) {
        return this.board[0][i]
      }
      if (this.board[i][0] != EMPTY && this.board[i][0] == this.board[i][1] && this.board[i][1] == this.board[i][2]) {
        return this.board[i][0]
      }
    }
    if (this.board[0][0] != EMPTY && this.board[0][0] == this.board[1][1] && this.board[1][1] == this.board[2][2] ) {
      return this.board[1][1]
    }
    if (this.board[2][0] != EMPTY && this.board[2][0] == this.board[1][1] && this.board[1][1] == this.board[0][2] ) {
      return this.board[1][1]
    }
    return EMPTY;
  }

  make_move(move) {
    console.assert(this.game_ended == false);
    console.assert(this.board[move.x][move.y] == EMPTY)
    this.board[move.x][move.y] = this.curplayer;
    this.curplayer = -this.curplayer;
    this.game_ended = this.has_line();
  }

  get_curplayer() {
    return this.curplayer;
  }

  final_score(player) {
    if (this.game_ended == EMPTY) {
      return 0;
    }
    if( this.game_ended != player) {
      return -1;
    }
    if (this.game_ended == player) {
      return 1;
    }
  }
}
