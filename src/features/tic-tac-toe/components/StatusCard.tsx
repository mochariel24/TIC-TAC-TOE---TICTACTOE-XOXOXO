import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../theme';

type StatusCardProps = {
  status: string;
  hint: string;
  mark: string;
  markColor: string;
};

export function StatusCard({ status, hint, mark, markColor }: StatusCardProps) {
  return (
    <View style={styles.card}>
      <View style={styles.copy}>
        <Text style={styles.label}>STATUS PERMAINAN</Text>
        <Text style={styles.status}>{status}</Text>
        <Text style={styles.hint}>{hint}</Text>
      </View>
      <View style={[styles.mark, { backgroundColor: markColor + '18' }]}>
        <Text style={[styles.markText, { color: markColor }]}>{mark}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '100%',
    minHeight: 88,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 18,
    paddingVertical: 15,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: colors.line,
    borderRadius: 20,
    backgroundColor: colors.surface,
  },
  copy: {
    flex: 1,
  },
  label: {
    color: colors.muted,
    fontSize: 10,
    fontWeight: '700',
    letterSpacing: 1.5,
  },
  status: {
    color: colors.text,
    fontSize: 19,
    fontWeight: '800',
    marginTop: 5,
  },
  hint: {
    color: colors.muted,
    fontSize: 11,
    marginTop: 3,
  },
  mark: {
    width: 44,
    height: 44,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    marginLeft: 12,
  },
  markText: {
    fontSize: 21,
    fontWeight: '800',
  },
});
