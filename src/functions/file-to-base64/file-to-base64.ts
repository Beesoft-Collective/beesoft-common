const fileToBase64 = (file: File) => {
  return new Promise<string | undefined>((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = () => {
      const base64String = reader.result?.toString() || undefined;
      resolve(base64String);
    };

    reader.onerror = () => {
      reader.abort();
      reject(new Error('Error reading file.'));
    };

    reader.readAsDataURL(file);
  });
};

export { fileToBase64 };
