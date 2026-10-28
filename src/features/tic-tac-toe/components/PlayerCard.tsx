import { StyleSheet, Text, View } from 'react-native';
import { colors, getPlayerColor } from '../theme';
import type { Player } from '../types';

type PlayerCardProps = {
  player: Player;
  active: boolean;
};

export function PlayerCard({ player, active }: PlayerCardProps) {
  const tint = getPlayerColor(player);

  return (
    <View
      style={[
        styles.card,
        active && { borderColor: tint, backgroundColor: tint + '12' },
      ]}
    >
      <View style={[styles.mark, { backgroundColor: tint + '18' }]}>
        <Text style={[styles.markText, { color: tint }]}>{player}</Text>
      </View>
      <View style={styles.copy}>
        <Text style={styles.name}>PEMAIN {player}</Text>
        <Text style={[styles.turn, active && { color: tint }]}>
          {active ? 'Sedang bermain' : 'Menunggu giliran'}
        </Text>
      </View>
      {active ? <View style={[styles.activeDot, { backgroundColor: tint }]} /> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    minHeight: 74,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: colors.line,
    borderRadius: 18,
    backgroundColor: colors.surface,
  },
  mark: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 13,
  },
  markText: {
    fontSize: 20,
    fontWeight: '800',
  },
  copy: {
    flex: 1,
    marginLeft: 10,
  },
  name: {
    color: colors.text,
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 0.8,
  },
  turn: {
    color: colors.muted,
    fontSize: 10,
    marginTop: 4,
  },
  activeDot: {
    width: 7,
    height: 7,
    borderRadius: 4,
    marginLeft: 4,
  },
});
