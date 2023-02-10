const { take } = require('../costom methods/take');

const initArr = [1, 2, 3];

test(
    'Should return array with first item if called without second argument',
    () => {
    expect(take(initArr)).toStrictEqual([1]);
});

test(
    'Should return array with 2 first items if called with 2',
    () => {
    expect(take(initArr, 2)).toStrictEqual([1, 2]);
});

test(
    'Should return copy of init array if second argument is bigger then array length',
    () => {
    expect(take(initArr, 5)).toStrictEqual([1, 2, 3]);
});

test(
    'Should return an empty array if second argument is 0',
    () => {
    expect(take(initArr, 0)).toStrictEqual([]);
});

test(
    'Should return an empty array if second argument is less then 0',
    () => {
    expect(take(initArr, -1)).toStrictEqual([]);
});

test(
    'Should return an empty array if called without arguments',
    () => {
    expect(take()).toStrictEqual([]);
});

test(
    'Should throw an error if first argument is`nt array',
    () => {
        expect(() => {
            take('abcdefg', 2);
        }).toThrow(TypeError);
    }
);

test(
    'Should throw an error if second argument is`nt a number',
    () => {
        expect(() => {
            take(initArr, 'notNumber');
        }).toThrow(TypeError);
    }
);