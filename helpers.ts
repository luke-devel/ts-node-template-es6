export const helloWorld = async () =>
  new Promise((resolve) => setTimeout(() => resolve(`World!`), 2500));
