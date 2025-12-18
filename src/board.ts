import { Board, Coords, Player } from './types'

export function createEmptyBoard(): Board {
  return [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ]
}

export function printBoard(board: Board): void {
  board.forEach((row, rowIndex) => {
    console.log(row.map(cell => (cell === null ? '_' : cell)).join(' | '))
    if (rowIndex < board.length - 1) console.log('----------')
  })
}

export function isInBounds({ row, col }: Coords): boolean {
  return row >= 0 && row < 3 && col >= 0 && col < 3
}

export function isCellEmpty(board: Board, { row, col }: Coords): boolean {
  return board[row][col] === null
}

export function placeMove(board: Board, { row, col }: Coords, player: Player): void {
  board[row][col] = player
}

export function checkWinner(board: Board): Player | null {
  const lines: [Coords, Coords, Coords][] = [
    // Rows
    [{ row: 0, col: 0 }, { row: 0, col: 1 }, { row: 0, col: 2 }],
    [{ row: 1, col: 0 }, { row: 1, col: 1 }, { row: 1, col: 2 }],
    [{ row: 2, col: 0 }, { row: 2, col: 1 }, { row: 2, col: 2 }],

    // Cols
    [{ row: 0, col: 0 }, { row: 1, col: 0 }, { row: 2, col: 0 }],
    [{ row: 0, col: 1 }, { row: 1, col: 1 }, { row: 2, col: 1 }],
    [{ row: 0, col: 2 }, { row: 1, col: 2 }, { row: 2, col: 2 }],

    // Diagonals
    [{ row: 0, col: 0 }, { row: 1, col: 1 }, { row: 2, col: 2 }],
    [{ row: 0, col: 2 }, { row: 1, col: 1 }, { row: 2, col: 0 }],
  ]

  for (const [a, b, c] of lines) {
    const v1 = board[a.row][a.col]
    const v2 = board[b.row][b.col]
    const v3 = board[c.row][c.col]

    if (v1 !== null && v1 === v2 && v2 === v3) return v1
  }

  return null
}

export function isDraw(board: Board): boolean {
  return board.every(row => row.every(cell => cell !== null)) && checkWinner(board) === null
}

export function nextPlayer(player: Player): Player {
  return player === Player.X ? Player.O : Player.X
}
