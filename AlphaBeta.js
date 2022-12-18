class AlphaBeta {
    alpha_beta(alpha, beta, depthLeft) {
        if(depthLeft == 0) return this.final_score(this.curplayer);
        
        for (move in this.gen_moves()) {
          score = -this.alpha_beta(-beta, -alpha, depthLeft - 1);
          if(score >= beta)
             return beta;   //  fail hard beta-cutoff
          if(score > alpha)
             alpha = score; // alpha acts like max in MiniMax
        }
    
        return alpha;
      }
}