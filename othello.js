

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

  make_move(player, i, j) {
    var num_rows = this.board.length
    var num_cols = this.board[0].length
    this.board[i][j] = player
    var dir_arr = [[-1, -1], [-1, 0], [-1, 1], [0, 1], [1, 1], [1, 0], [1, -1], [0, -1]]
    for (let idx=0; idx<dir_arr.length; idx++) {
        var dir = dir_arr[idx]
        var end_col = i + dir[0]
        var end_row = j + dir[1]
        var player_found = false
        while (end_row >= 0 && end_row < num_rows && end_col > 0 &&  end_col < num_cols && !player_found) {
            if (this.board[end_col][end_row] == player) {
                player_found = true
            } else if (this.board[end_col][end_row] == EMPTY) {
                break
            }
            else {
                end_col += dir[0]
                end_row += dir[1]
            }
            console.log("While loop: " + end_row + ", " + end_col)
        }
        if (player_found) {
            console.log("Player found! end: " + end_row + ", " + end_col + "dir= " + dir)
            this.update_board(j, i, dir)
        }
        player_found = false
    }
    this.curplayer = -this.curplayer
  }

  update_board(start_row, start_col, dir) {
    var num_rows = this.board.length
    var num_cols = this.board[0].length
    var end_col = start_col + dir[0]
    var end_row = start_row + dir[1]
    var player_found = false
    while (end_row >= 0 && end_row < num_rows && end_col > 0 &&  end_col < num_cols && !player_found) {
        if (this.board[end_col][end_row] == this.curplayer) {
            player_found = true
        }
        else {
            this.board[end_col][end_row] = this.curplayer
            end_col += dir[0]
            end_row += dir[1]
        }
        console.log("While loop: " + end_row + ", " + end_col)
    }
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

othello = new OthelloBoard
othello.board[3][3] = BLACK
othello.board[4][3] = WHITE
othello.board[3][4] = WHITE
othello.board[4][4] = BLACK
othello.make_move(othello.curplayer, 4, 2)
console.log(othello)
