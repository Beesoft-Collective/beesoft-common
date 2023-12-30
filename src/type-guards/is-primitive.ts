import { Primitive } from '../global-types.ts';

const isPrimitive = (value: unknown): value is Primitive => {
  const type = typeof value;
  return type === 'string' || type === 'number' || type === 'boolean' || type === 'bigint';
};

const isPrimitiveArray = (value: unknown): value is Array<Primitive> => {
  return Array.isArray(value) && value.every((item) => isPrimitive(item));
};

export { isPrimitive, isPrimitiveArray };
