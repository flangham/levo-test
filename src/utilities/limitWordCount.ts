// Only return the first x words in the string, and add elipsis
export const limitWordCount = (text: string, count: number) => {
  const splitIntoWords = text.split(' ');
  return `${splitIntoWords.slice(0, count).join(' ')}...`;
};
