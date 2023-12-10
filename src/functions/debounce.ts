//includs the function and an option to cancel it
interface DebouncedFunction<T extends (...args: any[]) => void> {
  debouncedFunction: (...args: Parameters<T>) => void;
  cancel: () => void;
}

export function debounce<T extends (...args: any[]) => void>(
  func: T,
  timeout: number
): DebouncedFunction<T> {
  let timer: ReturnType<typeof setTimeout> | null = null;

  const debouncedFunction = function (...args: Parameters<T>): void {
      // Clear the existing timer, if any
      if (timer !== null) {
          clearTimeout(timer);
      }

      // Set a new timer
      timer = setTimeout(() => {
          // Call the actual function with the provided arguments
          func(...args);
          timer = null; // Reset the timer after the function is invoked
      }, timeout);
  };

  const cancel = function (): void {
      // If there is an existing timer, clear it
      if (timer !== null) {
          clearTimeout(timer);
          timer = null; // Reset the timer after cancellation
      }
  };

  return { debouncedFunction, cancel };
}