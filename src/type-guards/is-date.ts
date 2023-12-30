const isDate = (value: unknown): value is Date => {
  return value instanceof Date;
};

const isDateArray = (value: unknown): value is Array<Date> => {
  return Array.isArray(value) && value.every((item) => item instanceof Date);
};

export { isDate, isDateArray };
