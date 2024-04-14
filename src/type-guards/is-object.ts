const isObject = (value: unknown): value is Record<string, unknown> => {
  if (value === null || value === undefined) {
    return false;
  }

  return typeof value === 'object';
};

export { isObject };
