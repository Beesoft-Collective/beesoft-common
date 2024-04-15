const isDate = (value: unknown): value is Date => {
  return value instanceof Date;
};

export { isDate };
