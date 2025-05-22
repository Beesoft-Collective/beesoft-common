import deepEquals from 'fast-deep-equal';

export function arraysAreDifferent(oldArray: ReadonlyArray<unknown>, newArray: ReadonlyArray<unknown>) {
  for (let i = oldArray.length; i-- !== 0; ) {
    if (!deepEquals(oldArray[i], newArray[i])) {
      return true;
    }
  }

  return false;
}

/**
 * Performs an assertion from one type to any other type.
 * @param value - The initial type to convert.
 * @returns {T} - The type to convert to.
 */
export function forceAssert<T>(value: unknown): T {
  return value as T;
}
