import { debounce } from './debounce.ts';

jest.useFakeTimers();

describe('debounce function', () => {
  it('should NOT call function', () => {
    const originalFunction = jest.fn();
    const debouncedFunction = debounce(originalFunction, 200);

    // Call the debounced function
    debouncedFunction('call 1');

    // Ensure the original function is NOT called
    expect(originalFunction).not.toHaveBeenCalledWith('call 1');
  });

  it('should call function - flush', () => {
    const originalFunction = jest.fn();
    const debouncedFunction = debounce(originalFunction, 200);

    // Call the debounced function
    debouncedFunction('call 1');
    debouncedFunction.flush();
    // Ensure the original function is called
    expect(originalFunction).toHaveBeenCalledWith('call 1');
  });

  it('should NOT call function - cancel', () => {
    const originalFunction = jest.fn();
    const debouncedFunction = debounce(originalFunction, 200);

    // Call the debounced function
    debouncedFunction('call 1');
    debouncedFunction.cancel();

    // Ensure the original function is called
    expect(originalFunction).not.toHaveBeenCalledWith('call 1');
  });

  it('should call function - time elapsed', () => {
    jest.useFakeTimers();
    const originalFunction = jest.fn();
    const debouncedFunction = debounce(originalFunction, 200);

    // Call the debounced function
    debouncedFunction('call 1');
    // Forward time by 200 milliseconds
    jest.advanceTimersByTime(200);
    // Ensure the original function is called
    expect(originalFunction).toHaveBeenCalledWith('call 1');
  });
});
