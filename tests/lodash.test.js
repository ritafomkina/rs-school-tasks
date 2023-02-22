const { Lodash } = require('../costom methods/lodash');

let _ = new Lodash();

describe('Chunk', () => {
  let initArr;

  beforeEach(() => {
    initArr = ['ant', 'bison', 'camel', 'duck', 'elephant'];
  });

  test('Should return an empty array called without arguments', () => {
    expect(_.chunk()).toStrictEqual([]);
  });

  test('Should return an empty array if init array is empty', () => {
    expect(_.chunk([])).toStrictEqual([]);
  });

  test('Should return an empty array if length = 0', () => {
    expect(_.chunk(initArr, 0)).toStrictEqual([]);
  });

  test('Should throw an error if first argument is`nt array', () => {
    expect(() => {
      _.chunk('abcdefg', 2);
    }).toThrow(TypeError);
  });

  test('Should throw an error if second argument is`nt a number', () => {
    expect(() => {
      _.chunk(initArr, 'notNumber');
    }).toThrow(TypeError);
  });

  test('Should throw an error if second argument is NaN', () => {
    expect(() => {
      _.chunk(initArr, NaN);
    }).toThrow(TypeError);
  });

  test('Should throw an error if length is negative', () => {
    expect(() => {
      _.chunk(initArr, -1);
    }).toThrow(TypeError);
  });

  test('Should throw an error if length is fractional number', () => {
    expect(() => {
      _.chunk(initArr, 2.5);
    }).toThrow(TypeError);
  });

  test('Should return many arrays with length = 1 if second argument is 1', () => {
    expect(_.chunk(initArr, 1)).toStrictEqual([
      ['ant'],
      ['bison'],
      ['camel'],
      ['duck'],
      ['elephant'],
    ]);
  });

  test('Should return arrays with specified length and array with rest items', () => {
    expect(_.chunk(initArr, 3)).toStrictEqual([
      ['ant', 'bison', 'camel'],
      ['duck', 'elephant'],
    ]);
  });

  test('Should return an array with one item (copy of origin array) if length is equal to the array.length', () => {
    expect(_.chunk(initArr, 5)).toStrictEqual([initArr]);
  });

  test('Should return an array with one item (copy of origin array) if length is bigger then array.length', () => {
    expect(_.chunk(initArr, 1000)).toStrictEqual([initArr]);
  });
});

describe('Compact', () => {
  const initArr = [0, 1, false, 2, '', 3];
  const onlyFalsy = [0, null, false, '', NaN, undefined];
  const onlyTruthy = [1, 2, 3];

  test('Should return an empty array if called withous arguments', () => {
    expect(_.compact()).toStrictEqual([]);
  });

  test('Should return an empty array if called with ampty array', () => {
    expect(_.compact([])).toStrictEqual([]);
  });

  test('Should throw an error if first argument is`nt array', () => {
    expect(() => {
      _.compact('abcdefg');
    }).toThrow(TypeError);
  });

  test('Should return an array with only truthy values', () => {
    expect(_.compact(initArr)).toStrictEqual([1, 2, 3]);
  });

  test('Should return a copy of original array if all values in array are truthy', () => {
    expect(_.compact(onlyTruthy)).toStrictEqual(onlyTruthy);
  });

  test('Should return an empty array if all values in array are falsy', () => {
    expect(_.compact(onlyFalsy)).toStrictEqual([]);
  });

});

