import { cloneDeep } from './functions/clone-deep/clone-deep.ts';
import { debounce } from './functions/debounce/debounce.ts';
import deepEquals from 'fast-deep-equal';
import { useDeepMemo } from './hooks/use-deep-memo.ts';
import { useStateInitial } from './hooks/use-state-initial.ts';
import { useStateRef } from './hooks/use-state-ref.ts';

// types
import { JsonItem, JsonData } from './custom-types/json-data.ts';
import { MakeRequired } from './custom-types/make-required.ts';
import { TypeOrArray } from './custom-types/type-or-array.ts';

export { cloneDeep, debounce, deepEquals, useDeepMemo, useStateInitial, useStateRef };

export type { JsonData, JsonItem, MakeRequired, TypeOrArray };
