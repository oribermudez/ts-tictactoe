import * as readline from 'readline'
import { Board, Player } from './types'
import {
  checkWinner,
  createEmptyBoard,
  isCellEmpty,
  isDraw,
  isInBounds,
  nextPlayer,
  placeMove,
  printBoard,
} from './board'
import { askMove, question } from './io'
import { printRules } from './rules'

async function askPlayAgain(rl: readline.Interface): Promise<boolean> {
  while (true) {
    const ans = (await question(rl, '\nPlay again? (y/n): ')).trim().toLowerCase()
    if (ans === 'y' || ans === 'yes') return true
    if (ans === 'n' || ans === 'no') return false
    console.log('Please answer y or n')
  }
}

export async function runGame(rl: readline.Interface): Promise<void> {
  printRules()

  let play = true

  while (play) {
    let board: Board = createEmptyBoard()
    let currentPlayer: Player = Player.X

    console.log('\nStarting new game!\n')
    printBoard(board)

    while (true) {
      console.log(`\nCurrent player: ${currentPlayer}`)

      const coords = await askMove(rl, currentPlayer)

      if (!isInBounds(coords)) {
        console.log('Out of bounds. Rows/cols must be between 1 and 3.')
        continue
      }

      if (!isCellEmpty(board, coords)) {
        console.log('That cell is already taken. Try again.')
        continue
      }

      placeMove(board, coords, currentPlayer)
      console.log('')
      printBoard(board)

      const winner = checkWinner(board)
      if (winner) {
        console.log(`\n🎉 Player ${winner} wins!\n`)
        break
      }

      if (isDraw(board)) {
        console.log('\n🤝 Draw!\n')
        break
      }

      currentPlayer = nextPlayer(currentPlayer)
    }

    play = await askPlayAgain(rl)
  }
}
