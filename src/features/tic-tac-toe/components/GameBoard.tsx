import { Pressable, StyleSheet, Text, View } from 'react-native';
import { colors, getPlayerColor } from '../theme';
import type { Board, WinningLine } from '../types';

type GameBoardProps = {
  board: Board;
  boardSize: number;
  gameOver: boolean;
  winningLine: WinningLine | null;
  onSquarePress: (index: number) => void;
};

export function GameBoard({
  board,
  boardSize,
  gameOver,
  winningLine,
  onSquarePress,
}: GameBoardProps) {
  return (
    <View
      accessibilityLabel="Papan Tic Tac Toe 3 kali 3"
      style={[styles.board, { width: boardSize }]}
    >
      {[0, 1, 2].map((row) => (
        <View key={row} style={styles.row}>
          {[0, 1, 2].map((column) => {
            const index = row * 3 + column;
            const value = board[index];
            const isWinningSquare = winningLine?.squares.includes(index) ?? false;
            const tint = value ? getPlayerColor(value) : colors.text;
            const disabled = value !== null || gameOver;

            return (
              <Pressable
                key={index}
                accessibilityRole="button"
                accessibilityLabel={['Kotak ', index + 1, ', ', value ?? 'kosong'].join('')}
                accessibilityHint={
                  disabled
                    ? 'Kotak ini tidak dapat dipilih.'
                    : 'Ketuk untuk mengisi kotak.'
                }
                accessibilityState={{ disabled }}
                disabled={disabled}
                onPress={() => onSquarePress(index)}
                style={({ pressed }) => [
                  styles.square,
                  pressed && styles.squarePressed,
                  value && {
                    borderColor: tint + '55',
                    backgroundColor: tint + '0D',
                  },
                  isWinningSquare && {
                    borderColor: tint,
                    backgroundColor: tint + '20',
                  },
                ]}
              >
                <Text
                  style={[
                    styles.squareText,
                    { color: value ? tint : colors.text, fontSize: boardSize * 0.18 },
                  ]}
                >
                  {value ?? ''}
                </Text>
              </Pressable>
            );
          })}
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  board: {
    gap: 10,
  },
  row: {
    flexDirection: 'row',
    gap: 10,
  },
  square: {
    flex: 1,
    aspectRatio: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: colors.line,
    borderRadius: 20,
    backgroundColor: colors.cell,
  },
  squarePressed: {
    backgroundColor: colors.cellPressed,
    transform: [{ scale: 0.97 }],
  },
  squareText: {
    fontWeight: '800',
  },
});