describe('Drop', () => {
  const initArr = ['ant', 'bison', 'camel', 'duck', 'elephant'];

  test('Should return an empty array called without arguments', () => {
    expect(_.drop()).toStrictEqual([]);
  })

  test('Should return an empty array if original array is empty', () => {
    expect(_.drop([], 12)).toStrictEqual([]);
  })

  test('Should return an empty array if number is bigger than arrays length', () => {
    expect(_.drop(initArr, 100)).toStrictEqual([]);
  });

  test('Should throw an error if first argument is`nt array', () => {
    expect(() => {
      _.drop('abcdefg', 2);
    }).toThrow(TypeError);
  });

  test('Should throw an error if second argument is`nt a number', () => {
    expect(() => {
      _.drop(initArr, 'notNumber');
    }).toThrow(TypeError);
  });

  test('Should throw an error if second argument is NaN', () => {
    expect(() => {
      _.drop(initArr, NaN);
    }).toThrow(TypeError);
  });

  test('Should throw an error if second argument is negative', () => {
    expect(() => {
      _.drop(initArr, -1);
    }).toThrow(TypeError);
  });

  test('Should throw an error if second argument is fractional numbers,', () => {
    expect(() => {
      _.drop(initArr, 1.234);
    }).toThrow(TypeError);
  });

  test('Should return an array without first item called without second argument', () => {
    expect(_.drop(initArr)).toStrictEqual([
      'bison',
      'camel',
      'duck',
      'elephant',
    ]);
  });

  test('Should return an array without first num of items', () => {
    expect(_.drop(initArr, 3)).toStrictEqual(['duck', 'elephant']);
  });

  test('Should return copy of array if number is 0', () => {
    expect(_.drop(initArr, 0)).toStrictEqual([
      'ant',
      'bison',
      'camel',
      'duck',
      'elephant',
    ]);
  });

});

describe('DropWhile', () => {
  const users = [
    { user: 'barney', active: false },
    { user: 'fred', active: false },
    { user: 'pebbles', active: true },
  ];

  test('Should return an empty array called without arguments', () => {
    expect(_.dropWhile()).toStrictEqual([]);
  });

  test('Should return an empty array if length of initial array is 0', () => {
    expect(_.dropWhile([], (o) => o === 1 )).toStrictEqual([]);
  });

  test('Should return an empty array if predicat is undefined', () => {
    expect(_.dropWhile(users)).toStrictEqual([]);
  });

  test('Should throw an error if first argument is`nt array', () => {
    expect(() => {
      _.dropWhile('abcdefg', 2);
    }).toThrow(TypeError);
  });

  test('Should return an array without first items callback on that return true', () => {
    expect(
      _.dropWhile(users, function (o) {
        return !o.active;
      })
    ).toStrictEqual([
      {
        user: 'pebbles',
        active: true,
      },
    ]);
  });

  test('Should return array without first items that are in predicate', () => {
    expect(_.dropWhile(users, { user: 'barney', active: false })).toStrictEqual(
      [
        {
          user: 'fred',
          active: false,
        },
        {
          user: 'pebbles',
          active: true,
        },
      ]
    );
  });

  test('Should return arrays without first items that has properties with values from predicate', () => {
    expect(_.dropWhile(users, ['active', false])).toStrictEqual([
      {
        user: 'pebbles',
        active: true,
      },
    ]);
  });

  // test('Should return an array without first items that has`nt property from predicate', () => {
  //   const newUsers = [
  //     { 'user': 'barney',  'active': false },
  //     { 'user': 'fred',  'active': undefined },
  //     { 'user': 'pebbles', 'active': true }
  //   ];

  //   expect(_.dropWhile(newUsers, 'active')).toStrictEqual([
  //     {
  //        "user": "barney",
  //        "active": false
  //     },
  //     {
  //        "user": "fred"
  //     },
  //     {
  //        "user": "pebbles",
  //        "active": true
  //     }
  //  ]);
  // });
});

