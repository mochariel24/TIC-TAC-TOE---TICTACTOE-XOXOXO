import { useState } from 'react';
import { createEmptyBoard, findWinningLine } from './game-logic';
import type { Board, Player } from './types';

export function useTicTacToe() {
  const [board, setBoard] = useState<Board>(createEmptyBoard);
  const [nextPlayer, setNextPlayer] = useState<Player>('X');

  const winningLine = findWinningLine(board);
  const isDraw = winningLine === null && board.every((square) => square !== null);
  const isGameOver = winningLine !== null || isDraw;
  const moveCount = board.filter((square) => square !== null).length;

  const playSquare = (index: number) => {
    if (isGameOver || board[index] !== null) return;

    const nextBoard = [...board];
    nextBoard[index] = nextPlayer;
    setBoard(nextBoard);
    setNextPlayer(nextPlayer === 'X' ? 'O' : 'X');
  };

  const resetGame = () => {
    setBoard(createEmptyBoard());
    setNextPlayer('X');
  };

  return {
    board,
    nextPlayer,
    winningLine,
    isDraw,
    isGameOver,
    moveCount,
    playSquare,
    resetGame,
  };
}
