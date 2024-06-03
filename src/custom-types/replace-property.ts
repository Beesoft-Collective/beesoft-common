type ReplaceProperty<Type, ReplaceKey extends keyof Type, NewKey> = Omit<Type, ReplaceKey> & {
  [Property in ReplaceKey]: NewKey
};

export { ReplaceProperty };
