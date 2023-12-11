import { debounce } from './debounce.ts';

jest.useFakeTimers();

describe('debounce function', () => {
  it('should NOT call function', () => {
    const originalFunction = jest.fn();
    const debounced = debounce(originalFunction, 200);

    // Call the debounced function
    debounced.debouncedFunction('arg1', 'arg2');

    // Ensure the original function is NOT called
    expect(originalFunction).not.toHaveBeenCalledWith('arg1', 'arg2');
  });
});
