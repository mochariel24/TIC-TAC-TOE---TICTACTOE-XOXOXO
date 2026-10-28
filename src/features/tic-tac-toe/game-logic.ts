import type { Board, WinningLine } from './types';

const WINNING_LINES: readonly (readonly [number, number, number])[] = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

export function createEmptyBoard(): Board {
  return Array.from({ length: 9 }, () => null);
}

export function findWinningLine(board: Board): WinningLine | null {
  for (const squares of WINNING_LINES) {
    const [first, second, third] = squares;
    const player = board[first];

    if (player !== null && player === board[second] && player === board[third]) {
      return { player, squares };
    }
  }

  return null;
}
