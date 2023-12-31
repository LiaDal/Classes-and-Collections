const parentheses = require('../09-more-parentheses');

test('Тестирование задачи "028-more-parentheses"', () => {
    expect(parentheses('')).toBe(false);
    expect(parentheses('(')).toBe(false);
    expect(parentheses('<')).toBe(false);
    expect(parentheses('{')).toBe(false);
    expect(parentheses('<>')).toBe(true);
    expect(parentheses('{}}')).toBe(false);
    expect(parentheses('{})')).toBe(false);
    expect(parentheses('{}>')).toBe(false);
    expect(parentheses('(){}<>')).toBe(true);
    expect(parentheses('({(){}<()>}){(<>)}<(<>)>')).toBe(true);
    expect(parentheses('(){><}')).toBe(false);
    expect(parentheses('()}<>{')).toBe(false);
});
