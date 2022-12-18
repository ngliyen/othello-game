

const BLACK = 1;
const WHITE = -1;
const EMPTY = 0;
class TicTacToeMove {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}
class TicTacToeBoard {
  constructor() {
    this.board = new Array(3);
    for (var i = 0; i< 3; ++i) {
      this.board[i] = new Array(3)
      for (var j = 0; j< 3; ++j) {
        this.board[i][j] = EMPTY;
      }
    }
    this.curplayer = BLACK;
    this.game_ended = EMPTY;
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
      if (this.board[0][i] == this.board[1][i] && this.board[1][i] == this.board[2][i]) {
        return this.board[0][i]
      }
      if (this.board[i][0] == this.board[i][1] && this.board[i][1] == this.board[i][2]) {
        return this.board[i][0]
      }
    }
    if (this.board[0][0] == this.board[1][1] && this.board[1][1] == this.board[2][2] ) {
      return this.board[1][1]
    }
    if (this.board[2][0] == this.board[1][1] && this.board[1][1] == this.board[0][2] ) {
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
