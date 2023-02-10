const { dropWhile } = require('../costom methods/dropWhile');

const users = [
    { 'user': 'barney',  'active': false },
    { 'user': 'fred',    'active': false },
    { 'user': 'pebbles', 'active': true }
  ];

test(
    'Should return an array without first items callback on that return true',
    () => {
        expect(dropWhile(users, function(o) { return !o.active; })).toStrictEqual([
            {
               "user": "pebbles",
               "active": true
            }
         ]);
    }
);

test(
    'Should return array without first items that are in predicate',
    () => {
        expect(dropWhile(users, { 'user': 'barney', 'active': false })).toStrictEqual([
            {
                "user": "fred",
                "active": false
            }, {
                "user": "pebbles",
                "active": true
            }
         ]);
    }
);

test(
    'Should return arrays without first items that has properties with values from predicate',
    () => {
        expect(dropWhile(users, ['active', false])).toStrictEqual([
            {
               "user": "pebbles",
               "active": true
            }
         ]);
    }
);

test(
    'Should return arrays without first items that has`nt property',
    () => {
        expect(dropWhile(users, 'active')).toStrictEqual([
            {
               "user": "barney",
               "active": false
            },
            {
               "user": "fred",
               "active": false
            },
            {
               "user": "pebbles",
               "active": true
            }
         ]);
    }
);

test(
    'Should return an empty array if predicat is undefined',
    () => {
        expect(dropWhile(users)).toStrictEqual([]);
    }
);

test(
    'Should throw an error if first argument is`nt array',
    () => {
        expect(() => {
            dropWhile('abcdefg', 2);
        }).toThrow(TypeError);
    }
);