describe('Take', () => {
  const initArr = [1, 2, 3];

  test('Should return an empty array if called without arguments', () => {
    expect(_.take()).toStrictEqual([]);
  });
  test('Should return an empty array if length of initial array is 0', () => {
    expect(_.take([], 2)).toStrictEqual([]);
  });
  test('Should throw an error if first argument is`nt array', () => {
    expect(() => {
      _.take('abcdefg', 2);
    }).toThrow(TypeError);
  });
  test('Should throw an error if second argument is`nt a number', () => {
    expect(() => {
      _.take(initArr, 'notNumber');
    }).toThrow(TypeError);
  });
  test('Should throw an error if second argument is NaN', () => {
    expect(() => {
      _.take(initArr, NaN);
    }).toThrow(TypeError);
  });
  test('Should throw an error if second argument is 0', () => {
    expect(() => {
      _.take(initArr, 0);
    }).toThrow(TypeError);
  });
  test('Should throw an error if second argument is negative', () => {
    expect(() => {
      _.take(initArr, -1);
    }).toThrow(TypeError);
  });
  test('Should throw an error if second argument is fractional number', () => {
    expect(() => {
      _.take(initArr, 1.2);
    }).toThrow(TypeError);
  });
  test('Should return array with first item if called without second argument', () => {
    expect(_.take(initArr)).toStrictEqual([1]);
  });
  test('Should return array with 2 first items if called with 2', () => {
    expect(_.take(initArr, 2)).toStrictEqual([1, 2]);
  });
  test('Should return copy of init array if second argument is bigger then array length', () => {
    expect(_.take(initArr, 5)).toStrictEqual([1, 2, 3]);
  });
});

describe('Filter', () => {
  const users = [
    { user: 'barney', age: 36, active: true },
    { user: 'fred', age: 40, active: false },
  ];

  test('Should return an empty array called without arguments', () => {
    expect(_.filter()).toStrictEqual([]);
  });

  test('Should return an empty array if length of initial array is 0', () => {
    expect(_.filter([], (o) => o === 1 )).toStrictEqual([]);
  });

  test('Should return an empty array if predicat is undefined', () => {
    expect(_.filter(users)).toStrictEqual([]);
  });

  test('Should return an array with items callback on that return true', () => {
    expect(
      _.filter(users, function (o) {
        return !o.active;
      })
    ).toStrictEqual([
      {
        user: 'fred',
        age: 40,
        active: false,
      },
    ]);
  });

  test('Should return an array with items that are in predicate', () => {
    expect(
      _.filter(users, {
        age: 36,
        active: true,
      })
    ).toStrictEqual([
      {
        user: 'barney',
        age: 36,
        active: true,
      },
    ]);
  });

  test('Should return arrays with items that has properties with values from predicate', () => {
    expect(_.filter(users, ['active', false])).toStrictEqual([
      {
        user: 'fred',
        age: 40,
        active: false,
      },
    ]);
  });

  test('Should return an array with objects that have such property = true', () => {
    expect(_.filter(users, 'active')).toStrictEqual([
      {
        user: 'barney',
        age: 36,
        active: true,
      },
    ]);
  });

  test('Should throw an error if first argument is`nt array', () => {
    expect(() => {
      _.filter('abcdefg', 2);
    }).toThrow(TypeError);
  });
});

describe('Find', () => {
  const users = [
    { user: 'barney', age: 36, active: true },
    { user: 'fred', age: 40, active: false },
    { user: 'pebbles', age: 1, active: true },
  ];

  test('Should return first item on with callback return true', () => {
    expect(
      _.find(users, function (o) {
        return o.age < 40;
      })
    ).toEqual({
      user: 'barney',
      age: 36,
      active: true,
    });
  });

  test('Should return first item with the same values', () => {
    expect(_.find(users, { age: 1, active: true })).toEqual({
      user: 'pebbles',
      age: 1,
      active: true,
    });
  });

  test('Should return first item with properties with values from predicate', () => {
    expect(_.find(users, ['active', false])).toEqual({
      user: 'fred',
      age: 40,
      active: false,
    });
  });

  test('Should return first item with properties with values from predicate', () => {
    expect(_.find(users, 'active')).toEqual({
      user: 'barney',
      age: 36,
      active: true,
    });
  });

  test('Should return an empty array if predicat is undefined', () => {
    expect(_.find(users)).toStrictEqual([]);
  });

  test('Should throw an error if first argument is`nt array', () => {
    expect(() => {
      _.find('abcdefg', 2);
    }).toThrow(TypeError);
  });
});

describe('Includes', () => {
  const initArr = [1, 2, 3];

  test('Should return boolean true if called with item without start position', () => {
    expect(_.includes(initArr, 1)).toBeTruthy();
  });

  test('Should return boolean false called with item and without start position', () => {
    expect(_.includes(initArr, 1, 2)).toStrictEqual(false);
  });
  test('Should throw an error if first argument is`nt array', () => {
    expect(() => {
      _.includes('abcdefg');
    }).toThrow(TypeError);
  });
});

