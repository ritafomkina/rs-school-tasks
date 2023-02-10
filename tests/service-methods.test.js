const { sPush, sSlice, sFind, sFilter, sForEach} = require('../costom methods/service-methods');

const initArr = ['ant', 'bison', 'camel', 'duck', 'elephant'];

// slice

test(
    'Checking with two positions',
    () => {
        expect(sSlice(initArr, 2, 4)).toStrictEqual(['camel', 'duck']);
    }
);

test(
    'Checking without end position',
    () => {
        expect(sSlice(initArr, 2)).toStrictEqual(['camel', 'duck', 'elephant']);
    }
);

test(
    'Checking with negative start position',
    () => {
        expect(sSlice(initArr, -2)).toStrictEqual(['duck', 'elephant']);
    }
);

test(
    'Checking with negative end position',
    () => {
        expect(sSlice(initArr, 2, -1)).toStrictEqual(['camel', 'duck']);
    }
);

test(
    'Checking without positions',
    () => {
        expect(sSlice(initArr)).toStrictEqual(initArr);
    }
);

test(
    'Checking with start position bigger than array length',
    () => {
        expect(sSlice(initArr, 10)).toStrictEqual([]);
    }
);

test(
    'Checking with end position bigger than array length',
    () => {
        expect(sSlice(initArr, 2, 15)).toStrictEqual(['camel', 'duck', 'elephant']);
    }
);

test(
    'Checking with start position less than array length',
    () => {
        expect(sSlice(initArr, -15, 2)).toStrictEqual(['ant', 'bison']);
    }
);

test(
    'Checking with end position less than array length',
    () => {
        expect(sSlice(initArr, 2, -15)).toStrictEqual([]);
    }
);

test(
    'Checking with same start and end position',
    () => {
        expect(sSlice(initArr, 2, 2)).toStrictEqual([]);
    }
);

// push

test(
    'Checking Push with all arguments',
    () => {
        expect(sPush(initArr, 'cat')).toStrictEqual(['ant', 'bison', 'camel', 'duck', 'elephant', 'cat']);
    }
);

// find

test(
    'Checking find with all arguments',
    () => {
        expect(sFind(initArr, item => item.length < 4)).toStrictEqual('ant');
    }
);

// filter

test(
    'Checking filter with all arguments',
    () => {
        expect(sFilter(initArr, item => item.length < 4)).toStrictEqual(['ant', 'cat']);
    }
);

// forEach

test(
    'Checking forEach',
    () => {
        expect(sForEach(initArr, item => item + '?')).toStrictEqual(undefined);
    }
);
