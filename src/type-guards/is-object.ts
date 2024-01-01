const isObject = (value: unknown): value is Record<string, unknown> => {
  if (value === null || value === undefined) {
    return false;
  }

  return typeof value === 'object';
};

const isObjectArray = (value: unknown): value is Array<Record<string, unknown>> => {
  return Array.isArray(value) && value.every((item) => isObject(item));
};

export { isObject, isObjectArray };
