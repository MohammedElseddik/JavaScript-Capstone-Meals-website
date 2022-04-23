import { likesCounter } from '../modules/likes.js';

const data1 = [
  { id: 0, likes: 1111 },
  { id: 1, likes: 2222 },
  { id: 2, likes: 3333 },
  { id: 3, likes: 4444 },
];

const data2 = [
  { id: 0, likes: 5555 },
  { id: 1, likes: 6666 },
];

const data3 = [];

describe('Show counter and Like Counter ', () => {
  test('first test', () => {
    expect(likesCounter(data1, 0)).toBe(1111);
  });
  test('Second test', () => {
    expect(likesCounter(data2, 1)).toBe(6666);
  });
  test('Third test for empty array', () => {
    expect(likesCounter(data3, 2)).toBe(0);
  });
});
