const { drop } = require('../costom methods/drop');

const initArr = ['ant', 'bison', 'camel', 'duck', 'elephant'];

test(
    'Called without second argument should return an array without first item',
    () => {
        expect(drop(initArr)).toStrictEqual(['bison', 'camel', 'duck', 'elephant']);
    }
);

test(
    'Should return an array without first num of items',
    () => {
        expect(drop(initArr, 3)).toStrictEqual(['duck', 'elephant']);
    }
);

test(
    'Should return an empty array if number is bigger than length',
    () => {
        expect(drop(initArr, 100)).toStrictEqual([]);
    }
);

test(
    'Should return copy of array if number is 0',
    () => {
        expect(drop(initArr, 0)).toStrictEqual(['ant', 'bison', 'camel', 'duck', 'elephant']);
    }
);

test(
    'Should throw an error if first argument is`nt array',
    () => {
        expect(() => {
            drop('abcdefg', 2);
        }).toThrow(TypeError);
    }
);

test(
    'Should throw an error if second argument is`nt a number',
    () => {
        expect(() => {
            drop(initArr, 'notNumber');
        }).toThrow(TypeError);
    }
);