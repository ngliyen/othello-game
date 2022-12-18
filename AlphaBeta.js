var principal = {}
var endTime = 0;

function alpha_beta(alpha, beta, depthLeft, board, first_level) {
  var moves = board.gen_moves();
  var best_move = null;
  curplayer = board.get_curplayer();
  if(depthLeft == 0 || moves.length ==0 ) {
    //console.log("score");
    //console.log(board);
    var score = null;
    score = board.approx_score(curplayer);
    //console.log(score);
    return score;
  }
  let m = JSON.stringify(board);

  moves.map(value=> ({ value, sort: value in principal ? 1000 : board.approx_score(curplayer) }))
      .sort((a, b) => b.sort - a.sort)
      .map(({ value }) => value)

  if (first_level) {
    console.log(moves)
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

function get_best_move(board, timeoutsec, max_depth) {
  var date = new Date();
  endTime = date.getTime() + timeoutsec * 1000;

  var startingDepth = 4;

  while (new Date().getTime() <= endTime) {
    alpha_beta(-10000,10000, startingDepth, board,true);
    if (startingDepth >= max_depth) {
      break;
    }
    startingDepth++;
  }
  
  return principal[JSON.stringify(board)]
}
