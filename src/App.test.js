import { calculateWinner } from './App';

describe('calculateWinner', () => {
  it('returns the winner for a completed row', () => {
    expect(calculateWinner(['X', 'X', 'X', null, null, null, null, null, null])).toBe('X');
  });

  it('returns the winner for a completed column', () => {
    expect(calculateWinner(['O', null, null, 'O', null, null, 'O', null, null])).toBe('O');
  });

  it('returns null when no winner exists', () => {
    expect(calculateWinner(['X', 'O', 'X', 'X', 'O', 'O', 'O', 'X', null])).toBe(null);
  });
});
