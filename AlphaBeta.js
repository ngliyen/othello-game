var principal = {}

function alpha_beta(alpha, beta, depthLeft, board, first_level) {
  var moves = board.gen_moves();
  var best_move = null;
  if(depthLeft == 0 || moves.length ==0 ) {
    //console.log("score");
    //console.log(board);
    var score = board.final_score(board.curplayer);
    //console.log(score);
    return score;
  }
  let m = JSON.stringify(board);
  if (m in principal) {
    moves.unshift(principal[m]);
  }



  for (var i = 0;i < moves.length; ++i) {
    var move = moves[i];
    b = board.clone();
    if (first_level) {
      console.log(move);
      console.log(b);
    }
    b.make_move(move);
    score = -alpha_beta(-beta, -alpha, depthLeft - 1, b, false);
    if (first_level) {
      console.log(score)
    }
    if(score >= beta)
      return beta;   //  fail hard beta-cutoff
    if(score > alpha) {
      best_move = move;
      alpha = score; // alpha acts like max in MiniMax
    }
  }

  if (best_move != null) {
    principal[JSON.stringify(board)] = best_move;
  }

  return alpha;
}

function get_best_move(board) {
  alpha_beta(-10000,10000,9, board,false);
  return principal[JSON.stringify(board)]
}
