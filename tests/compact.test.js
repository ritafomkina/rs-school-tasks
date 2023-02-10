const { compact } = require('../costom methods/compact');

const initArr = [0, 1, false, 2, '', 3];
const onlyFalsy = [0, null, false, '', NaN, undefined];
const onlyTruthy = [1, 2, 3];

test(
    'Should return arrays with truthy values',
    () => {
        expect(compact(initArr)).toStrictEqual([1, 2, 3]);
    }
);

test(
    'Should return an empty array if called withous arguments',
    () => {
        expect(compact()).toStrictEqual([]);
    }
);

test(
    'Should return an empty array if called with ampty array',
    () => {
        expect(compact([])).toStrictEqual([]);
    }
);

test(
    'Should return an empty array if all values in array are falsy',
    () => {
        expect(compact(onlyFalsy)).toStrictEqual([]);
    }
);

test(
    'Should return an array if all values in array are truthy',
    () => {
        expect(compact(onlyTruthy)).toStrictEqual(onlyTruthy);
    }
);

test(
    'Should throw an error if first argument is`nt array',
    () => {
        expect(() => {
            compact('abcdefg');
        }).toThrow(TypeError);
    }
);