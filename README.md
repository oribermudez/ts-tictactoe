# 🎮 Tic-Tac-Toe (TypeScript + Node)

![Status](https://img.shields.io/badge/status-in%20progress-yellow)
![License](https://img.shields.io/badge/license-MIT-blue)
![Node](https://img.shields.io/badge/node-%3E%3D18.0.0-green)
![TypeScript](https://img.shields.io/badge/TypeScript-✔-blue)

A simple Tic-Tac-Toe game you can play entirely in the terminal, built with TypeScript.

## 🧠 Features
✔ Two-player mode (`X` vs `O`)

✔ Fully interactive CLI

✔ Input validation

✔ Board printed after each move

---

## 🧱 Tech Stack

| Tool | Purpose |
|------|---------|
| Node.js | Runtime environment |
| TypeScript | Logic + Type safety |
| Readline / CLI | Player input |

---

## 🚀 Run the project

### 1️⃣ Clone the repository

```bash
git clone https://github.com/tu-usuario/ts-tictactoe.git
cd ts-tictactoe
```

### 2️⃣ Install dependencies:

```bash
npm install
```

### 3️⃣ Start the game:

```bash
npm start
```

## 🎯 How to play

- Play directly from the terminal

- Players alternate placing their symbol: X or O

- Choose a valid empty cell when prompted

- First player to get 3 in a row wins!

- If the board is full with no winner → Draw 🤝

🧩 Example of how the board may display:

    X | O | 3
    ----------
    4 | X | O
    -----------
    7 | 8 | X   → Player X wins!


## 📂 Project Structure

src/
  index.ts       # Entry point and game loop
package.json     # Scripts + dependencies
tsconfig.json    # TS configuration
.gitignore       # Excluding node_modules, etc.
README.md        # You're reading this :)


## 🛠 Development

To run the TypeScript file without building:

```bash
npm run start
```

To compile TypeScript:

```bash
npx tsc
```

## 🧑‍💻 Author

Oriana Bermúdez
Software Developer — Calgary, Canada 🇨🇦

🔗 LinkedIn: https://www.linkedin.com/in/oribermudez/

📧 Email: ori.bermudez@outlook.com

Enjoy the game! 👾