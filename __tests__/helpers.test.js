const {format_date, format_plural, format_url} = require('../utils/helpers');

test('format_url() returns a simplified url string', () => {
  const url1 = format_url('http://test.com/page/1');
  const url2 = format_url('https://www.ilovedogs.com/abcdefg/');

  expect(url1).toBe('test.com');
  expect(url2).toBe('ilovedogs.com');
});

test('format_plural() returns a pluralized word', () => {
  const word1 = format_plural('turtle', 1);
  const word2 = format_plural('frog', 2);

  expect(word1).toBe('turtle');
  expect(word2).toBe('frogs');
});

test('format_date() returns a date string', () => {
  const date = new Date('2020-03-20 16:12:03');

  expect(format_date(date)).toBe('3/20/2020');
});