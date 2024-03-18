export const sliceTextByWord = (text: string, word: string): { [key: string]: string } => {
  const wordIndex = text.indexOf(word);
  const firstText = text.slice(0, wordIndex);
  const secondText = text.slice(wordIndex);

  return {
    firstText,
    secondText,
  };
};
