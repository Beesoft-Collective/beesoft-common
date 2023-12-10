// Import the debounce function
import { debounce } from './debounce';

// Control time in tests
jest.useFakeTimers();

describe('debounce function', () => {
  // Test case 1: Debounced function is called after the specified timeout
  test('should NOT call function', () => {
    const originalFunction = jest.fn();
    const debounced = debounce(originalFunction, 200);

    // Call the debounced function
    debounced.debouncedFunction('arg1', 'arg2');

    // Ensure the original function is NOT called
    expect(originalFunction).not.toHaveBeenCalledWith('arg1', 'arg2');
  });

  test('should call function after timeout', () => {
    const originalFunction = jest.fn();
    const debounced = debounce(originalFunction, 200);

    // Call the debounced function
    debounced.debouncedFunction('arg1', 'arg2');

    // Forward time by 200 milliseconds
    jest.advanceTimersByTime(200);

    // Ensure the original function is called
    expect(originalFunction).toHaveBeenCalledWith('arg1', 'arg2');
  });
});
