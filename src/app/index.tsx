import { StatusBar } from 'expo-status-bar';
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { GameBoard } from '@/features/tic-tac-toe/components/GameBoard';
import { PlayerCard } from '@/features/tic-tac-toe/components/PlayerCard';
import { StatusCard } from '@/features/tic-tac-toe/components/StatusCard';
import { useTicTacToe } from '@/features/tic-tac-toe/useTicTacToe';
import { colors, getPlayerColor } from '@/features/tic-tac-toe/theme';

export default function HomeScreen() {
  const game = useTicTacToe();
  const { width, height } = useWindowDimensions();
  const boardSize = Math.min(width - 40, 360, Math.max(240, height - 420));

  const status = game.winningLine
    ? 'Pemain ' + game.winningLine.player + ' menang!'
    : game.isDraw
      ? 'Permainan seri!'
      : 'Giliran Pemain ' + game.nextPlayer;
  const statusHint = game.winningLine
    ? 'Tiga simbol sejajar. Permainan selesai.'
    : game.isDraw
      ? 'Papan penuh. Coba satu ronde lagi.'
      : 'Pilih satu kotak kosong untuk menaruh simbol.';
  const statusMark = game.winningLine?.player ?? (game.isDraw ? '=' : game.nextPlayer);
  const statusColor = game.winningLine
    ? getPlayerColor(game.winningLine.player)
    : game.isDraw
      ? colors.gold
      : getPlayerColor(game.nextPlayer);

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="light" />
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.container}>
          <View style={styles.header}>
            <View style={styles.eyebrow}>
              <View style={styles.eyebrowDot} />
              <Text style={styles.eyebrowText}>PERMAINAN 2 PEMAIN</Text>
            </View>
            <Text style={styles.title}>Tic Tac Toe</Text>
            <Text style={styles.subtitle}>
              Susun tiga simbol sejajar dan menangkan ronde.
            </Text>
          </View>

          <View style={styles.players}>
            <PlayerCard
              player="X"
              active={
                game.winningLine?.player === 'X' ||
                (!game.isGameOver && game.nextPlayer === 'X')
              }
            />
            <PlayerCard
              player="O"
              active={
                game.winningLine?.player === 'O' ||
                (!game.isGameOver && game.nextPlayer === 'O')
              }
            />
          </View>

          <StatusCard
            status={status}
            hint={statusHint}
            mark={statusMark}
            markColor={statusColor}
          />

          <GameBoard
            board={game.board}
            boardSize={boardSize}
            gameOver={game.isGameOver}
            winningLine={game.winningLine}
            onSquarePress={game.playSquare}
          />

          <View style={styles.boardMeta}>
            <Text style={styles.boardMetaLabel}>LANGKAH</Text>
            <Text style={styles.boardMetaCount}>{game.moveCount} / 9</Text>
          </View>

          <Pressable
            accessibilityRole="button"
            accessibilityLabel="Mulai ulang permainan"
            onPress={game.resetGame}
            style={({ pressed }) => [
              styles.resetButton,
              pressed && styles.resetButtonPressed,
            ]}
          >
            <Text style={styles.resetIcon}>↻</Text>
            <Text style={styles.resetButtonText}>Mulai Ulang</Text>
          </Pressable>

          <Text style={styles.footerText}>X memulai permainan · Mainkan bergantian</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.background,
  },
  scrollContent: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  container: {
    width: '100%',
    maxWidth: 440,
    alignItems: 'center',
  },
  header: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 26,
  },
  eyebrow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 12,
  },
  eyebrowDot: {
    width: 7,
    height: 7,
    borderRadius: 4,
    backgroundColor: colors.x,
  },
  eyebrowText: {
    color: colors.x,
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 2,
  },
  title: {
    color: colors.text,
    fontSize: 36,
    fontWeight: '800',
    letterSpacing: -1.2,
  },
  subtitle: {
    color: colors.muted,
    fontSize: 14,
    lineHeight: 21,
    marginTop: 7,
    textAlign: 'center',
  },
  players: {
    width: '100%',
    flexDirection: 'row',
    gap: 12,
    marginBottom: 16,
  },
  boardMeta: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    marginTop: 13,
    marginBottom: 18,
  },
  boardMetaLabel: {
    color: colors.muted,
    fontSize: 10,
    fontWeight: '700',
    letterSpacing: 1.5,
  },
  boardMetaCount: {
    color: colors.text,
    fontSize: 12,
    fontWeight: '700',
    fontVariant: ['tabular-nums'],
  },
  resetButton: {
    width: '100%',
    minHeight: 54,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 9,
    borderRadius: 17,
    backgroundColor: colors.x,
  },
  resetButtonPressed: {
    opacity: 0.82,
    transform: [{ scale: 0.99 }],
  },
  resetIcon: {
    color: colors.background,
    fontSize: 20,
    fontWeight: '700',
  },
  resetButtonText: {
    color: colors.background,
    fontSize: 15,
    fontWeight: '800',
  },
  footerText: {
    color: colors.muted,
    fontSize: 11,
    marginTop: 17,
  },
});
