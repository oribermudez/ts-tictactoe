import { createRl } from './io'
import { runGame } from './game'

async function main() {
  const rl = createRl()

  try {
    await runGame(rl)
  } finally {
    rl.close()
  }
}

main()
