export enum Player {
  X = 'X',
  O = 'O'
}

export type Cell = Player | null

export type Row = [Cell, Cell, Cell]
export type Board = [Row, Row, Row]

export type Coords = {
  row: number
  col: number
}
