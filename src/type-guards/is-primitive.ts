import { Primitive } from '../global-types.ts';

const isPrimitive = (value: unknown): value is Primitive => {
  const type = typeof value;
  return type === 'string' || type === 'number' || type === 'boolean' || type === 'bigint';
};

export { isPrimitive };
