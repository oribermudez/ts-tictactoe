# 🎮 Tic-Tac-Toe (TypeScript + Node)

![Status](https://img.shields.io/badge/status-in%20progress-yellow)
![License](https://img.shields.io/badge/license-MIT-blue)
![Node](https://img.shields.io/badge/node-%3E%3D18.0.0-green)
![TypeScript](https://img.shields.io/badge/TypeScript-✔-blue)

A simple Tic-Tac-Toe game you can play entirely in the terminal, built with TypeScript.

## 🧠 Features
✔ Two-player mode (`X` vs `O`)  
✔ Fully interactive CLI using Node `readline`  
✔ Strong type safety with `enum` and tuple-based board  
✔ Input validation (bounds & occupied cells)  
✔ Board printed after each move  
✔ Winner and draw detection  
✔ Modular code structure (separation of concerns)

---

## 🧱 Tech Stack

| Tool | Purpose |
|------|---------|
| Node.js | Runtime environment |
| TypeScript | Logic + Type safety |
| Readline | Terminal input/output |

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

🧩 Game Preview:

<img width="352" height="196" alt="Captura de pantalla 2025-12-17 a la(s) 6 04 37 p m" src="https://github.com/user-attachments/assets/a4183bd5-cc25-464f-a5ca-5e2eed02d265" /><br />

<img width="371" height="193" alt="Captura de pantalla 2025-12-17 a la(s) 6 04 49 p m" src="https://github.com/user-attachments/assets/f46be86d-9ca3-40a6-91d4-c1104aa851f2" /><br />

<img width="353" height="186" alt="Captura de pantalla 2025-12-17 a la(s) 6 04 57 p m" src="https://github.com/user-attachments/assets/fa1ae941-1811-4d00-b728-58d0bbfbb26a" /><br />


## 📂 Project Structure

src/<br />
├── board.ts&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;# Board creation, rendering, and win logic<br />
├── game.ts&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;# Main game loop and flow<br />
├── io.ts&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;# Readline input handling<br />
├── rules.ts&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;# Game rules output<br />
├── types.ts&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;# Shared types and enums<br />
└── index.ts&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;# Application entry point<br />

package.json&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;# Scripts & dependencies<br />
tsconfig.json&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;# TypeScript configuration<br />
.gitignore&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;# Ignored files (node_modules, etc.)<br />
README.md&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;# Project documentation<br />



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
