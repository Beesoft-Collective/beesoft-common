import { debounce } from './debounce.ts';
import { describe, expect, test, mock } from 'bun:test';

describe('debounce function', () => {
  test('should NOT call function', () => {
    const originalFunction = mock((x) => {
      return x;
    });
    const debouncedFunction = debounce(originalFunction, 200);

    // Call the debounced function
    debouncedFunction('call 1');

    // Ensure the original function is NOT called
    expect(originalFunction).not.toHaveBeenCalledWith('call 1');
  });

  test('should call function - flush', () => {
    const originalFunction = mock((x) => {
      return x;
    });
    const debouncedFunction = debounce(originalFunction, 200);

    // Call the debounced function
    debouncedFunction('call 1');
    debouncedFunction.flush();
    // Ensure the original function is called
    expect(originalFunction).toHaveBeenCalledWith('call 1');
  });

  test('should NOT call function - cancel', () => {
    const originalFunction = mock((x) => {
      return x;
    });
    const debouncedFunction = debounce(originalFunction, 200);

    // Call the debounced function
    debouncedFunction('call 1');
    debouncedFunction.cancel();

    // Ensure the original function is called
    expect(originalFunction).not.toHaveBeenCalledWith('call 1');
  });

  // test('should call function - time elapsed', () => {
  //   //const originalFunction = jest.fn();
  //   const originalFunction = mock((x) => {
  //     return x;
  //   });
  //   const debouncedFunction = debounce(originalFunction, 200);

  //   // Call the debounced function
  //   debouncedFunction('call 1');
  //   // Forward time by 200 milliseconds
  //   jest.advanceTimersByTime(200);
  //   // Ensure the original function is called
  //   expect(originalFunction).toHaveBeenCalledWith('call 1');
  // });
});
