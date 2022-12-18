

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
    for (dir in dir_arr) {
        var end_row = i + dir[0]
        var end_col = j + dir[1]
        var player_found = false
        while (end_row < num_rows && end_col < num_cols && !player_found) {
            if (this.board[end_row][end_col] == player) {
                player_found = true
            }
            else {
                end_row += dir[0]
                end_col += dir[1]
            }
        }
        if (player_found) {
            console.log("end: " + end_row + ", " + end_col )
            this.update_board(i, end_row, j, end_col, dir)
        }
        player_found = false
    }


  }

  update_board(start_row, end_row, start_col, end_col, dir_tuple) {
    var row = start_row
    var col = start_col
    while (row <= end_row && col <= end_col) {
        this.board[row][col] = this.curplayer
        row += dir_tuple[0]
        col += dir_tuple[1]
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
