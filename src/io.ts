import * as readline from 'readline'
import { Coords, Player } from './types'

export function createRl() {
  return readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  })
}

export function question(rl: readline.Interface, text: string): Promise<string> {
  return new Promise(resolve => {
    rl.question(text, answer => resolve(answer))
  })
}

export function parseMove(input: string): Coords | null {
  // Expected: "row col" (1-3)
  const parts = input.trim().split(/\s+/)
  if (parts.length !== 2) return null

  const row = Number(parts[0])
  const col = Number(parts[1])

  if (!Number.isInteger(row) || !Number.isInteger(col)) return null

  return { row: row - 1, col: col - 1 }
}

export async function askMove(rl: readline.Interface, player: Player): Promise<Coords> {
  while (true) {
    const input = await question(rl, `Player ${player}, enter your move (row col): `)
    const coords = parseMove(input)

    if (!coords) {
      console.log('Invalid format. Use: "row col" (example: 2 3)')
      continue
    }

    return coords
  }
}