describe('Map', () => {
  test('Should return modified array', () => {
    function square(n) {
      return n * n;
    }
    expect(_.map([4, 8], square)).toStrictEqual([16, 64]);
  });

  test('Should return modified array', () => {
    const users = [{ user: 'barney' }, { user: 'fred' }];
    expect(_.map(users, 'user')).toStrictEqual(['barney', 'fred']);
  });
  test('Should throw an error if first argument is`nt array', () => {
    expect(() => {
      _.map('abcdefg');
    }).toThrow(TypeError);
  });
});

describe('Lodash: zip', () => {
  test('Should return one array with two arrays', () => {
    expect(_.zip(['a', 'b'], [1, 2], [true, false])).toStrictEqual([
      ['a', 1, true],
      ['b', 2, false],
    ]);
  });

  test('Should return an empty array called without arguments', () => {
    expect(_.zip()).toStrictEqual([]);
  });

  test('Should throw an error called with arrays with different length', () => {
    expect(() => {
      _.zip(['a', 'b'], [1, 2], [true, false, 'something']);
    }).toThrow(Error);
  });

  test('Should throw an error called with arrays that an item is`nt array', () => {
    expect(() => {
      _.zip(['a', 'b'], '[1, 2]', [true, false, 'something']);
    }).toThrow(TypeError);
  });
});

describe('Lodash: merge', () => {

test('Should return object with merged properties', () => {
  const object = {
    'a': [{ 'b': 2 }, { 'd': 4 }]
  };

  const other = {
    'a': [{ 'c': 3 }, { 'e': 5 }]
  };
    expect(_.merge(object, other)).toStrictEqual({ 'a': [{ 'b': 2, 'c': 3 }, { 'd': 4, 'e': 5 }] });
});
test('Should ignore same properties that aren`t arrays', () => {
  const object = {
    'a': [{ 'b': 2 }, { 'd': 4 }]
  };

  const other = {
    'a': 'lalala'
  };
  expect(_.merge(object, other)).toStrictEqual({
    'a': [{ 'b': 2 }, { 'd': 4 }]
  });
});
test('Should return object with additional properties if original object and sourceObjects have different properties', () => {
  const object = {
    'a': [{ 'b': 2 }, { 'd': 4 }]
  };

  const other = {
    'b': [{ 'c': 3 }, { 'e': 5 }]
  };
  expect(_.merge(object, other)).toStrictEqual({
    'a': [{ 'b': 2 }, { 'd': 4 }],
    'b': [{ 'c': 3 }, { 'e': 5 }]
  });
});
});

describe('Lodash: omit', () => {
  const object = { a: 1, b: '2', c: 3 };
  test('Should return new object without properties that array includes', () => {
    expect(_.omit(object, ['a', 'c'])).toEqual({ b: '2' });
  });
});

describe('Lodash: omitBy', () => {
  const object = { a: 1, b: '2', c: 3 };
  test('Should return new object without properties callback on that is falsy', () => {
    expect(
      _.omitBy(object, function (item) {
        return typeof item === 'number';
      })
    ).toEqual({ b: '2' });
  });
});

describe('Lodash: pick', () => {
  const object = { a: 1, b: '2', c: 3 };
  test('Should return new object with properties that array includes', () => {
    expect(_.pick(object, ['a', 'c'])).toEqual({ a: 1, c: 3 });
  });
});

describe('Lodash: pickBy', () => {
  const object = { a: 1, b: '2', c: 3 };
  test('Should return new object with properties callback on that is truthy', () => {
    expect(
      _.pickBy(object, function (item) {
        return typeof item === 'number';
      })
    ).toEqual({ a: 1, c: 3 });
  });
});

describe('Lodash: toPairs', () => {
  const object = { a: 1, b: '2', c: 3 };
  test('Should return array with pairs key-values', () => {
    expect(_.toPairs(object)).toEqual([
      ['a', 1],
      ['b', '2'],
      ['c', 3],
    ]);
  });
});
