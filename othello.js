console.log("Othello");
document.body.innerHTML += "<br>boo<br>moof"

class OthelloBoard {
  constructor() {
    this.board = new Array(8);
    for (var i = 0; i< 8; ++i) {
      this.board[i] = new Array(8)
      for (var j = 0; j< 8; ++j) {
        this.board[i][j] = 0;
      }
    }
  }
}
console.log(new OthelloBoard)
