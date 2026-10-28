export type Player = 'X' | 'O';
export type SquareValue = Player | null;
export type Board = SquareValue[];

export type WinningLine = {
  player: Player;
  squares: readonly [number, number, number];
};
