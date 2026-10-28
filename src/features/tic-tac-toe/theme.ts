export const colors = {
  background: '#10131B',
  surface: '#191E29',
  cell: '#202633',
  cellPressed: '#2A3242',
  text: '#F5F7FA',
  muted: '#929AAA',
  line: '#343C4C',
  x: '#5EEAD4',
  o: '#FB7185',
  gold: '#F7C873',
} as const;

export function getPlayerColor(player: 'X' | 'O') {
  return player === 'X' ? colors.x : colors.o;
}
