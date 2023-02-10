const { filter } = require('../costom methods/filter');

const users = [
    { 'user': 'barney', 'age': 36, 'active': true },
    { 'user': 'fred',   'age': 40, 'active': false }
  ];

test(
    'Should return an array with items callback on that return true',
    () => {
        expect(filter(users, function(o) {
            return !o.active;
        })).toStrictEqual([
                {
                    'user': 'fred',   'age': 40, 'active': false
                }
            ])
    }
);

test(
    'Should return an array with items that are in predicate',
    () => {
        expect(filter(users,
            {
            'age': 36, 'active': true
            }
        )).toStrictEqual([
            {
                'user': 'barney', 'age': 36, 'active': true
            }
            ])
    }
);

test(
    'Should return arrays with items that has properties with values from predicate',
    () => {
        expect(filter(users, ['active', false])).toStrictEqual([
            {
                'user': 'fred','age': 40, 'active': false
            }
            ])
    }
);

test(
    'Should return an array with objects that have such property = true',
    () => {
        expect(filter(users, 'active')).toStrictEqual([
            {
                'user': 'barney', 'age': 36, 'active': true
            }
            ])
    }
);

test(
    'Should return an empty array if predicat is undefined',
    () => {
        expect(filter(users)).toStrictEqual([]);
    }
);

test(
    'Should throw an error if first argument is`nt array',
    () => {
        expect(() => {
            filter('abcdefg', 2);
        }).toThrow(TypeError);
    }
);