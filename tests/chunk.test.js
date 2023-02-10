const { chunk } = require('../costom methods/chunk');

const initArr = ['ant', 'bison', 'camel', 'duck', 'elephant'];

test(
    'Should return arrays with length = 1',
    () => {
        expect(chunk(initArr, 1)).toStrictEqual([['ant'], ['bison'], ['camel'], ['duck'], ['elephant']]);
    }
);

test(
    'Should return arrays with specified length and array with rest items',
    () => {
        expect(chunk(initArr, 3)).toStrictEqual([['ant', 'bison', 'camel'], ['duck', 'elephant']]);
    }
);

test(
    'Should return an empty array if length = 0',
    () => {
        expect(chunk(initArr, 0)).toStrictEqual([]);
    }
);

test(
    'Should return an empty array if length is negative',
    () => {
        expect(chunk(initArr, -100)).toStrictEqual([]);
    }
);

test(
    'Should return an empty array if called withous arguments',
    () => {
        expect(chunk()).toStrictEqual([]);
    }
);

test(
    'Should throw an error if first argument is`nt array',
    () => {
        expect(() => {
            chunk('abcdefg', 2);
        }).toThrow(TypeError);
    }
);

test(
    'Should throw an error if second argument is`nt a number',
    () => {
        expect(() => {
            chunk(initArr, 'notNumber');
        }).toThrow(TypeError);
    }
);