/*Alice and Bob take turns playing a game, with Alice starting first.Initially, there is a number N on the chalkboard. On each players's turn, that player makes a move consisting of:Choosing any x with 0 < x < N and N % x == 0.
Replacing the number N on the chalkboard with N - x.
Also, if a player cannnot make a move, they lose the game.Return true if and only if Alice wins the game, assuming both players play optimally.*/

function divisorGame(N) {
  if (N === 1) {
    return false;
  }
  for (let x = 1; x < N; x++) {
    if (N % 2 === 0) {
      if (!divisorGame(N - x)) {
        return true;
      }
    }
  }
  return false;
}
let N = 10;
console.log(divisorGame(N));
