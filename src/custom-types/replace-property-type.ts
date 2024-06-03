type ReplacePropertyType<Type, ReplaceKey extends keyof Type, NewType> = Omit<Type, ReplaceKey> & {
  [Property in ReplaceKey]: NewType;
};

export { ReplacePropertyType };
