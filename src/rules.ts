export function printRules(): void {
  console.log(`<--------------------------------- TIC TAC TOE BOARD --------------------------------->

Rules:
1. The game is played on a 3x3 grid.
2. Player X goes first, followed by Player O.
3. Players take turns placing their marks (X or O) in empty cells.
4. The first player to get three of their marks in a row (horizontally, vertically, or diagonally) wins.
5. If all cells are filled and no player has three in a row, the game ends in a draw.
6. To make a move, enter the row and column numbers (1, 2, or 3) separated by a space.

Let's begin!
`)
}
