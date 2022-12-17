

const BLACK = 1;
const WHITE = -1;
const EMPTY = 0;
class OthelloBoard {
  constructor() {
    this.board = new Array(8);
    for (var i = 0; i< 8; ++i) {
      this.board[i] = new Array(8)
      for (var j = 0; j< 8; ++j) {
        this.board[i][j] = EMPTY;
      }
    }
    this.curplayer = BLACK;
  }

  print() {
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
      }
    }
    return count;
  }
}
