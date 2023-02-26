const { sPush, sSlice, sFind, sFilter, sForEach} = require('../costom methods/service-methods');

const initArr = ['ant', 'bison', 'camel', 'duck', 'elephant'];

test(
    'Checkin slice with two positions',
    () => {
        expect(sSlice(initArr, 2, 4)).toStrictEqual(['camel', 'duck']);
    }
);

test(
    'Checking slice without end position',
    () => {
        expect(sSlice(initArr, 2)).toStrictEqual(['camel', 'duck', 'elephant']);
    }
);

test(
    'Checking slice with negative start position',
    () => {
        expect(sSlice(initArr, -2)).toStrictEqual(['duck', 'elephant']);
    }
);

test(
    'Checking slice with negative end position',
    () => {
        expect(sSlice(initArr, 2, -1)).toStrictEqual(['camel', 'duck']);
    }
);

test(
    'Checking slice without positions',
    () => {
        expect(sSlice(initArr)).toStrictEqual(initArr);
    }
);

test(
    'Checking slice without end position === 0',
    () => {
        expect(sSlice(initArr, 0, 0)).toStrictEqual([]);
    }
);

test(
    'Checking slice with start position bigger than array length',
    () => {
        expect(sSlice(initArr, 10)).toStrictEqual([]);
    }
);

test(
    'Checking slice with end position bigger than array length',
    () => {
        expect(sSlice(initArr, 2, 15)).toStrictEqual(['camel', 'duck', 'elephant']);
    }
);

test(
    'Checking slice with start position less than array length',
    () => {
        expect(sSlice(initArr, -15, 2)).toStrictEqual(['ant', 'bison']);
    }
);

test(
    'Checking slice with end position less than array length',
    () => {
        expect(sSlice(initArr, 2, -15)).toStrictEqual([]);
    }
);

test(
    'Checking slice  with same start and end position',
    () => {
        expect(sSlice(initArr, 2, 2)).toStrictEqual([]);
    }
);


test(
    'Checking push with all arguments',
    () => {
        expect(sPush(initArr, 'cat')).toStrictEqual(['ant', 'bison', 'camel', 'duck', 'elephant', 'cat']);
    }
);

test(
    'Checking find with all arguments',
    () => {
        expect(sFind(initArr, item => item.length < 4)).toEqual('ant');
    }
);

test(
    'Checking filter with all arguments',
    () => {
        expect(sFilter(initArr, item => item.length < 4)).toStrictEqual(['ant', 'cat']);
    }
);

test(
    'Checking forEach with all arguments',
    () => {
        expect(sForEach(initArr, item => item + '?')).toStrictEqual(undefined);
    }
);
