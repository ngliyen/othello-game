console.log("Othello");
document.body.innerHTML += "<br>boo<br>moof"

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
  }

  final_score() {
    return this.curplayer;
  }
}
console.log(new OthelloBoard)
