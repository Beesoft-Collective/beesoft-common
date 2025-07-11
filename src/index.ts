import { cloneDeep } from './functions/clone-deep/clone-deep.ts';
import { debounce } from './functions/debounce/debounce.ts';
import deepEquals from 'fast-deep-equal';
import { forceAssert } from './functions/common.ts';
import { useDeepMemo } from './hooks/use-deep-memo.ts';
import { useDeepEffect } from './hooks/use-deep-effect.ts';
import { useEvent, useEventType } from './hooks/use-event.ts';
import { usePropertyChanged } from './hooks/use-property-changed.ts';
import { useStateInitial, useStateRefInitial } from './hooks/use-state-initial.ts';
import { useStateRef } from './hooks/use-state-ref.ts';

// types
import { DebouncedFunction } from './functions/debounce/debounce.ts';
import { FormInputControl, FormInputControlData } from './custom-types/form-control.interface.ts';
import { InitialState } from './hooks/use-state-initial.ts';
import { JsonItem, JsonData } from './custom-types/json-data.ts';
import { MakeOptional } from './custom-types/make-optional.ts';
import { MakeRequired } from './custom-types/make-required.ts';
import { TypeOrArray } from './custom-types/type-or-array.ts';
import { ReplacePropertyType } from './custom-types/replace-property-type.ts';

export {
  cloneDeep,
  debounce,
  deepEquals,
  forceAssert,
  useDeepMemo,
  useDeepEffect,
  useEvent,
  useEventType,
  usePropertyChanged,
  useStateInitial,
  useStateRefInitial,
  useStateRef,
};

export type {
  DebouncedFunction,
  FormInputControl,
  FormInputControlData,
  InitialState,
  JsonData,
  JsonItem,
  MakeOptional,
  MakeRequired,
  ReplacePropertyType,
  TypeOrArray,
};
