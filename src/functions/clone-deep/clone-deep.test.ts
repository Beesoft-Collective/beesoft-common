import { describe, expect, test } from 'bun:test';
import { cloneDeep } from './clone-deep.ts';

describe('cloneDeep', () => {
  test('simple object clone', () => {
    const object = {
      stringProp: 'test',
      numProp: 2,
      boolProp: true,
      dateProp: new Date(2023, 11, 25),
    };

    const clone = cloneDeep(object);

    expect(clone).toMatchObject(object);
  });

  test('simple clone change', () => {
    const object = {
      stringProp: 'test',
      numProp: 2,
      boolProp: true,
      dateProp: new Date(2023, 11, 25),
    };

    const clone = cloneDeep(object);

    object.stringProp = 'text';

    expect(clone.stringProp).not.toEqual(object.stringProp);
  });

  test('simple array clone', () => {
    const array = [
      {
        stringProp: 'test',
        numProp: 1,
        boolProp: true,
      },
      {
        stringProp: 'test2',
        numProp: 2,
        boolProp: false,
      },
    ];

    const clone = cloneDeep(array);

    expect(clone).toEqual(array);
  });

  test('complex object clone', () => {
    const object = {
      stringProp: 'test',
      complexProp: {
        prop1: 1,
        prop2: 'string',
        prop3: false,
      },
      arrayProp: [
        {
          prop1: 1,
          prop2: 'string',
          prop3: false,
        },
        {
          prop1: 2,
          prop2: 'test',
          prop3: true,
        },
      ],
    };

    const clone = cloneDeep(object);

    expect(clone).toMatchObject(object);
  });

  test('deep object clone', () => {
    const object = {
      stringProp: 'test',
      deepProp: {
        prop1: 1,
        nestedProp: {
          nestedProp1: 'nested',
          arrayProp1: [
            {
              arrNest1: 1,
              arrNest2: 'nest1',
              simpleArr: ['a', 'b', 'c'],
              dateArr: [new Date(2022, 11, 25), new Date(2023, 11, 25)],
            },
            {
              arrNest1: 2,
              arrNest2: 'nest2',
              simpleArr: ['x', 'y', 'z'],
              dateArr: [new Date(2022, 11, 31), new Date(2023, 11, 31)],
            },
          ],
        },
      },
    };

    const clone = cloneDeep(object);

    expect(clone).toMatchObject(object);
  });

  test('simple number array', () => {
    const array = [1, 2, 3];

    const clone = cloneDeep(array);

    expect(clone).toEqual(array);
  });
});
