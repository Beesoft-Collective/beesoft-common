import deepEquals from 'fast-deep-equal';

export function arraysAreDifferent(oldArray: ReadonlyArray<unknown>, newArray: ReadonlyArray<unknown>) {
  for (let i = oldArray.length; i-- !== 0; ) {
    if (!deepEquals(oldArray[i], newArray[i])) {
      return true;
    }
  }

  return false;
}
